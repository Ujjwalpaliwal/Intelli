import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Marquee from "react-fast-marquee";

const tags = ["Real Time", "Computer Vision", "Adaptive Signals", "API Integration", "Operator UX", "Privacy-first"];

const Hero = () => {
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 60, damping: 12 })
  const sy = useSpring(my, { stiffness: 60, damping: 12 })

  const rotateX = useTransform(sy, [-50, 50], [8, -8])
  const rotateY = useTransform(sx, [-50, 50], [-8, 8])

  const onMouseMove = (e) => {
    const bounds = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - (bounds.left + bounds.width / 2)
    const y = e.clientY - (bounds.top + bounds.height / 2)
    mx.set(Math.max(-50, Math.min(50, x / 10)))
    my.set(Math.max(-50, Math.min(50, y / 10)))
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary w-full">
      {/* Background blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-32 w-[36rem] h-[36rem] bg-glight/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-[40rem] h-[40rem] bg-ylight/10 blur-3xl rounded-full" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
            backgroundSize: "42px 42px",
          }}
        />
      </div>

      <motion.div
        className="relative w-full px-4 max-w-6xl mx-auto"
        onMouseMove={onMouseMove}
        style={{ perspective: 1200 }}
      >
        {/* Top label */}
        <motion.div
          className="mt-8 mb-8 flex items-center justify-center gap-2 text-secondary-accent text-xs tracking-widest uppercase"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="h-[2px] w-8 bg-secondary-accent/40" />
          <span className="font-bold text-[1rem]">IntelliSignal</span>
          <span className="h-[2px] w-8 bg-secondary-accent/40" />
        </motion.div>

        {/* Headline with spotlight */}
        <div className="relative text-center">
          <div className="absolute inset-0 bg-gradient-to-r from-glight/20 via-transparent to-rlight/20 blur-2xl -z-10" />
          <motion.h1
            className="font-bold leading-[1.05] mb-10"
            style={{ rotateX, rotateY }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="block text-5xl md:text-7xl lg:text-8xl text-secondary mb-2">
              AI for City Flow
            </span>
            <span className="block text-3xl md:text-5xl lg:text-6xl bg-gradient-to-r from-glight via-ylight to-rlight bg-clip-text text-transparent">
              Minimal. Measurable. Real-time.
            </span>
          </motion.h1>
        </div>

        {/* CTA panel */}
        <motion.div
          className="mx-auto max-w-3xl backdrop-blur-md bg-primary-accent/40 border border-primary-accent/60 shadow-lg shadow-black/20 rounded-2xl p-5 md:p-6 text-center"
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <p className="text-secondary-accent text-base md:text-lg leading-relaxed mb-5">
            Replace static schedules with adaptive signals that learn from the street. Privacy-first vision, API integration, and an operator UI built for clarity.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <motion.a
              href="#contact"
              className="px-6 py-3 rounded-lg bg-glight text-primary font-semibold hover:bg-ylight transition-colors"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Request Demo
            </motion.a>
            <motion.a
              href="#features"
              className="px-6 py-3 rounded-lg border border-secondary text-secondary hover:bg-secondary hover:text-primary transition-colors"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Explore Features
            </motion.a>
          </div>
        </motion.div>

        {/* Seamless marquee */}
        <div className="relative overflow-hidden mt-10 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <Marquee
            speed={50}
            direction="left"
            loop={0}
            className="text-secondary-accent whitespace-nowrap"
          >
            {[...tags, ...tags].map((t, i) => (
              <span
                key={i}
                className="px-4 py-1 rounded-full border border-primary-accent bg-primary/30 text-sm inline-block flex-shrink-0 mr-6"
              >
                {t}
              </span>
            ))}
          </Marquee>
        </div>


        {/* One subtle floating accent */}
        <motion.div
          className="absolute -z-10 top-32 left-1/4 w-3 h-3 bg-glight rounded-full"
          animate={{ y: [0, -16, 0], opacity: [0.4, 0.9, 0.4] }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        {/* Scroll cue */}
        <motion.div
          className="mt-12 flex justify-center"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-secondary/80 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-secondary/80 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2.2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
