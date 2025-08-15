import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Users, Award, Globe, Heart } from 'lucide-react'

const About = () => {
  const team = [
    {
      name: 'Dr. Anjali Sharma',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      bio: 'With over 15 years in development work, Dr. Sharma founded Zikshana to create sustainable community solutions.'
    },
    {
      name: 'Rajesh Kumar',
      role: 'Program Director',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      bio: 'Rajesh leads our field operations and ensures program effectiveness across all communities we serve.'
    },
    {
      name: 'Meera Patel',
      role: 'Healthcare Director',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      bio: 'A medical professional dedicated to bringing quality healthcare to underserved communities.'
    },
    {
      name: 'Arjun Singh',
      role: 'Education Coordinator',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      bio: 'Former teacher turned education reformer, passionate about inclusive and quality education for all.'
    }
  ]

  const milestones = [
    { year: '2019', event: 'Foundation Established', description: 'Started with a vision to empower communities' },
    { year: '2020', event: 'First Education Center', description: 'Opened our first learning center serving 200 children' },
    { year: '2021', event: 'Healthcare Initiative', description: 'Launched mobile medical camps in rural areas' },
    { year: '2022', event: 'Women Empowerment', description: 'Started skills training programs for 500+ women' },
    { year: '2023', event: 'Community Development', description: 'Initiated infrastructure projects in 25 villages' },
    { year: '2024', event: 'Digital Expansion', description: 'Launched online learning platforms and telemedicine' }
  ]

  return (
    <>
      <Helmet>
        <title>About Us - Zikshana Global Foundation</title>
        <meta name="description" content="Learn about Zikshana Global Foundation's mission, vision, team, and journey in creating positive change in communities worldwide." />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container-custom">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold text-neutral-800 mb-6">
              About
              <span className="text-primary-600"> Zikshana</span>
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Founded with a vision to create meaningful and lasting change, we are dedicated to empowering communities through education, healthcare, and sustainable development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-800 mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-lg text-neutral-600 leading-relaxed">
                <p>
                  Zikshana Global Foundation was born from a simple yet powerful belief: every community has the potential to thrive when given the right support and resources. Our journey began in 2019 when our founder, Dr. Anjali Sharma, witnessed firsthand the challenges faced by underserved communities.
                </p>
                <p>
                  What started as a small initiative in rural Maharashtra has grown into a comprehensive organization working across multiple states, touching thousands of lives through our integrated approach to community development.
                </p>
                <p>
                  Today, we stand as a testament to what's possible when compassion meets action, and when communities are empowered to become agents of their own transformation.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Our story"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center">
                <Heart className="w-12 h-12 text-white" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-display font-bold text-neutral-800 mb-4">Our Mission</h3>
              <p className="text-neutral-600 leading-relaxed">
                To empower communities through education, healthcare, and sustainable development initiatives that create lasting positive change and opportunity for all.
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-display font-bold text-neutral-800 mb-4">Our Vision</h3>
              <p className="text-neutral-600 leading-relaxed">
                A world where every community has the resources, opportunities, and support needed to thrive and reach its full potential for sustainable development.
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-display font-bold text-neutral-800 mb-4">Our Values</h3>
              <p className="text-neutral-600 leading-relaxed">
                Compassion, integrity, collaboration, and sustainability guide everything we do as we work to create meaningful and lasting impact.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              Meet Our
              <span className="text-primary-600"> Team</span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Passionate individuals committed to creating positive change in communities around the world.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                className="text-center group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-48 h-48 rounded-2xl object-cover mx-auto shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-600/20 to-transparent rounded-2xl" />
                </div>
                <h3 className="text-xl font-display font-semibold text-neutral-800 mb-2">
                  {member.name}
                </h3>
                <p className="text-primary-600 font-medium mb-4">
                  {member.role}
                </p>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-neutral-800 mb-6">
              Our
              <span className="text-primary-600"> Journey</span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Key milestones in our mission to create lasting change.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                className="relative flex items-center mb-12 last:mb-0"
                initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 order-3'}`}>
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <h3 className="text-xl font-display font-bold text-neutral-800 mb-2">
                      {milestone.event}
                    </h3>
                    <p className="text-neutral-600">
                      {milestone.description}
                    </p>
                  </div>
                </div>
                
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white font-bold text-sm order-2 relative z-10">
                  {milestone.year}
                </div>
                
                <div className={`w-1/2 ${index % 2 === 1 ? 'pr-8 text-right' : 'pl-8'}`} />
                
                {index < milestones.length - 1 && (
                  <div className="absolute left-1/2 top-16 w-0.5 h-12 bg-primary-200 transform -translate-x-1/2" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default About