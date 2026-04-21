import {motion} from 'motion/react';
import { ArrowRight, Download,  ExternalLink } from 'lucide-react';
import profileImg from '../assets/Ai photo.png';


const Hero = () => {
  return (
    <div>
      <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-primary/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-secondary/10 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <h1 className="text-5xl md:text-7xl lg:text-8xl mb-6 leading-[1.1] tracking-tighter">
            Hi, I'm <span className="text-gradient">Praveen</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-xl leading-relaxed">
            Passionate Software Engineering undergraduate focused on building modern, responsive, and user-friendly web applications and digital solutions.

          </p>

          <div className="flex flex-wrap gap-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-brand-primary hover:bg-brand-secondary text-white font-bold rounded-2xl transition-all flex items-center gap-2 shadow-lg shadow-brand-primary/20"
            >
              View Projects
              <ArrowRight className="w-5 h-5" />
            </motion.a>
            
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-dark-card border border-dark-border hover:border-gray-600 text-white font-bold rounded-2xl transition-all flex items-center gap-2"
            >
              Download CV
              <Download className="w-5 h-5" />
            </motion.a>
          </div>
          
          <div className="mt-12 flex items-center gap-6 text-gray-500 text-sm font-medium">
            <a href="#" className="hover:text-white transition-colors flex items-center gap-1">
              LinkedIn <ExternalLink className="w-3 h-3" />
            </a>
            <a href="#" className="hover:text-white transition-colors flex items-center gap-1">
              GitHub <ExternalLink className="w-3 h-3" />
            </a>
            <a href="#" className="hover:text-white transition-colors flex items-center gap-1">
              Twitter <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </motion.div>

        <motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1, ease: "easeOut" }}
  className="relative hidden lg:block"
>
  {/* Glow Effect */}
  <div className="absolute -inset-4 bg-cyan-500/20 blur-3xl rounded-full" />

  {/* Circle Image Container */}
  <div className="relative z-10 w-[500px] h-[500px] ml-auto 
  bg-white/10 backdrop-blur-lg rounded-[40px] 
  p-4 shadow-2xl flex items-center justify-center">

    <img
      src={profileImg}
      alt="Praveen"
      className="w-full h-full object-cover object-[center_35%] rounded-[30px]"
    />

    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
  </div>

          
          {/* Decorative Elements */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-10 -right-10 glass p-6 rounded-3xl shadow-xl z-20"
          >
            <div className="text-3xl font-bold text-white">5+</div>
            <div className="text-xs text-gray-400 font-medium uppercase tracking-widest">Projects</div>
          </motion.div>
          
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute -bottom-10 -left-10 glass p-6 rounded-3xl shadow-xl z-20"
          >
            <div className="text-3xl font-bold text-white">10+</div>
            <div className="text-xs text-gray-400 font-medium uppercase tracking-widest">Certificates</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
    </div>
  )
}

export default Hero
