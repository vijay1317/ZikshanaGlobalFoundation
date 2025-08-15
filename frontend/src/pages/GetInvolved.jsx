import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Users, Heart, Handshake, Calendar, Mail, Phone, ArrowRight } from 'lucide-react'
import { useState } from 'react'

const GetInvolved = () => {
  const [volunteerForm, setVolunteerForm] = useState({
    name: '',
    email: '',
    phone: '',
    skills: '',
    availability: '',
    interests: []
  })

  const [donationAmount, setDonationAmount] = useState('')

  const volunteerOpportunities = [
    {
      title: 'Education Volunteer',
      description: 'Help teach children and adults in our learning centers',
      commitment: '4-6 hours per week',
      skills: 'Teaching experience preferred',
      icon: Users
    },
    {
      title: 'Healthcare Assistant',
      description: 'Support medical camps and health education programs',
      commitment: 'Weekend availability',
      skills: 'Medical background helpful',
      icon: Heart
    },
    {
      title: 'Community Organizer',
      description: 'Help organize events and coordinate community programs',
      commitment: 'Flexible schedule',
      skills: 'Organization and communication',
      icon: Handshake
    },
    {
      title: 'Digital Marketing',
      description: 'Help spread awareness through social media and content',
      commitment: '2-3 hours per week',
      skills: 'Social media and design',
      icon: Calendar
    }
  ]

  const donationImpacts = [
    { amount: 500, impact: 'Provides school supplies for 10 children for a month' },
    { amount: 1000, impact: 'Funds a mobile health camp for one village' },
    { amount: 2500, impact: 'Sponsors skill training for 5 women entrepreneurs' },
    { amount: 5000, impact: 'Builds a clean water system for a community' }
  ]

  const handleVolunteerSubmit = (e) => {
    e.preventDefault()
    console.log('Volunteer form submitted:', volunteerForm)
  }

  const handleInterestChange = (interest) => {
    setVolunteerForm(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }))
  }

  return (
    <>
      <Helmet>
        <title>Get Involved - Zikshana Global Foundation</title>
        <meta name="description" content="Join Zikshana Global Foundation as a volunteer or supporter. Make a difference in communities through education, healthcare, and development programs." />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-secondary-600 to-primary-600 text-white">
        <div className="container-custom">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Get
              <span className="text-secondary-200"> Involved</span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed opacity-90">
              Join our community of changemakers and help us create lasting impact in communities around the world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Ways to Get Involved */}
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
              Ways to
              <span className="text-primary-600"> Make a Difference</span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Whether you have time, skills, or resources to share, there's a perfect way for you to contribute to our mission.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="card p-8 text-center group hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-display font-bold text-neutral-800 mb-4">Volunteer</h3>
              <p className="text-neutral-600 leading-relaxed mb-6">
                Share your time and skills to directly impact communities. From teaching to organizing events, every contribution matters.
              </p>
              <button className="btn-primary w-full">
                Become a Volunteer
              </button>
            </motion.div>

            <motion.div
              className="card p-8 text-center group hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-secondary-500 to-primary-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-display font-bold text-neutral-800 mb-4">Donate</h3>
              <p className="text-neutral-600 leading-relaxed mb-6">
                Your financial support helps us expand our programs and reach more communities in need of assistance.
              </p>
              <button className="btn-secondary w-full">
                Make a Donation
              </button>
            </motion.div>

            <motion.div
              className="card p-8 text-center group hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Handshake className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-display font-bold text-neutral-800 mb-4">Partner</h3>
              <p className="text-neutral-600 leading-relaxed mb-6">
                Organizations and businesses can partner with us to create larger-scale impact and sustainable solutions.
              </p>
              <button className="btn-outline w-full">
                Explore Partnership
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-neutral-800 mb-6">
              Volunteer
              <span className="text-primary-600"> Opportunities</span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Find the perfect way to use your skills and interests to make a difference.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {volunteerOpportunities.map((opportunity, index) => (
              <motion.div
                key={opportunity.title}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <opportunity.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-display font-semibold text-neutral-800 mb-3">
                      {opportunity.title}
                    </h3>
                    <p className="text-neutral-600 leading-relaxed mb-4">
                      {opportunity.description}
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-neutral-500">Time Commitment:</span>
                        <span className="text-neutral-700">{opportunity.commitment}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-neutral-500">Skills Needed:</span>
                        <span className="text-neutral-700">{opportunity.skills}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Form */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold text-neutral-800 mb-6">
                Join Our
                <span className="text-primary-600"> Volunteer Team</span>
              </h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                Fill out the form below and we'll get in touch with you about volunteer opportunities that match your interests and availability.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-primary-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-neutral-800">Email Us</h4>
                    <p className="text-neutral-600">volunteers@zikshana.org</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-primary-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-neutral-800">Call Us</h4>
                    <p className="text-neutral-600">+91 98765 43210</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleVolunteerSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:border-primary-500"
                    value={volunteerForm.name}
                    onChange={(e) => setVolunteerForm({...volunteerForm, name: e.target.value})}
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:border-primary-500"
                    value={volunteerForm.email}
                    onChange={(e) => setVolunteerForm({...volunteerForm, email: e.target.value})}
                    required
                  />
                </div>
                
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:border-primary-500"
                  value={volunteerForm.phone}
                  onChange={(e) => setVolunteerForm({...volunteerForm, phone: e.target.value})}
                />

                <textarea
                  placeholder="Tell us about your skills and experience"
                  rows={4}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:border-primary-500"
                  value={volunteerForm.skills}
                  onChange={(e) => setVolunteerForm({...volunteerForm, skills: e.target.value})}
                ></textarea>

                <select
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:border-primary-500"
                  value={volunteerForm.availability}
                  onChange={(e) => setVolunteerForm({...volunteerForm, availability: e.target.value})}
                >
                  <option value="">Select Availability</option>
                  <option value="weekdays">Weekdays</option>
                  <option value="weekends">Weekends</option>
                  <option value="flexible">Flexible</option>
                  <option value="evenings">Evenings</option>
                </select>

                <div>
                  <label className="block text-neutral-700 font-medium mb-3">Areas of Interest:</label>
                  <div className="grid grid-cols-2 gap-3">
                    {['Education', 'Healthcare', 'Community Development', 'Women Empowerment'].map((interest) => (
                      <label key={interest} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          checked={volunteerForm.interests.includes(interest)}
                          onChange={() => handleInterestChange(interest)}
                          className="w-4 h-4 text-primary-600 border-neutral-300 rounded focus:ring-primary-500"
                        />
                        <span className="text-neutral-700">{interest}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <motion.button
                  type="submit"
                  className="btn-primary w-full flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Submit Application</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Donation Section */}
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
              Make a
              <span className="text-primary-600"> Donation</span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Your contribution directly supports our programs and helps us reach more communities in need.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {donationImpacts.map((donation, index) => (
                <motion.div
                  key={donation.amount}
                  className={`card p-6 text-center cursor-pointer transition-all duration-200 ${
                    donationAmount == donation.amount ? 'ring-2 ring-primary-500 bg-primary-50' : ''
                  }`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onClick={() => setDonationAmount(donation.amount)}
                >
                  <div className="text-3xl font-bold text-primary-600 mb-2">
                    ₹{donation.amount.toLocaleString()}
                  </div>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {donation.impact}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="bg-white p-8 rounded-2xl shadow-lg"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-display font-bold text-neutral-800 mb-4">
                    Choose Donation Amount
                  </h3>
                  <div className="space-y-4">
                    <input
                      type="number"
                      placeholder="Enter custom amount"
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:border-primary-500"
                      value={donationAmount}
                      onChange={(e) => setDonationAmount(e.target.value)}
                    />
                    <select className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:border-primary-500">
                      <option>One-time donation</option>
                      <option>Monthly donation</option>
                      <option>Quarterly donation</option>
                      <option>Annual donation</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-display font-bold text-neutral-800 mb-4">
                    Donation Summary
                  </h3>
                  <div className="bg-neutral-50 p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-neutral-600">Amount:</span>
                      <span className="text-2xl font-bold text-primary-600">
                        ₹{donationAmount ? parseInt(donationAmount).toLocaleString() : '0'}
                      </span>
                    </div>
                    <motion.button
                      className="btn-secondary w-full"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      disabled={!donationAmount}
                    >
                      Proceed to Payment
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

export default GetInvolved