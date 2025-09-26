import React, { useState } from 'react'
import { motion } from 'motion/react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const About = () => {
  const [sliderValue, setSliderValue] = useState(50)

  const g_values = [0, 30, 18, 12, 15, 20, 12, 18, 21, 25, 30];
  const data = Array.from({ length: 11 }, (_, i) => {
    const time = i;
    const staticWait = 60;
    let intelliWait;
    if (i === 0) {
      intelliWait = 60;
    } else {
      const g_i = g_values[i];
      const s = sliderValue / 100;
      const min_wait = 30;
      const max_density_wait = 60 - g_i;
      intelliWait = (1 - s) * min_wait + s * max_density_wait;
    }
    return { time, static: staticWait, intelli: intelliWait };
  });
  return (
    <section id="about" className="max-w-6xl mx-auto px-4 py-16 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-secondary mb-6">About IntelliSignal</h2>
          <p className="text-lg md:text-xl text-secondary-accent leading-relaxed mb-8">
            We build AI-driven traffic systems that learn from the city itself. Our
            focus is clarity: minimal interfaces, measurable outcomes, and seamless
            integrations. The result is a smoother, safer, greener flow.
          </p>
          <div className="flex flex-wrap gap-3">
            {['Edge AI', 'Privacy-first', 'Open API', 'Operator-friendly'].map((tag, i) => (
              <motion.span
                key={tag}
                className="px-4 py-2 rounded-full text-sm border border-primary-accent/50 bg-primary-accent/20 text-secondary-accent hover:border-glight/50 hover:text-glight transition-colors duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="relative h-auto md:h-[420px] lg:h-[450px] rounded-3xl border border-primary-accent/50 bg-primary-accent/20 backdrop-blur-sm overflow-hidden p-6 flex flex-col"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex-grow">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#51e88e20" />
                <XAxis dataKey="time" stroke="#e9d051" label={{ value: 'Iteration Cycles', position: 'insideBottom', offset: -5, style: { textAnchor: 'middle', fill: '#e9d051' } }} />
                <YAxis stroke="#e97451" label={{ value: 'Wait Time (sec)', angle: -90, position: 'insideLeft', style: { textAnchor: 'middle', fill: '#e97451' } }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1a1a1a',
                    border: '1px solid #51e88e',
                    borderRadius: '8px',
                    color: '#e9d051'
                  }}
                  labelStyle={{ color: '#e9d051' }}
                />
                <Legend wrapperStyle={{ paddingTop: '20px' }} />
                <Line type="monotone" dataKey="static" stroke="#e97451" strokeWidth={2} name="Static Signal" dot={false} />
                <Line type="monotone" dataKey="intelli" stroke="#51e88e" strokeWidth={2} name="IntelliSignal" dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-6">
            <label className="text-secondary-accent block mb-2 text-center">Vehicle Density: {sliderValue}%</label>
            <input
              type="range"
              min="0"
              max="100"
              value={sliderValue}
              onChange={(e) => setSliderValue(Number(e.target.value))}
              className="w-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About