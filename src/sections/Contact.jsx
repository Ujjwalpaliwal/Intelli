import React, { useState } from 'react'
import { motion } from 'motion/react'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const onChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    // Stub submission for now
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 2500)
  }

  return (
    <section id="contact" className="max-w-4xl mx-auto px-4 py-16 md:py-24">
      <div className="text-center mb-12 md:mb-16">
        <motion.h2
          className="text-4xl md:text-6xl font-bold text-secondary mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Contact
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-secondary-accent max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Tell us about your city's goals. We'll follow up within 2 business days.
        </motion.p>
      </div>

      <motion.form
        onSubmit={onSubmit}
        className="rounded-3xl border border-primary-accent/50 bg-primary-accent/20 backdrop-blur-sm p-8 md:p-12 space-y-6 shadow-lg shadow-black/10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-secondary mb-2">Name</label>
            <input
              name="name"
              value={form.name}
              onChange={onChange}
              required
              className="w-full px-4 py-3 rounded-xl bg-primary/50 border border-primary-accent/50 text-secondary placeholder-secondary-accent focus:outline-none focus:border-glight/50 focus:ring-2 focus:ring-glight/20 transition-all duration-300"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-secondary mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={onChange}
              required
              className="w-full px-4 py-3 rounded-xl bg-primary/50 border border-primary-accent/50 text-secondary placeholder-secondary-accent focus:outline-none focus:border-glight/50 focus:ring-2 focus:ring-glight/20 transition-all duration-300"
              placeholder="you@company.com"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-secondary mb-2">Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={onChange}
            rows={6}
            required
            className="w-full px-4 py-3 rounded-xl bg-primary/50 border border-primary-accent/50 text-secondary placeholder-secondary-accent focus:outline-none focus:border-glight/50 focus:ring-2 focus:ring-glight/20 transition-all duration-300 resize-none"
            placeholder="What are you looking to solve?"
          />
        </div>
        <div className="flex justify-center pt-4">
          <motion.button
            type="submit"
            className="px-8 py-4 bg-glight text-primary font-bold rounded-xl hover:bg-ylight transition-colors duration-300 shadow-lg shadow-glight/20"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            {submitted ? 'Thanks! We will be in touch.' : 'Send message'}
          </motion.button>
        </div>
      </motion.form>
    </section>
  )
}

export default Contact