import {motion} from 'motion/react';
import SectionHeading from './SectionHeading';
import {PROJECTS} from '../constants';
import { ExternalLink, ArrowUpRight } from 'lucide-react';

const Project = () => {
  return (
    <section id="projects" className="section-padding bg-dark-card/10">
      <div className="container mx-auto px-6">
        <SectionHeading
          title="Featured Projects"
          subtitle="A selection of my recent work, ranging from AI applications to complex web platforms."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group glass rounded-[32px] overflow-hidden hover:border-brand-primary/30 transition-all flex flex-col h-full"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                    >
                     
                    </a>
                    <a
                      href={project.link}
                      className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 bg-brand-primary/10 text-brand-primary text-[10px] font-bold uppercase tracking-wider rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl mb-3 flex items-center justify-between group-hover:text-brand-primary transition-colors">
                  {project.title}
                  <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  className="text-sm font-bold text-white flex items-center gap-2 hover:text-brand-primary transition-colors"
                >
                  View Case Study
                  <div className="h-[1px] w-4 bg-white group-hover:bg-brand-primary transition-colors" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  
  )
}

export default Project
