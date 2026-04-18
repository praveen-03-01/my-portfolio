import {motion} from 'motion/react';
import SectionHeading from './SectionHeading';
import { EDUCATION, CERTIFICATES } from '../constants';
import { Award, BookOpen } from 'lucide-react';

const Education = () => {
  return (
    <div>
      <section className="section-padding bg-dark-card/20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Education */}
          <div>
            <SectionHeading title="Education" centered={false} />
            <div className="space-y-8">
              {EDUCATION.map((item, i) => (
                <motion.div
                  key={item.school}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative pl-8 border-l border-dark-border"
                >
                  <div className="absolute top-0 left-[-5px] w-[10px] h-[10px] rounded-full bg-brand-primary shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                  <div className="text-brand-primary text-sm font-bold mb-2 flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    {item.period}
                  </div>
                  <h3 className="text-xl font-bold mb-1">{item.school}</h3>
                  <div className="text-gray-300 font-medium mb-3">{item.degree}</div>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certificates */}
          <div>
            <SectionHeading title="Certificates" centered={false} />
            <div className="grid gap-4">
              {CERTIFICATES.map((cert, i) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass p-6 rounded-2xl flex items-center gap-6 hover:border-brand-primary/30 transition-all group"
                >
                  <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center group-hover:bg-brand-primary/20 transition-colors">
                    <Award className="text-brand-primary w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white group-hover:text-brand-primary transition-colors">
                      {cert.name}
                    </h4>
                    <div className="text-sm text-gray-400">
                      {cert.issuer} • {cert.date}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Education
