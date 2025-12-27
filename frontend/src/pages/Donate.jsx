import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, Lock, Shield, CheckCircle, ArrowRight, Users, BookOpen, Sparkles } from 'lucide-react';

// Import images
import impactImage1 from '/src/assets/20250208_124056.jpg';
import impactImage2 from '/src/assets/20250303_111004.jpg';
import impactImage3 from '/src/assets/pexels-swastikarora-18012459.jpg';

const Donate = () => {
  const [donationAmount, setDonationAmount] = useState(5000);
  const [customAmount, setCustomAmount] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [hasGiftCard, setHasGiftCard] = useState(false);
  const [giftCardCode, setGiftCardCode] = useState('');
  const [whatsappUpdates, setWhatsappUpdates] = useState(true);
  const [isCitizen, setIsCitizen] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingMessage, setProcessingMessage] = useState('Processing Payment...');
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [successData, setSuccessData] = useState({ transactionId: '', paymentId: '' });

  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    address: '',
    pincode: '',
    pan: ''
  });

  // Load Razorpay script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup: remove script when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  const popularAmounts = [1000, 2500, 5000, 10000];

  const calculateTotal = () => {
    return donationAmount;
  };

  const handleAmountSelect = (amount) => {
    setDonationAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmount = (value) => {
    const amount = parseInt(value) || 0;
    setCustomAmount(value);
    if (amount > 0) {
      setDonationAmount(amount);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isCitizen) {
      alert('Please confirm that you are an Indian citizen');
      return;
    }

    setIsProcessing(true);

    try {
      // Step 1: Create donation record in backend
      const donationData = {
        ...formData,
        amount: donationAmount,
        isAnonymous,
        whatsappUpdates,
        isCitizen,
        giftCardCode: hasGiftCard ? giftCardCode : null
      };

      const createDonationResponse = await fetch('/api/donations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(donationData),
      });

      if (!createDonationResponse.ok) {
        throw new Error('Failed to create donation');
      }

      const donation = await createDonationResponse.json();
      const transactionId = donation.transactionId;

      // Step 2: Create Razorpay order
      const orderResponse = await fetch('/api/donations/razorpay/create-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: calculateTotal(),
          currency: 'INR',
          receipt: transactionId,
        }),
      });

      if (!orderResponse.ok) {
        throw new Error('Failed to create Razorpay order');
      }

      const orderData = await orderResponse.json();

      // Step 3: Open Razorpay checkout
      const options = {
        key: orderData.key,
        amount: orderData.amount,
        currency: orderData.currency,
        name: 'Zikshana Global Foundation',
        description: 'Donation for social causes',
        order_id: orderData.orderId,
        handler: async function (response) {
          // Step 4: Verify payment
          try {
            // Update message to show verification in progress
            setProcessingMessage('Verifying Payment...');

            const verifyResponse = await fetch('/api/donations/razorpay/verify-payment', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                transaction_id: transactionId,
              }),
            });

            const verifyData = await verifyResponse.json();

            if (verifyData.verified) {
              // Update message to show email sending
              setProcessingMessage('Sending Confirmation Email...');

              // Wait for emails to be sent from backend (2 seconds buffer)
              await new Promise(resolve => setTimeout(resolve, 2000));

              // Hide loading overlay
              setIsProcessing(false);
              setProcessingMessage('Processing Payment...');

              // Store success data and show success modal
              setSuccessData({
                transactionId: transactionId,
                paymentId: response.razorpay_payment_id
              });
              setShowSuccessModal(true);

              // Reset form
              setFormData({
                fullName: '',
                mobile: '',
                email: '',
                address: '',
                pincode: '',
                pan: ''
              });
              setDonationAmount(5000);
              setCustomAmount('');
              setIsAnonymous(false);
              setHasGiftCard(false);
              setGiftCardCode('');
              setIsCitizen(false);
            } else {
              setIsProcessing(false);
              setProcessingMessage('Processing Payment...');
              alert('Payment verification failed. Please contact support.');
            }
          } catch (error) {
            setIsProcessing(false);
            setProcessingMessage('Processing Payment...');
            console.error('Payment verification error:', error);
            alert('Payment verification failed. Please contact support with transaction ID: ' + transactionId);
          }
        },
        prefill: {
          name: formData.fullName,
          email: formData.email,
          contact: formData.mobile,
        },
        theme: {
          color: '#2563eb',
        },
        modal: {
          ondismiss: function () {
            setIsProcessing(false);
            setProcessingMessage('Processing Payment...');
            alert('Payment cancelled. Your donation record has been saved and you can retry payment later.');
          },
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      setIsProcessing(false);
      setProcessingMessage('Processing Payment...');
      console.error('Error processing donation:', error);
      alert('Failed to process donation. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-orange-50 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Compact Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 rounded-full mb-3 shadow-lg">
            <Heart className="w-8 h-8 text-white animate-pulse" fill="white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent mb-2">
            Be the Change They Need
          </h1>
          <p className="text-base text-gray-600 max-w-2xl mx-auto mb-4">
            Every rupee you donate empowers students with skills, creativity, and hope for tomorrow.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-xs">
            <div className="flex items-center gap-1 bg-white px-3 py-1 rounded-full shadow-sm">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span className="font-semibold text-gray-700">100% Secure</span>
            </div>
            <div className="flex items-center gap-1 bg-white px-3 py-1 rounded-full shadow-sm">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span className="font-semibold text-gray-700">Tax Benefits (80G)</span>
            </div>
            <div className="flex items-center gap-1 bg-white px-3 py-1 rounded-full shadow-sm">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span className="font-semibold text-gray-700">Instant Receipt</span>
            </div>
          </div>
        </motion.div>

        {/* Compact Impact Highlights - Horizontal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-6"
        >
          <div className="bg-gradient-to-r from-purple-600 to-orange-600 rounded-2xl shadow-xl p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="flex items-center gap-3 bg-white/10 rounded-xl p-3 backdrop-blur-sm">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div className="text-white">
                  <div className="font-bold text-sm">₹1,000</div>
                  <div className="text-xs text-white/90">Materials for 5 students</div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/10 rounded-xl p-3 backdrop-blur-sm">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <div className="text-white">
                  <div className="font-bold text-sm">₹5,000</div>
                  <div className="text-xs text-white/90">1 month education</div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/10 rounded-xl p-3 backdrop-blur-sm">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div className="text-white">
                  <div className="font-bold text-sm">₹10,000</div>
                  <div className="text-xs text-white/90">Full skill workshop</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column - Donation Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-6 space-y-5">
              {/* Donation Amount Section */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">Choose Your Donation Amount</h2>

                {/* Popular Amounts */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                  {popularAmounts.map((amount) => (
                    <button
                      key={amount}
                      type="button"
                      onClick={() => handleAmountSelect(amount)}
                      className={`p-3 rounded-xl border-2 transition-all transform hover:scale-105 ${
                        donationAmount === amount && !customAmount
                          ? 'border-purple-600 bg-gradient-to-br from-purple-50 to-pink-50 text-purple-700 shadow-lg'
                          : 'border-gray-200 hover:border-purple-300 hover:shadow-md'
                      }`}
                    >
                      <div className="text-xs text-gray-500 uppercase tracking-wider">Popular</div>
                      <div className="text-xl font-bold">₹{amount.toLocaleString()}</div>
                    </button>
                  ))}
                </div>

                {/* Custom Amount */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Or Enter Custom Amount
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-600 text-lg font-bold">₹</span>
                    <input
                      type="number"
                      value={customAmount}
                      onChange={(e) => handleCustomAmount(e.target.value)}
                      placeholder="Enter amount"
                      className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none text-lg focus:ring-2 focus:ring-purple-200 transition-all"
                      min="100"
                    />
                  </div>
                </div>

                {/* Indian Citizen Confirmation */}
                <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-4">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={isCitizen}
                      onChange={(e) => setIsCitizen(e.target.checked)}
                      className="mt-1 w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                      required
                    />
                    <span className="text-sm text-gray-700">
                      I confirm that I am an <strong>Indian citizen</strong>
                    </span>
                  </label>
                </div>
              </div>

              {/* Donor Details Section */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">Your Details</h2>

                <div className="space-y-3">
                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="eg. Raghu Kumar"
                      className="w-full px-3 py-2 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200 transition-all"
                      required
                    />
                  </div>

                  {/* Anonymous Checkbox */}
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={isAnonymous}
                      onChange={(e) => setIsAnonymous(e.target.checked)}
                      className="w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700">
                      Make my donation anonymous
                    </span>
                  </label>

                  {/* Mobile Number */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Mobile Number <span className="text-red-500">*</span>
                    </label>
                    <div className="flex gap-2">
                      <span className="px-4 py-3 bg-gray-100 border-2 border-gray-200 rounded-xl text-gray-600">
                        +91
                      </span>
                      <input
                        type="tel"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleInputChange}
                        placeholder="9876543210"
                        pattern="[0-9]{10}"
                        maxLength="10"
                        className="flex-1 px-3 py-2 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200 transition-all"
                        required
                      />
                    </div>
                    <p className="mt-1 text-xs text-gray-500">Payment updates will be sent on this number</p>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="eg: raghukumar@gmail.com"
                      className="w-full px-3 py-2 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200 transition-all"
                      required
                    />
                  </div>

                  {/* Billing Address */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Billing Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="eg: 24, Ganesha Layout, Bengaluru"
                      className="w-full px-3 py-2 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200 transition-all"
                      required
                    />
                  </div>

                  {/* Pincode */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Pincode <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleInputChange}
                      placeholder="eg: 560001"
                      pattern="[0-9]{6}"
                      maxLength="6"
                      className="w-full px-3 py-2 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200 transition-all"
                      required
                    />
                    <p className="mt-1 text-xs text-gray-500">Govt. mandates donor address collection</p>
                  </div>

                  {/* PAN Number */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      PAN Number <span className="text-gray-400 text-xs">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      name="pan"
                      value={formData.pan}
                      onChange={handleInputChange}
                      placeholder="eg: ABCTY1234D"
                      pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}"
                      maxLength="10"
                      className="w-full px-3 py-2 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200 transition-all uppercase"
                    />
                    <p className="mt-1 text-xs text-gray-500">Required to claim tax exemption</p>
                  </div>

                  {/* WhatsApp Updates */}
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={whatsappUpdates}
                      onChange={(e) => setWhatsappUpdates(e.target.checked)}
                      className="w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700">
                      Send me updates and notifications via WhatsApp/SMS
                    </span>
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 hover:from-purple-700 hover:via-pink-700 hover:to-orange-700 text-white font-bold py-3 px-6 rounded-xl transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2 text-base shadow-2xl hover:shadow-purple-500/50"
              >
                <Heart className="w-5 h-5" fill="white" />
                Donate ₹{calculateTotal().toLocaleString()} with Love
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </motion.div>

          {/* Right Column - Summary & Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-1"
          >
            <div className="sticky top-8 space-y-6">
              {/* Donation Summary */}
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Donation Summary</h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-gray-600">
                    <span>Donation Amount</span>
                    <span className="font-semibold">₹{donationAmount.toLocaleString()}</span>
                  </div>
                  <div className="border-t-2 border-gray-200 pt-3">
                    <div className="flex justify-between text-lg font-bold text-gray-900">
                      <span>Total Donation</span>
                      <span>₹{calculateTotal().toLocaleString()}</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-green-50 rounded-lg">
                  <p className="text-sm text-green-800 font-medium flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    Get Indian tax certificate for your donation
                  </p>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Why Donate with Us?</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Lock className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Secure Payments</h4>
                      <p className="text-sm text-gray-600">All payments go through a secure gateway</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Shield className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">100% Transparency</h4>
                      <p className="text-sm text-gray-600">Track how your donation is used</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Tax Benefits</h4>
                      <p className="text-sm text-gray-600">Get 80G tax exemption certificate</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400">
            <div className="flex items-center gap-2">
              <Lock className="w-5 h-5" />
              <span className="text-sm">256-bit SSL Encrypted</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              <span className="text-sm">PCI DSS Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span className="text-sm">Verified by Government</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Loading Overlay */}
      {isProcessing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl p-8 shadow-2xl flex flex-col items-center space-y-4 max-w-md mx-4">
            {/* Circular Progress Bar */}
            <div className="relative w-24 h-24">
              <svg className="animate-spin" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="#e5e7eb"
                  strokeWidth="8"
                  fill="none"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="url(#gradient)"
                  strokeWidth="8"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray="251.2"
                  strokeDashoffset="62.8"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#2563eb" />
                    <stop offset="100%" stopColor="#059669" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <Heart className="w-8 h-8 text-red-500 animate-pulse" />
              </div>
            </div>

            {/* Processing Message */}
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {processingMessage}
              </h3>
              <p className="text-sm text-gray-600">
                Please wait while we securely process your donation.
              </p>
              <p className="text-xs text-gray-500 mt-2">
                Do not close or refresh this page.
              </p>
            </div>

            {/* Animated Dots */}
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
              <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
              <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
            </div>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm p-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6">
              {/* Success Icon */}
              <div className="flex justify-center mb-4">
                <div className="relative">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Success Message */}
              <div className="text-center mb-4">
                <h2 className="text-2xl font-bold text-gray-900 mb-1">
                  Payment Successful!
                </h2>
                <p className="text-gray-600 text-sm">
                  Thank you for your generous donation
                </p>
              </div>

              {/* Transaction Details */}
              <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-3 mb-4">
                <h3 className="text-xs font-semibold text-gray-700 mb-2 flex items-center gap-1">
                  <CheckCircle className="w-3 h-3 text-green-600" />
                  Transaction Details
                </h3>
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center gap-2">
                    <span className="text-xs text-gray-600 flex-shrink-0">Transaction ID:</span>
                    <span className="text-xs font-mono font-semibold text-gray-900 break-all text-right">{successData.transactionId}</span>
                  </div>
                  <div className="flex justify-between items-center gap-2">
                    <span className="text-xs text-gray-600 flex-shrink-0">Payment ID:</span>
                    <span className="text-xs font-mono font-semibold text-gray-900 break-all text-right">{successData.paymentId}</span>
                  </div>
                </div>
              </div>

              {/* Information Cards */}
              <div className="space-y-3 mb-4">
                <div className="flex items-start gap-2 p-3 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-sm">📧</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xs font-semibold text-green-900 mb-0.5">Email Sent</h4>
                    <p className="text-xs text-green-700">
                      Confirmation sent to your email
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2 p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-sm">📄</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xs font-semibold text-blue-900 mb-0.5">Invoice & 80G Certificate</h4>
                    <p className="text-xs text-blue-700 mb-1">
                      Contact us at:
                    </p>
                    <a
                      href="mailto:rexlerrajput@gmail.com"
                      className="text-xs font-semibold text-blue-600 hover:text-blue-800 underline"
                    >
                      rexlerrajput@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-2 p-3 bg-purple-50 rounded-lg border border-purple-200">
                  <div className="flex-shrink-0 w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center">
                    <Heart className="w-3 h-3 text-purple-600" fill="currentColor" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xs font-semibold text-purple-900 mb-0.5">Making an Impact</h4>
                    <p className="text-xs text-purple-700">
                      Supporting education, healthcare & community development
                    </p>
                  </div>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setShowSuccessModal(false)}
                className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 text-white py-2.5 px-4 rounded-lg font-semibold hover:from-purple-700 hover:via-pink-700 hover:to-orange-700 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 text-sm"
              >
                <span>Close</span>
                <CheckCircle className="w-4 h-4" />
              </button>

              {/* Thank You Note */}
              <p className="text-center text-xs text-gray-500 mt-3">
                With gratitude, Zikshana Team 💚
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Donate;
