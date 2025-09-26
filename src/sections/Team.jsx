import React from 'react'
import { motion } from 'motion/react'

const members = [
  { name: 'Ujjwal Paliwal', role: 'AI and ML Engineer', image: '/images/UP.png' },
  { name: 'Shashwat Shinghal', role: 'IOT Engineer', image: '/images/SS.jpeg' },
  { name: 'Tushar Varshney', role: 'Frontend Developer', image: '/images/TV2.png' },
  { name: 'Daksh Dixit', role: 'Backend Developer', image: '/images/DD.jpeg' },
  { name: 'Priyanshu Sharma', role: 'UI/UX and Research', image: '/images/PS.jpeg' }
]

const Team = () => {
  return (
    <section id="team" className="max-w-6xl mx-auto px-4 py-16 md:py-24">
      <div className="text-center mb-12 md:mb-16">
        <motion.h2
          className="text-4xl md:text-6xl font-bold text-secondary mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Team
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-secondary-accent max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Small, focused, and hands-on. We ship fast and iterate with users.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-8">
        {members.map((m, i) => (
          <motion.div
            key={m.name}
            className="group rounded-3xl border border-primary-accent/50 bg-primary-accent/20 backdrop-blur-sm p-6 md:p-8 flex flex-col items-center text-center hover:border-glight/50 hover:bg-primary-accent/30 transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            {m.image ? (
              <img
                src={m.image}
                alt={m.name}
                className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover mb-4 border border-primary-accent/50 group-hover:scale-110 transition-transform duration-300"
              />
            ) : (
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-glight/20 to-ylight/20 flex items-center justify-center text-glight text-2xl md:text-3xl font-bold mb-4 border border-primary-accent/50 group-hover:scale-110 transition-transform duration-300">
                {m.name[0]}
              </div>
            )}
            <h3 className="text-lg md:text-xl font-bold text-secondary mb-2">{m.name}</h3>
            <p className="text-secondary-accent text-sm md:text-base leading-relaxed">{m.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Team