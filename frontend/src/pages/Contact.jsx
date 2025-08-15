import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'
import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: ['123 Foundation Street', 'New Delhi, India 110001'],
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91 98765 43210', '+91 11 2345 6789'],
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@zikshana.org', 'contact@zikshana.org'],
      color: 'from-red-500 to-pink-600'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday: 10:00 AM - 4:00 PM'],
      color: 'from-purple-500 to-violet-600'
    }
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Contact form submitted:', formData)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      <Helmet>
        <title>Contact Us - Zikshana Global Foundation</title>
        <meta name="description" content="Get in touch with Zikshana Global Foundation. Find our contact information, office locations, and send us a message." />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
        <div className="container-custom">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Contact
              <span className="text-secondary-200"> Us</span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed opacity-90">
              We'd love to hear from you. Get in touch with us for partnerships, volunteering, or any questions about our work.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-neutral-800 mb-6">
              Get in
              <span className="text-primary-600"> Touch</span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Reach out to us through any of the following ways. We're here to help and answer any questions you may have.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                className="text-center group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${info.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-display font-semibold text-neutral-800 mb-4">
                  {info.title}
                </h3>
                <div className="space-y-2">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-neutral-600">
                      {detail}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl md:text-4xl font-display font-bold text-neutral-800 mb-6">
                Send us a Message
              </h3>
              <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                Fill out the form below and we'll get back to you as soon as possible. We value your feedback and inquiries.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:border-primary-500 transition-colors duration-200"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:border-primary-500 transition-colors duration-200"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:border-primary-500 transition-colors duration-200"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />

                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={6}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:border-primary-500 transition-colors duration-200 resize-none"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>

                <motion.button
                  type="submit"
                  className="btn-primary w-full flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </motion.button>
              </form>
            </motion.div>

            {/* Map and Office Info */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-3xl md:text-4xl font-display font-bold text-neutral-800 mb-6">
                  Visit Our Office
                </h3>
                <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                  Our office is located in the heart of New Delhi, easily accessible by public transportation. We welcome visitors during our office hours.
                </p>
              </div>

              {/* Map Placeholder */}
              <div className="bg-neutral-200 rounded-2xl h-64 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-secondary-500/20" />
                <div className="text-center z-10">
                  <MapPin className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                  <p className="text-neutral-700 font-medium">Interactive Map</p>
                  <p className="text-neutral-600 text-sm">123 Foundation Street, New Delhi</p>
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h4 className="text-xl font-display font-semibold text-neutral-800 mb-4">
                  Office Hours
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-600">Monday - Friday</span>
                    <span className="font-medium text-neutral-800">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-600">Saturday</span>
                    <span className="font-medium text-neutral-800">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-600">Sunday</span>
                    <span className="font-medium text-neutral-800">Closed</span>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-gradient-to-br from-primary-50 to-secondary-50 p-6 rounded-xl">
                <h4 className="text-xl font-display font-semibold text-neutral-800 mb-4">
                  Emergency Contact
                </h4>
                <p className="text-neutral-600 mb-4">
                  For urgent matters outside office hours, you can reach us at:
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-primary-600" />
                    <span className="text-neutral-800 font-medium">+91 98765 43210</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-primary-600" />
                    <span className="text-neutral-800 font-medium">emergency@zikshana.org</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-neutral-800 mb-6">
              Frequently Asked
              <span className="text-primary-600"> Questions</span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Quick answers to common questions about our work, volunteering, and donations.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: 'How can I volunteer with Zikshana Global Foundation?',
                answer: 'You can apply to volunteer through our Get Involved page. We have opportunities in education, healthcare, community development, and administrative support.'
              },
              {
                question: 'Are donations to Zikshana tax-deductible?',
                answer: 'Yes, Zikshana Global Foundation is a registered non-profit organization. All donations are tax-deductible under section 80G of the Income Tax Act.'
              },
              {
                question: 'Which communities do you work with?',
                answer: 'We work with underserved communities across India, particularly in rural areas where access to education, healthcare, and basic infrastructure is limited.'
              },
              {
                question: 'How do you ensure transparency in fund usage?',
                answer: 'We publish annual reports detailing our financial statements and program outcomes. All our activities are regularly audited by certified auditors.'
              },
              {
                question: 'Can organizations partner with Zikshana?',
                answer: 'Yes, we welcome partnerships with corporations, government agencies, and other NGOs. Contact us to discuss collaboration opportunities.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-neutral-50 rounded-xl p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-display font-semibold text-neutral-800 mb-3">
                  {faq.question}
                </h4>
                <p className="text-neutral-600 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact