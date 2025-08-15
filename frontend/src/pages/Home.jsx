import { Helmet } from 'react-helmet-async'
import Hero from '../components/Hero'
import About from '../components/About'
import Programs from '../components/Programs'
import Impact from '../components/Impact'
import { motion } from 'framer-motion'
import { ArrowRight, Users, Calendar, Heart } from 'lucide-react'

const Home = () => {
  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Program Beneficiary',
      content: 'Thanks to Zikshana\'s education program, I was able to complete my studies and now work as a teacher in my village. They didn\'t just give me education, they gave me hope.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      name: 'Dr. Rajesh Kumar',
      role: 'Community Health Partner',
      content: 'Working with Zikshana has transformed healthcare delivery in our region. Their systematic approach and community involvement make all the difference.',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      name: 'Maya Patel',
      role: 'Women Empowerment Graduate',
      content: 'The skills training program changed my life completely. I now run my own business and support my family independently. Zikshana believed in me when no one else did.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    }
  ]

  const recentNews = [
    {
      id: 1,
      title: 'New Education Center Opens in Rural Maharashtra',
      excerpt: 'Our latest education initiative will serve over 500 children in the region.',
      date: '2024-01-15',
      category: 'Education',
      image: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 2,
      title: 'Healthcare Camp Reaches 1000+ Families',
      excerpt: 'Free medical checkups and treatments provided to underserved communities.',
      date: '2024-01-10',
      category: 'Healthcare',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 3,
      title: 'Women Entrepreneurs Graduate from Skills Program',
      excerpt: '50 women receive certificates and startup funding for their businesses.',
      date: '2024-01-05',
      category: 'Empowerment',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }
  ]

  return (
    <>
      <Helmet>
        <title>Zikshana Global Foundation - Empowering Communities, Transforming Lives</title>
        <meta name="description" content="Join Zikshana Global Foundation in our mission to create lasting change through education, healthcare, and community development initiatives across the globe." />
        <meta name="keywords" content="NGO, charity, education, healthcare, community development, volunteer, donate" />
      </Helmet>

      <Hero />
      <About />
      <Programs />
      <Impact />

      {/* Testimonials Section */}
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
              Stories of
              <span className="text-primary-600"> Transformation</span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Hear from the people whose lives have been touched by our work.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="bg-neutral-50 rounded-2xl p-8 relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-neutral-800">{testimonial.name}</h4>
                    <p className="text-neutral-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-neutral-700 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <Heart className="w-6 h-6 text-secondary-400 absolute top-6 right-6" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* News & Updates Section */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <motion.div
            className="flex justify-between items-end mb-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-neutral-800 mb-4">
                Latest
                <span className="text-primary-600"> News & Updates</span>
              </h2>
              <p className="text-xl text-neutral-600">
                Stay updated with our recent activities and impact stories.
              </p>
            </div>
            <motion.button
              className="btn-outline hidden md:flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>View All</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentNews.map((news, index) => (
              <motion.article
                key={news.id}
                className="card overflow-hidden group cursor-pointer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {news.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-neutral-500 text-sm mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    {new Date(news.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
                  <h3 className="text-xl font-display font-semibold text-neutral-800 mb-3 group-hover:text-primary-600 transition-colors duration-200">
                    {news.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed mb-4">
                    {news.excerpt}
                  </p>
                  <div className="flex items-center text-primary-600 font-medium">
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Join our community of changemakers and help us create lasting impact in communities around the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-white text-primary-600 hover:bg-neutral-100 px-8 py-4 rounded-lg font-medium text-lg flex items-center space-x-2 justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Users className="w-5 h-5" />
                <span>Become a Volunteer</span>
              </motion.button>
              <motion.button
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-lg font-medium text-lg flex items-center space-x-2 justify-center transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Heart className="w-5 h-5" />
                <span>Donate Today</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Home