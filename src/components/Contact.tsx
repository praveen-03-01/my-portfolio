import {motion} from 'motion/react';
import SectionHeading from './SectionHeading';
import { Mail, Phone, MapPin, Send, } from 'lucide-react';

const Contact = () => {
  return (
    <div>
       <section id="contact" className="section-padding">
      <div className="container mx-auto px-6">
        <SectionHeading
          title="Get in Touch"
          subtitle="Have a question or want to work together? Drop me a message below."
        />

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl mb-8">Contact Information</h3>
            <p className="text-gray-400 text-lg mb-12 max-w-md">
              Feel free to reach out through any of these channels. I usually respond within 24 hours.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-dark-card rounded-2xl flex items-center justify-center border border-dark-border group-hover:border-brand-primary transition-colors">
                  <Mail className="text-brand-primary w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 font-bold uppercase tracking-widest mb-1">Email</div>
                  <div className="text-xl text-white font-medium">praveenegalla@gmail.com</div>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-dark-card rounded-2xl flex items-center justify-center border border-dark-border group-hover:border-brand-primary transition-colors">
                  <Phone className="text-brand-primary w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 font-bold uppercase tracking-widest mb-1">Phone</div>
                  <div className="text-xl text-white font-medium">+94 760 5 7406</div>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-dark-card rounded-2xl flex items-center justify-center border border-dark-border group-hover:border-brand-primary transition-colors">
                  <MapPin className="text-brand-primary w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 font-bold uppercase tracking-widest mb-1">Location</div>
                  <div className="text-xl text-white font-medium">Colombo, Sri Lanka</div>
                </div>
              </div>
            </div>

            <div className="mt-16">
              <div className="text-sm text-gray-500 font-bold uppercase tracking-widest mb-6">Follow Me</div>
              <div className="flex gap-4">
                {[
                 
                ].map(({ href }, i) => (
                  <motion.a
                    key={i}
                    href={href}
                    whileHover={{ y: -5 }}
                    className="w-12 h-12 bg-dark-card border border-dark-border rounded-xl flex items-center justify-center hover:border-brand-primary transition-colors"
                  >
            
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-10 rounded-[40px]"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-400 ml-1">Full Name</label>
                  <input
                    type="text"
                    placeholder="name"
                    className="w-full bg-dark-bg border border-dark-border rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-brand-primary transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-400 ml-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="email"
                    className="w-full bg-dark-bg border border-dark-border rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-brand-primary transition-colors"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-400 ml-1">Subject</label>
                <input
                  type="text"
                  placeholder="Project Inquiry"
                  className="w-full bg-dark-bg border border-dark-border rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-brand-primary transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-400 ml-1">Message</label>
                <textarea
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full bg-dark-bg border border-dark-border rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-brand-primary transition-colors resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 bg-brand-primary hover:bg-brand-secondary text-white font-bold rounded-2xl transition-all flex items-center justify-center gap-3 shadow-lg shadow-brand-primary/20"
              >
                Send Message
                <Send className="w-5 h-5" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Contact
