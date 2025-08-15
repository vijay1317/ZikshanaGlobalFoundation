import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const Impact = () => {
  const stats = [
    { 
      id: 1, 
      end: 28500, 
      label: 'Lives Transformed', 
      prefix: '',
      suffix: '+',
      description: 'Individuals directly impacted by our programs'
    },
    { 
      id: 2, 
      end: 125, 
      label: 'Communities Served', 
      prefix: '',
      suffix: '+',
      description: 'Villages and neighborhoods reached'
    },
    { 
      id: 3, 
      end: 350, 
      label: 'Volunteers', 
      prefix: '',
      suffix: '+',
      description: 'Dedicated individuals making a difference'
    },
    { 
      id: 4, 
      end: 95, 
      label: 'Success Rate', 
      prefix: '',
      suffix: '%',
      description: 'Program completion and satisfaction rate'
    }
  ]

  const Counter = ({ end, duration = 2000, prefix = '', suffix = '' }) => {
    const [count, setCount] = useState(0)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
      if (!isVisible) return

      let startTime
      const startCount = 0

      const updateCount = (timestamp) => {
        if (!startTime) startTime = timestamp
        const progress = timestamp - startTime
        const percentage = Math.min(progress / duration, 1)
        
        const easeOutQuart = 1 - Math.pow(1 - percentage, 4)
        const currentCount = Math.floor(easeOutQuart * (end - startCount) + startCount)
        
        setCount(currentCount)

        if (percentage < 1) {
          requestAnimationFrame(updateCount)
        }
      }

      requestAnimationFrame(updateCount)
    }, [end, duration, isVisible])

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, type: 'spring' }}
        viewport={{ once: true }}
        onViewportEnter={() => setIsVisible(true)}
        className="text-center group"
      >
        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-neutral-100">
          <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600 mb-2">
            {prefix}{count.toLocaleString()}{suffix}
          </div>
          <div className="text-xl font-display font-semibold text-neutral-800 mb-2">
            {stats.find(stat => stat.end === end)?.label}
          </div>
          <p className="text-neutral-600 text-sm">
            {stats.find(stat => stat.end === end)?.description}
          </p>
        </div>
      </motion.div>
    )
  }

  return (
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
            Measuring Our
            <span className="text-primary-600"> Impact</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Every number tells a story of hope, transformation, and positive change in communities around the world.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Counter 
                end={stat.end} 
                prefix={stat.prefix} 
                suffix={stat.suffix}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-neutral-800 mb-6">
              Real Stories, Real Impact
            </h3>
            <p className="text-lg text-neutral-600 leading-relaxed mb-6">
              Behind every statistic is a human story of transformation. Our programs don't just deliver services – they create lasting change that ripples through entire communities for generations.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-3 flex-shrink-0" />
                <p className="text-neutral-600">
                  <strong>Education programs</strong> have helped over 8,000 children gain access to quality learning opportunities.
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-secondary-500 rounded-full mt-3 flex-shrink-0" />
                <p className="text-neutral-600">
                  <strong>Healthcare initiatives</strong> have provided medical care to families in 40+ remote communities.
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-primary-500 rounded-full mt-3 flex-shrink-0" />
                <p className="text-neutral-600">
                  <strong>Economic empowerment</strong> programs have helped 2,500+ women become financially independent.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Community impact"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-secondary-500 to-primary-500 rounded-2xl flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-2xl font-bold">5+</div>
                <div className="text-sm">Years</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Impact