import { motion }from 'motion/react';
import SectionHeading from './SectionHeading';
import { SKILLS } from '../constants';
import * as Icons from 'lucide-react';

const Skills = () => {
  return (
    <div>
       <section id="skills" className="section-padding">
      <div className="container mx-auto px-6">
        <SectionHeading
          title="Technical Skills"
          subtitle="A comprehensive list of technologies and tools I use to bring ideas to life."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {SKILLS.map((skill, i) => {
            // @ts-ignore
            const Icon = Icons[skill.icon] || Icons.Code;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -5 }}
                className="glass p-6 rounded-3xl text-center group hover:border-brand-primary/50 transition-all"
              >
                <div className="w-16 h-16 bg-dark-bg rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-primary/10 transition-colors">
                  <Icon className="w-8 h-8 text-gray-400 group-hover:text-brand-primary transition-colors" />
                </div>
                <h3 className="font-bold text-white mb-1">{skill.name}</h3>
                <p className="text-xs text-gray-500 font-medium uppercase tracking-widest">
                  {skill.category}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
    </div>
  )
}

export default Skills
