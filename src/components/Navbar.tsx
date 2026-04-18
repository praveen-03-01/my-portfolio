import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Menu,
  X,
  ArrowRight,
  Home,
  User,
  Briefcase,
  Folder,
  Mail,
} from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home", icon: <Home size={20} /> },
    { name: "About", href: "#about", icon: <User size={20} /> },
    { name: "Skills", href: "#skills", icon: <Briefcase size={20} /> },
    { name: "Projects", href: "#projects", icon: <Folder size={20} /> },
    { name: "Contact", href: "#contact", icon: <Mail size={20} /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Navbar */}
      <nav
  className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 
  px-10 py-3 rounded-full backdrop-blur-lg 
  bg-white/10 border border-white/20 shadow-xl flex items-center gap-10
  ${scrolled ? "bg-black/30" : ""}`}
>
       <div className="flex items-center gap-10">
  {/* Logo */}
  <motion.a
    href="#home"
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    className="text-xl font-bold text-white tracking-tight"
  >
    PRAVEEN<span className="text-cyan-400">.</span>
  </motion.a>

  {/* Desktop Links */}
  <div className="hidden md:flex items-center gap-6">
    {navLinks.map((link, i) => (
      <motion.a
        key={link.name}
        href={link.href}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.1 }}
        className="text-sm font-medium text-gray-300 hover:text-white transition"
      >
        {link.name}
      </motion.a>
    ))}


           <a
  href="#contact"
  className="px-5 py-2 bg-cyan-500 hover:bg-cyan-600 text-white text-sm font-semibold rounded-full transition flex items-center gap-2"
>
  Hire Me <ArrowRight size={16} />
</a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white z-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Side Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Background Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Side Navbar */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 left-0 h-full w-72 bg-zinc-900 shadow-2xl z-50 md:hidden"
            >
              <div className="p-6 pt-24 space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-300 hover:bg-zinc-800 hover:text-white transition"
                  >
                    {link.icon}
                    {link.name}
                  </a>
                ))}

                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="block mt-6 text-center py-3 bg-cyan-500 rounded-xl text-white font-semibold"
                >
                  Hire Me
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}