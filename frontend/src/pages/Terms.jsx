import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { FileText, Scale, Shield, AlertCircle } from 'lucide-react'

const Terms = () => {
  const sections = [
    {
      icon: FileText,
      title: "1. Acceptance of Terms",
      content: "By accessing and using the Zikshana Global Foundation website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service."
    },
    {
      icon: Scale,
      title: "2. Use License",
      content: "Permission is granted to temporarily download one copy of the materials (information or software) on Zikshana Global Foundation's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not: modify or copy the materials; use the materials for any commercial purpose, or for any public display (commercial or non-commercial); attempt to decompile or reverse engineer any software contained on Zikshana Global Foundation's website; remove any copyright or other proprietary notations from the materials; or transfer the materials to another person or 'mirror' the materials on any other server."
    },
    {
      icon: Shield,
      title: "3. Disclaimer",
      content: "The materials on Zikshana Global Foundation's website are provided on an 'as is' basis. Zikshana Global Foundation makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights."
    },
    {
      icon: AlertCircle,
      title: "4. Limitations",
      content: "In no event shall Zikshana Global Foundation or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Zikshana Global Foundation's website, even if Zikshana Global Foundation or a Zikshana Global Foundation authorized representative has been notified orally or in writing of the possibility of such damage."
    }
  ]

  const additionalTerms = [
    {
      title: "5. Accuracy of Materials",
      content: "The materials appearing on Zikshana Global Foundation's website could include technical, typographical, or photographic errors. Zikshana Global Foundation does not warrant that any of the materials on its website are accurate, complete or current. Zikshana Global Foundation may make changes to the materials contained on its website at any time without notice. However, Zikshana Global Foundation does not make any commitment to update the materials."
    },
    {
      title: "6. Links",
      content: "Zikshana Global Foundation has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Zikshana Global Foundation of the site. Use of any such linked website is at the user's own risk."
    },
    {
      title: "7. Donations and Payments",
      content: "All donations made through our website are final and non-refundable except as required by law. Donation receipts will be provided for tax purposes as applicable. We use secure third-party payment processors to handle all transactions. By making a donation, you agree to provide accurate payment information and authorize us to charge the specified amount."
    },
    {
      title: "8. User Conduct",
      content: "You agree to use our website only for lawful purposes and in a way that does not infringe the rights of, restrict or inhibit anyone else's use and enjoyment of the website. Prohibited behavior includes harassing or causing distress or inconvenience to any other user, transmitting obscene or offensive content, or disrupting the normal flow of dialogue within our website."
    },
    {
      title: "9. Intellectual Property",
      content: "All content included on this website, such as text, graphics, logos, images, audio clips, digital downloads, and software, is the property of Zikshana Global Foundation or its content suppliers and protected by international copyright laws. The compilation of all content on this site is the exclusive property of Zikshana Global Foundation."
    },
    {
      title: "10. Privacy and Data Protection",
      content: "Your use of Zikshana Global Foundation's website is also governed by our Privacy Policy. Please review our Privacy Policy, which also governs the site and informs users of our data collection practices. We are committed to protecting your personal information and complying with applicable data protection laws."
    },
    {
      title: "11. Modifications",
      content: "Zikshana Global Foundation may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service."
    },
    {
      title: "12. Governing Law",
      content: "These terms and conditions are governed by and construed in accordance with the laws of India and you irrevocably submit to the exclusive jurisdiction of the courts in that location."
    },
    {
      title: "13. Contact Information",
      content: "If you have any questions about these Terms and Conditions, please contact us at info@zikshana.org or through our contact page."
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <>
      <Helmet>
        <title>Terms and Conditions - Zikshana Global Foundation</title>
        <meta
          name="description"
          content="Terms and Conditions for using Zikshana Global Foundation's website and services. Read our terms of service, user agreements, and legal policies."
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 text-white py-20">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                  <FileText className="w-10 h-10" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                Terms and Conditions
              </h1>
              <p className="text-xl text-primary-100 leading-relaxed">
                Please read these terms and conditions carefully before using our website
              </p>
              <p className="text-sm text-primary-200 mt-4">
                Last Updated: January 2024
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20">
          <div className="container-custom max-w-5xl">
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-12"
            >
              <h2 className="text-2xl font-display font-bold text-primary-900 mb-4">
                Welcome to Zikshana Global Foundation
              </h2>
              <p className="text-neutral-700 leading-relaxed">
                These Terms and Conditions outline the rules and regulations for the use of
                Zikshana Global Foundation's Website, located at www.zikshana.org. By accessing
                this website, we assume you accept these terms and conditions. Do not continue to
                use Zikshana Global Foundation's website if you do not agree to all of the terms
                and conditions stated on this page.
              </p>
            </motion.div>

            {/* Main Sections with Icons */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-8 mb-12"
            >
              {sections.map((section, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                >
                  <div className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                          <section.icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-display font-bold text-primary-900 mb-3">
                          {section.title}
                        </h3>
                        <p className="text-neutral-700 leading-relaxed">
                          {section.content}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Additional Terms */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {additionalTerms.map((term, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-6 border border-neutral-200"
                >
                  <h3 className="text-lg font-display font-bold text-primary-900 mb-3">
                    {term.title}
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    {term.content}
                  </p>
                </div>
              ))}``
            </motion.div>

            {/* Contact Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-12 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl p-8 border border-primary-100"
            >
              <h3 className="text-2xl font-display font-bold text-primary-900 mb-4">
                Questions About Our Terms?
              </h3>
              <p className="text-neutral-700 mb-6 leading-relaxed">
                If you have any questions or concerns about these Terms and Conditions,
                please don't hesitate to reach out to us. We're here to help and ensure
                transparency in all our operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/contact"
                  className="btn-primary inline-flex items-center justify-center"
                >
                  Contact Us
                </a>
                <a
                  href="mailto:info@zikshana.org"
                  className="btn-secondary inline-flex items-center justify-center"
                >
                  Email Us Directly
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Terms
