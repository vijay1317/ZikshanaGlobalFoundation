import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Calendar, User, ArrowRight, Search, Tag } from 'lucide-react'
import { useState } from 'react'

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const blogPosts = [
    {
      id: 1,
      title: 'Transforming Education in Rural Maharashtra: A Success Story',
      excerpt: 'How our education program has helped over 500 children in remote villages gain access to quality learning opportunities.',
      content: 'Our education initiative in rural Maharashtra has been a remarkable journey of transformation...',
      author: 'Dr. Anjali Sharma',
      date: '2024-01-15',
      category: 'Education',
      image: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      readTime: '5 min read',
      featured: true
    },
    {
      id: 2,
      title: 'Healthcare Accessibility: Breaking Barriers in Remote Communities',
      excerpt: 'Our mobile health camps have provided medical care to over 1000 families in underserved areas.',
      content: 'Healthcare accessibility remains one of the biggest challenges in remote communities...',
      author: 'Dr. Meera Patel',
      date: '2024-01-10',
      category: 'Healthcare',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      readTime: '4 min read',
      featured: false
    },
    {
      id: 3,
      title: 'Women Entrepreneurs: Stories of Economic Independence',
      excerpt: 'Meet the inspiring women who have built successful businesses through our skills training programs.',
      content: 'Economic empowerment of women has been a cornerstone of our development approach...',
      author: 'Rajesh Kumar',
      date: '2024-01-05',
      category: 'Women Empowerment',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      readTime: '6 min read',
      featured: false
    },
    {
      id: 4,
      title: 'Community Development: Building Sustainable Infrastructure',
      excerpt: 'How we\'re creating lasting change through water systems, roads, and community centers.',
      content: 'Sustainable infrastructure development is essential for long-term community growth...',
      author: 'Arjun Singh',
      date: '2024-01-01',
      category: 'Community Development',
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      readTime: '7 min read',
      featured: false
    },
    {
      id: 5,
      title: 'Digital Literacy: Bridging the Technology Gap',
      excerpt: 'Our digital education programs are helping communities adapt to the modern world.',
      content: 'In today\'s digital age, technological literacy is no longer a luxury but a necessity...',
      author: 'Dr. Anjali Sharma',
      date: '2023-12-28',
      category: 'Education',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      readTime: '5 min read',
      featured: false
    },
    {
      id: 6,
      title: 'Volunteer Spotlight: Making a Difference Together',
      excerpt: 'Celebrating our amazing volunteers who dedicate their time and skills to our mission.',
      content: 'Our volunteers are the heart and soul of everything we do at Zikshana...',
      author: 'Rajesh Kumar',
      date: '2023-12-25',
      category: 'Volunteer Stories',
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      readTime: '4 min read',
      featured: false
    }
  ]

  const categories = ['all', 'Education', 'Healthcare', 'Women Empowerment', 'Community Development', 'Volunteer Stories']

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const featuredPost = blogPosts.find(post => post.featured)
  const regularPosts = filteredPosts.filter(post => !post.featured)

  return (
    <>
      <Helmet>
        <title>Blog - Zikshana Global Foundation</title>
        <meta name="description" content="Read stories of impact, program updates, and insights from Zikshana Global Foundation's work in education, healthcare, and community development." />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-neutral-800 to-neutral-900 text-white">
        <div className="container-custom">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Our
              <span className="text-primary-400"> Blog</span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed opacity-90">
              Stories of impact, insights from the field, and updates on our mission to transform communities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white border-b border-neutral-200">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:border-primary-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    selectedCategory === category
                      ? 'bg-primary-600 text-white'
                      : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                  }`}
                >
                  {category === 'all' ? 'All' : category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && selectedCategory === 'all' && !searchTerm && (
        <section className="section-padding bg-neutral-50">
          <div className="container-custom">
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="rounded-2xl shadow-2xl w-full h-80 object-cover"
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                </div>
              </div>
              
              <div>
                <div className="flex items-center space-x-4 text-neutral-500 text-sm mb-4">
                  <span className="bg-secondary-100 text-secondary-700 px-3 py-1 rounded-full">
                    {featuredPost.category}
                  </span>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                  </div>
                  <span>{featuredPost.readTime}</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-800 mb-4">
                  {featuredPost.title}
                </h2>
                
                <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <User className="w-5 h-5 text-neutral-400" />
                    <span className="text-neutral-600">{featuredPost.author}</span>
                  </div>
                  
                  <motion.button
                    className="btn-primary flex items-center space-x-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <h3 className="text-2xl font-display font-bold text-neutral-800 mb-4">
                No articles found
              </h3>
              <p className="text-neutral-600">
                Try adjusting your search or filter criteria.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  className="card overflow-hidden group cursor-pointer"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-neutral-500 text-sm mb-3">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <span>{post.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-display font-semibold text-neutral-800 mb-3 group-hover:text-primary-600 transition-colors duration-200">
                      {post.title}
                    </h3>
                    
                    <p className="text-neutral-600 leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4 text-neutral-400" />
                        <span className="text-neutral-600 text-sm">{post.author}</span>
                      </div>
                      
                      <div className="flex items-center text-primary-600 font-medium text-sm">
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Stay Updated
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Subscribe to our newsletter to receive the latest stories, updates, and insights from our work.
            </p>
            
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-neutral-800 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <motion.button
                className="bg-white text-primary-600 px-6 py-3 rounded-lg font-medium hover:bg-neutral-100 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Blog