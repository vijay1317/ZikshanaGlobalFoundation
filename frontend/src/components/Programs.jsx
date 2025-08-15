import { motion } from 'framer-motion'
import { GraduationCap, Heart, Home, Users, ArrowRight } from 'lucide-react'
import { useState, useEffect } from 'react'

const Programs = () => {
  const [programs, setPrograms] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const getIconForCategory = (category) => {
    const iconMap = {
      'EDUCATION': GraduationCap,
      'HEALTHCARE': Heart,
      'COMMUNITY_DEVELOPMENT': Home,
      'WOMEN_EMPOWERMENT': Users
    }
    return iconMap[category] || GraduationCap
  }

  const renderIcon = (IconComponent) => {
    if (!IconComponent) return <GraduationCap className="w-6 h-6 text-white" />
    return <IconComponent className="w-6 h-6 text-white" />
  }

  const getColorForCategory = (category) => {
    const colorMap = {
      'EDUCATION': 'from-blue-500 to-indigo-600',
      'HEALTHCARE': 'from-red-500 to-pink-600',
      'COMMUNITY_DEVELOPMENT': 'from-green-500 to-emerald-600',
      'WOMEN_EMPOWERMENT': 'from-purple-500 to-violet-600'
    }
    return colorMap[category] || 'from-blue-500 to-indigo-600'
  }

  const getDefaultImageForCategory = (category) => {
    const imageMap = {
      'EDUCATION': 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'HEALTHCARE': 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'COMMUNITY_DEVELOPMENT': 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'WOMEN_EMPOWERMENT': 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
    return imageMap[category] || imageMap['EDUCATION']
  }

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        setLoading(true)
        const response = await fetch('http://localhost:8080/api/programs/active')
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        
        const formattedPrograms = data.map(program => ({
          ...program,
          icon: getIconForCategory(program.category),
          color: getColorForCategory(program.category),
          image: program.imageUrl || getDefaultImageForCategory(program.category),
          stats: { 
            beneficiaries: program.beneficiariesCount ? `${program.beneficiariesCount.toLocaleString()}+` : 'N/A', 
            locations: program.locationsCount ? `${program.locationsCount}` : 'N/A'
          }
        }))
        
        console.log('Formatted programs:', formattedPrograms)
        setPrograms(formattedPrograms)
      } catch (err) {
        setError(err.message)
        console.error('Error fetching programs:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchPrograms()
  }, [])

  if (loading) {
    return (
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
            <p className="mt-4 text-neutral-600">Loading programs...</p>
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center">
            <p className="text-red-600">Error loading programs: {error}</p>
          </div>
        </div>
      </section>
    )
  }

  return (
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
            Our
            <span className="text-primary-600"> Impact Programs</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            We focus on four key areas that create the most significant and lasting impact on communities around the world.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              className="card overflow-hidden group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${program.color} opacity-80`} />
                <div className="absolute top-6 left-6">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    {renderIcon(program.icon)}
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-display font-bold text-white mb-2">
                    {program.title}
                  </h3>
                  <div className="flex space-x-4 text-white/90">
                    <span className="text-sm">
                      <strong>{program.stats.beneficiaries}</strong> beneficiaries
                    </span>
                    <span className="text-sm">
                      <strong>{program.stats.locations}</strong> locations
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <p className="text-neutral-600 leading-relaxed mb-6">
                  {program.description}
                </p>
                
                <motion.button
                  className="flex items-center space-x-2 text-primary-600 font-medium group-hover:text-primary-700 transition-colors duration-200"
                  whileHover={{ x: 5 }}
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <motion.button
            className="btn-primary text-lg px-8 py-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Programs
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Programs