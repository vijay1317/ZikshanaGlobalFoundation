import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { GraduationCap, Heart, Home, Users, MapPin, Calendar, ArrowRight } from 'lucide-react'

const Programs = () => {
  const programs = [
    {
      id: 1,
      icon: GraduationCap,
      title: 'Education for All',
      shortDescription: 'Quality education and learning resources for underserved communities.',
      fullDescription: 'Our comprehensive education program focuses on providing quality learning opportunities to children and adults in underserved communities. We establish learning centers, provide educational materials, train teachers, and offer scholarship programs to ensure that financial constraints never become a barrier to education.',
      image: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      stats: { 
        beneficiaries: '8,500+', 
        locations: '35',
        schools: '12',
        teachers: '45'
      },
      features: [
        'Learning centers in rural communities',
        'Teacher training and development',
        'Scholarship programs for deserving students',
        'Digital literacy initiatives',
        'Adult education programs',
        'Educational material distribution'
      ],
      impact: 'Over 8,500 children and adults have gained access to quality education, with 95% of our scholarship recipients successfully completing their studies.',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      id: 2,
      icon: Heart,
      title: 'Healthcare Access',
      shortDescription: 'Essential healthcare services for remote and underserved areas.',
      fullDescription: 'Our healthcare program brings essential medical services to communities that lack adequate healthcare infrastructure. Through mobile medical camps, health education programs, and partnerships with local healthcare providers, we ensure that quality healthcare is accessible to all.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      stats: { 
        beneficiaries: '12,000+', 
        locations: '50',
        camps: '120',
        doctors: '25'
      },
      features: [
        'Mobile medical camps',
        'Preventive healthcare education',
        'Maternal and child health programs',
        'Health insurance facilitation',
        'Medical equipment donation',
        'Telemedicine consultations'
      ],
      impact: 'Over 12,000 individuals have received medical care through our programs, with significant improvements in community health indicators.',
      color: 'from-red-500 to-pink-600'
    },
    {
      id: 3,
      icon: Home,
      title: 'Community Development',
      shortDescription: 'Building sustainable infrastructure and economic opportunities.',
      fullDescription: 'Our community development initiatives focus on building sustainable infrastructure and creating economic opportunities that strengthen entire communities. From water systems to economic development programs, we work with communities to identify and address their most pressing needs.',
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      stats: { 
        beneficiaries: '15,000+', 
        locations: '40',
        projects: '85',
        volunteers: '200'
      },
      features: [
        'Clean water and sanitation projects',
        'Infrastructure development',
        'Economic development programs',
        'Environmental conservation',
        'Technology access initiatives',
        'Community leadership training'
      ],
      impact: 'Over 15,000 community members have benefited from improved infrastructure and economic opportunities in their neighborhoods.',
      color: 'from-green-500 to-emerald-600'
    },
    {
      id: 4,
      icon: Users,
      title: 'Women Empowerment',
      shortDescription: 'Empowering women through skills and leadership development.',
      fullDescription: 'Our women empowerment program focuses on providing women with the skills, knowledge, and opportunities they need to achieve economic independence and leadership roles in their communities. Through training programs, microfinance, and mentorship, we support women in building better futures.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      stats: { 
        beneficiaries: '4,200+', 
        locations: '25',
        businesses: '150',
        trainers: '15'
      },
      features: [
        'Skills training and certification',
        'Entrepreneurship development',
        'Microfinance and credit access',
        'Leadership development programs',
        'Women\'s rights education',
        'Mentorship networks'
      ],
      impact: 'Over 4,200 women have gained new skills and economic opportunities, with 150+ successful businesses launched.',
      color: 'from-purple-500 to-violet-600'
    }
  ]

  return (
    <>
      <Helmet>
        <title>Our Programs - Zikshana Global Foundation</title>
        <meta name="description" content="Explore Zikshana Global Foundation's comprehensive programs in education, healthcare, community development, and women empowerment." />
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
              Our Impact
              <span className="text-secondary-200"> Programs</span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed opacity-90">
              Comprehensive initiatives designed to create lasting change in communities through education, healthcare, development, and empowerment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {programs.map((program, index) => (
              <motion.div
                key={program.id}
                className="text-center group cursor-pointer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${program.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <program.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-display font-semibold text-neutral-800 mb-4 group-hover:text-primary-600 transition-colors duration-200">
                  {program.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed mb-4">
                  {program.shortDescription}
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="font-semibold text-primary-600">{program.stats.beneficiaries}</div>
                    <div className="text-neutral-500">Beneficiaries</div>
                  </div>
                  <div>
                    <div className="font-semibold text-secondary-600">{program.stats.locations}</div>
                    <div className="text-neutral-500">Locations</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Program Sections */}
      {programs.map((program, index) => (
        <section 
          key={program.id} 
          className={`section-padding ${index % 2 === 0 ? 'bg-neutral-50' : 'bg-white'}`}
          id={program.title.toLowerCase().replace(/\s+/g, '-')}
        >
          <div className="container-custom">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <motion.div
                className={index % 2 === 1 ? 'lg:order-2' : ''}
                initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                viewport={{ once: true }}
              >
                <div className="relative">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="rounded-2xl shadow-2xl"
                  />
                  <div className={`absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br ${program.color} rounded-2xl flex items-center justify-center`}>
                    <program.icon className="w-12 h-12 text-white" />
                  </div>
                </div>
              </motion.div>

              <motion.div
                className={index % 2 === 1 ? 'lg:order-1' : ''}
                initial={{ opacity: 0, x: index % 2 === 0 ? 60 : -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-display font-bold text-neutral-800 mb-6">
                  {program.title}
                </h2>
                <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                  {program.fullDescription}
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                  {Object.entries(program.stats).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-2xl font-bold text-primary-600 mb-1">{value}</div>
                      <div className="text-sm text-neutral-500 capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-display font-semibold text-neutral-800 mb-4">Key Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {program.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0" />
                        <span className="text-neutral-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-primary-50 to-secondary-50 p-6 rounded-xl mb-8">
                  <h4 className="font-semibold text-neutral-800 mb-2">Impact Story</h4>
                  <p className="text-neutral-600 leading-relaxed">
                    {program.impact}
                  </p>
                </div>

                <motion.button
                  className="btn-primary flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Get Involved</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Be Part of the Change
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Whether through volunteering, donating, or partnering with us, there are many ways to get involved and make a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-white text-primary-600 hover:bg-neutral-100 px-8 py-4 rounded-lg font-medium text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Volunteer with Us
              </motion.button>
              <motion.button
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-lg font-medium text-lg transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Support Our Work
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Programs