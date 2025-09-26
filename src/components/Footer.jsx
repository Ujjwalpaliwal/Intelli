import React from 'react'
import { motion } from 'motion/react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: "Features", href: "#features" },
    { name: "About", href: "#about" },
    { name: "Team", href: "#team" },
    { name: "Contact", href: "#contact" }
  ]

  const socialLinks = [
    { name: "Twitter", icon: "𝕏", href: "#twitter" },
    { name: "LinkedIn", icon: "in", href: "#linkedin" },
    { name: "GitHub", icon: "⚡", href: "#github" }
  ]

  return (
    <footer className="bg-primary-accent/60 backdrop-blur-sm border-t border-primary-accent">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-glight mb-3">IntelliSignal</h3>
            <p className="text-secondary-accent mb-6 max-w-lg leading-relaxed">
              Minimal AI platform for adaptive traffic control. Privacy-first, open, and built for operators.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full border border-primary-accent bg-primary/40 flex items-center justify-center text-secondary-accent hover:text-glight hover:border-glight transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  viewport={{ once: true }}
                >
                  <span className="text-sm font-medium">{social.icon}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-secondary mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + (index * 0.05) }}
                  viewport={{ once: true }}
                >
                  <a
                    href={link.href}
                    className="text-secondary-accent hover:text-glight transition-colors duration-300 text-sm block"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="pt-6 border-t border-primary-accent flex flex-col sm:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="text-secondary-accent text-sm">
            © {currentYear} IntelliSignal. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-sm">
            <a href="#privacy" className="text-secondary-accent hover:text-glight transition-colors">
              Privacy
            </a>
            <a href="#terms" className="text-secondary-accent hover:text-glight transition-colors">
              Terms
            </a>
            <a href="#security" className="text-secondary-accent hover:text-glight transition-colors">
              Security
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
