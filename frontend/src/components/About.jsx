import { motion } from 'framer-motion'
import { Heart, Target, Users, Globe } from 'lucide-react'

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Compassion',
      description: 'We approach every challenge with empathy and understanding, ensuring that our solutions are rooted in genuine care for the communities we serve.'
    },
    {
      icon: Target,
      title: 'Impact',
      description: 'We measure our success by the tangible, lasting change we create in the lives of individuals and communities around the world.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of working together, building partnerships with local communities, governments, and organizations.'
    },
    {
      icon: Globe,
      title: 'Sustainability',
      description: 'Our programs are designed to create long-term, self-sustaining solutions that continue to benefit communities for generations.'
    }
  ]

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: 'easeOut' }
  }

  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Community gathering"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center">
                <Heart className="w-12 h-12 text-white" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <div className="mb-6">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-neutral-800 mb-6">
                About
                <span className="text-primary-600"> Zikshana Global Foundation</span>
              </h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                Founded with a vision to create meaningful change, Zikshana Global Foundation has been at the forefront of community development for over a decade. We believe that every person deserves access to quality education, healthcare, and opportunities for growth.
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed">
                Our work spans across rural and urban communities, focusing on sustainable solutions that empower individuals and strengthen communities from within.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-primary-600 mb-2">Our Mission</h3>
                <p className="text-neutral-600">
                  To empower communities through education, healthcare, and sustainable development initiatives that create lasting positive change.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-secondary-600 mb-2">Our Vision</h3>
                <p className="text-neutral-600">
                  A world where every community has the resources and opportunities to thrive and reach its full potential.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl md:text-4xl font-display font-bold text-center text-neutral-800 mb-16">
            Our Core Values
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="text-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-display font-semibold text-neutral-800 mb-4">
                  {value.title}
                </h4>
                <p className="text-neutral-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About