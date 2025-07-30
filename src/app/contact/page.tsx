'use client'

import { useState } from 'react'
import profile from '../../../content/profile.json'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
      alert('Thank you for your message! I will get back to you soon.')
    }, 2000)
  }

  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      value: profile.contact.email,
      link: `mailto:${profile.contact.email}`,
      description: "Send me a direct email"
    },
    {
      icon: "📱",
      title: "Phone",
      value: profile.contact.phone,
      link: `tel:${profile.contact.phone}`,
      description: "Call me directly"
    },
    {
      icon: "📍",
      title: "Location",
      value: profile.location,
      link: "#",
      description: "Based in Bengaluru, India"
    },
    {
      icon: "⏰",
      title: "Response Time",
      value: "Within 24 hours",
      link: "#",
      description: "I typically respond quickly"
    }
  ]

  const socialLinks = [
    {
      name: "Instagram",
      url: profile.social.instagram,
      icon: "📸",
      color: "bg-gradient-to-r from-purple-500 to-pink-500"
    },
    {
      name: "YouTube",
      url: profile.social.youtube,
      icon: "🎥",
      color: "bg-gradient-to-r from-red-500 to-red-600"
    },
    {
      name: "Facebook",
      url: profile.social.facebook,
      icon: "👥",
      color: "bg-gradient-to-r from-blue-500 to-blue-600"
    }
  ]

  const contactReasons = [
    {
      title: "Dance Classes",
      description: "Interested in learning Bharatanatyam or contemporary dance? I offer both individual and group classes for all skill levels.",
      icon: "💃"
    },
    {
      title: "Performance Bookings",
      description: "Looking for a professional dancer for your event, wedding, or cultural celebration? I'm available for performances.",
      icon: "🎭"
    },
    {
      title: "Collaboration",
      description: "Want to collaborate on a dance project, music video, or cultural event? Let's create something amazing together.",
      icon: "🤝"
    },
    {
      title: "General Inquiry",
      description: "Have questions about my dance journey, performances, or anything else? I'd love to hear from you!",
      icon: "💬"
    }
  ]

  return (
    <main className="max-w-6xl mx-auto p-6">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Get in Touch
        </h1>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ready to start your dance journey or have questions about performances? 
            I&apos;d love to hear from you! Choose your preferred way to connect.
          </p>
      </div>

      {/* Contact Information */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-8 text-center">Contact Information</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="text-3xl mb-4">{info.icon}</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">{info.title}</h3>
              <a 
                href={info.link}
                className="text-purple-600 hover:text-purple-700 font-medium block mb-2 transition-colors"
              >
                {info.value}
              </a>
              <p className="text-sm text-gray-600">{info.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form and Reasons */}
      <div className="grid lg:grid-cols-2 gap-12 mb-16">
        {/* Contact Form */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="">Select a subject</option>
                  <option value="dance-classes">Dance Classes</option>
                  <option value="performance-booking">Performance Booking</option>
                  <option value="collaboration">Collaboration</option>
                  <option value="general-inquiry">General Inquiry</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                  placeholder="Tell me more about what you're looking for..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </section>

        {/* Contact Reasons */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">How Can I Help You?</h2>
          <div className="space-y-4">
            {contactReasons.map((reason, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="text-2xl">{reason.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-800">{reason.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Social Media */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-8 text-center">Follow My Dance Journey</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
            >
              <div className={`w-16 h-16 ${social.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-2xl">{social.icon}</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{social.name}</h3>
              <p className="text-gray-600 text-sm">Follow for updates and performances</p>
            </a>
          ))}
        </div>
      </section>

      {/* Location & Availability */}
      <section className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Location & Availability</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            I&apos;m based in Bengaluru, India, and available for performances, classes, and collaborations both locally and internationally. 
            I also offer online dance classes for students worldwide.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h3 className="font-semibold text-gray-800 mb-2">Local Classes</h3>
              <p className="text-sm text-gray-600">In-person classes in Bengaluru</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h3 className="font-semibold text-gray-800 mb-2">Online Classes</h3>
              <p className="text-sm text-gray-600">Virtual lessons worldwide</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h3 className="font-semibold text-gray-800 mb-2">Travel Performances</h3>
              <p className="text-sm text-gray-600">Available for events across India</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 