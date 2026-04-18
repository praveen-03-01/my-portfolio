import { motion } from "motion/react";
import {STATS} from '../constants';

const Stats = () => {
  return (
    <section className="py-12 border-y border-dark-border bg-dark-card/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500 font-medium uppercase tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
