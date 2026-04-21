import {motion} from 'motion/react';



const Footer = () => {
       const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-black to-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            <h1 className="text-3xl font-bold tracking-tight">
              PRAVEEN<span className="text-blue-500">.</span>
            </h1>
            <p className="text-gray-400 mt-4 text-sm">
              Building modern web applications and intelligent digital solutions.
            </p>
          </motion.div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 flex justify-center">Quick Links</h3>
            <ul className="space-y-2 text-gray-400 text-sm flex flex-wrap gap-6 flex justify-end mt-6">
              <li><a href="#home" className="hover:text-white">Home</a></li>
              <li><a href="#about" className="hover:text-white">About</a></li>
              <li><a href="#projects" className="hover:text-white">Projects</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
         </div>
         
        {/* Bottom */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>© {currentYear} Praveen. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
