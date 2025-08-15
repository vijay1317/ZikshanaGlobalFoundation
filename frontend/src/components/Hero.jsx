import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'

const Hero = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: 'easeOut' }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900"
        style={{
          backgroundImage: `linear-gradient(rgba(12, 74, 110, 0.8), rgba(124, 45, 18, 0.8)), url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      <div className="absolute inset-0 bg-black/20" />

      <motion.div 
        className="relative z-10 container-custom text-center text-white"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <motion.div
          className="max-w-4xl mx-auto"
          variants={fadeInUp}
        >
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight"
            variants={fadeInUp}
          >
            Empowering Communities,
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-400 to-secondary-200">
              {' '}Transforming Lives
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            Join us in our mission to create lasting change through education, healthcare, and community development initiatives across the globe.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={fadeInUp}
          >
            <motion.button
              className="btn-secondary text-lg px-8 py-4 flex items-center space-x-2 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Join Our Mission</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </motion.button>
            
            <motion.button
              className="btn-outline text-lg px-8 py-4 flex items-center space-x-2 group border-white text-white hover:bg-white hover:text-neutral-800"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play className="w-5 h-5" />
              <span>Watch Our Story</span>
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          variants={fadeInUp}
        >
          <div className="text-center">
            <motion.div
              className="text-4xl md:text-5xl font-bold text-secondary-400 mb-2"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1, duration: 0.5, type: 'spring' }}
            >
              10,000+
            </motion.div>
            <p className="text-white/80 text-lg">Lives Impacted</p>
          </div>
          
          <div className="text-center">
            <motion.div
              className="text-4xl md:text-5xl font-bold text-secondary-400 mb-2"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.2, duration: 0.5, type: 'spring' }}
            >
              50+
            </motion.div>
            <p className="text-white/80 text-lg">Communities Served</p>
          </div>
          
          <div className="text-center">
            <motion.div
              className="text-4xl md:text-5xl font-bold text-secondary-400 mb-2"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.4, duration: 0.5, type: 'spring' }}
            >
              100+
            </motion.div>
            <p className="text-white/80 text-lg">Volunteers</p>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero