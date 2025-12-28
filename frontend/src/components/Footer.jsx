import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Heart, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  ArrowRight
} from 'lucide-react'

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '/' },
    { name: 'Our Programs', href: '/programs' },
    { name: 'Get Involved', href: '/get-involved' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ]

  const programs = [
    { name: 'Education Initiative', href: '/programs#education' },
    { name: 'Healthcare Access', href: '/programs#healthcare' },
    { name: 'Community Development', href: '/programs#community' },
    { name: 'Women Empowerment', href: '/programs#women' },
  ]

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ]

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container-custom">
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-display font-bold">
                  Zikshana Global Foundation
                </span>
              </div>
              <p className="text-neutral-300 mb-6 leading-relaxed">
                Empowering communities through education, healthcare, and sustainable development initiatives across the globe.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-neutral-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-neutral-300 hover:text-white transition-colors duration-200 flex items-center group"
                    >
                      <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-6">Our Programs</h3>
              <ul className="space-y-3">
                {programs.map((program) => (
                  <li key={program.name}>
                    <Link
                      to={program.href}
                      className="text-neutral-300 hover:text-white transition-colors duration-200 flex items-center group"
                    >
                      <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      {program.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
                  <p className="text-neutral-300">
                    123 Foundation Street<br />
                    New Delhi, India 110001
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary-400 flex-shrink-0" />
                  <p className="text-neutral-300">+91 98765 43210</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary-400 flex-shrink-0" />
                  <p className="text-neutral-300">info@zikshana.org</p>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-semibold mb-4">Newsletter</h4>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg sm:rounded-l-lg sm:rounded-r-none focus:outline-none focus:border-primary-500 text-white text-base min-h-[48px]"
                  />
                  <motion.button
                    className="px-6 py-3 bg-primary-600 hover:bg-primary-700 rounded-lg sm:rounded-l-none sm:rounded-r-lg transition-colors duration-200 min-h-[48px] flex items-center justify-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Subscribe to newsletter"
                  >
                    <ArrowRight className="w-5 h-5" />
                    <span className="ml-2 sm:hidden font-medium">Subscribe</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="border-t border-neutral-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-neutral-400 text-sm text-center md:text-left">
              © 2024 Zikshana Global Foundation. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm">
              <Link to="/privacy" className="text-neutral-400 hover:text-white transition-colors duration-200 min-h-[44px] flex items-center">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-neutral-400 hover:text-white transition-colors duration-200 min-h-[44px] flex items-center">
                Terms and Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer