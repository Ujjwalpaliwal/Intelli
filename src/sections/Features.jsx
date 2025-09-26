import React from 'react'
import { motion } from 'motion/react'

const features = [
  {
    title: 'Adaptive Signals',
    desc: 'Real-time optimization using live traffic telemetry and predictive models.',
    icon: '🟢'
  },
  {
    title: 'Vision Analytics',
    desc: 'Camera-based detection for lanes, pedestrians, and anomalies with privacy-first processing.',
    icon: '🎥'
  },
  {
    title: 'Citywide Insights',
    desc: 'Unified dashboard with KPI tracking, heatmaps, and historical trend analysis.',
    icon: '🗺️'
  },
  {
    title: 'Open API',
    desc: 'Integrate with existing ITS stacks via secure, versioned REST and Webhooks.',
    icon: '🔗'
  }
]

const Features = () => {
  return (
    <section id="features" className="max-w-6xl mx-auto px-4 py-16 md:py-24">
      <div className="text-center mb-12 md:mb-16">
        <motion.h2
          className="text-4xl md:text-6xl font-bold text-secondary mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Features
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-secondary-accent max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Minimal, focused capabilities that deliver measurable impact from day one.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            className="group rounded-3xl border border-primary-accent/50 bg-primary-accent/20 backdrop-blur-sm p-6 md:p-8 hover:border-glight/50 hover:bg-primary-accent/30 transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <div className="text-3xl md:text-4xl mb-4 group-hover:scale-110 transition-transform duration-300" aria-hidden>
              {f.icon}
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-secondary mb-3">{f.title}</h3>
            <p className="text-secondary-accent leading-relaxed text-sm md:text-base">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Features