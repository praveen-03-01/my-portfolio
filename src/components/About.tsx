import {motion} from 'motion/react';
import SectionHeading from './SectionHeading';
import { User, Code, GraduationCap } from 'lucide-react';
const About = () => {
  return (
    <div>
      <section id="about" className="section-padding">
      <div className="container mx-auto px-6">
        <SectionHeading
          title="About Me"
          subtitle="A passionate developer dedicated to building high-quality web applications and exploring the frontiers of AI."
        />

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-[32px] hover:border-brand-primary/50 transition-colors group"
          >
            <div className="w-14 h-14 bg-brand-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-primary/20 transition-colors">
              <User className="text-brand-primary w-7 h-7" />
            </div>
            <h3 className="text-2xl mb-4">Who I Am</h3>
            <p className="text-gray-400 leading-relaxed">
              I am a passionate Software Engineering undergraduate dedicated to building modern, responsive, and user-friendly web applications while continuously improving my technical skills.

            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass p-8 rounded-[32px] hover:border-brand-primary/50 transition-colors group"
          >
            <div className="w-14 h-14 bg-brand-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-primary/20 transition-colors">
              <Code className="text-brand-primary w-7 h-7" />
            </div>
            <h3 className="text-2xl mb-4">What I Do</h3>
            <p className="text-gray-400 leading-relaxed">
             Creating modern, responsive web applications with React, CSS, Tailwind, TypeScript, and Next.js while working with Python, Node.js, Firebase, and TensorFlow to build smart digital solutions.

            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass p-8 rounded-[32px] hover:border-brand-primary/50 transition-colors group"
          >
            <div className="w-14 h-14 bg-brand-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-primary/20 transition-colors">
              <GraduationCap className="text-brand-primary w-7 h-7" />
            </div>
            <h3 className="text-2xl mb-4">My Goal</h3>
            <p className="text-gray-400 leading-relaxed">
              My mission is to build software that is not only functional but also beautiful and accessible to everyone. I'm always looking for new challenges and opportunities to grow.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default About
