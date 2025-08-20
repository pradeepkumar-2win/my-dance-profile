'use client'

import { useState } from 'react'
import { submitGuestbookForm } from '../../lib/email-service'

export default function GuestbookPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    type: 'message'
  })

  const [errors, setErrors] = useState<{[key: string]: string}>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')



  // Guestbook entries will be populated from real submissions
  interface GuestbookEntry {
    id: number
    name: string
    type: string
    message: string
    date: string
  }
  
  const guestbookEntries: GuestbookEntry[] = []

  // Validation functions
  const validateForm = () => {
    const newErrors: {[key: string]: string} = {}
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    }
    
    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    
    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleFieldChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Clear previous errors
    setErrors({})
    
    // Validate form
    if (!validateForm()) {
      return
    }
    
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    try {
      const result = await submitGuestbookForm(formData)
      
      if (result.success) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '', type: 'message' })
        // Scroll to top to show success message
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }



  return (
    <main className="max-w-6xl mx-auto p-6">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Guestbook
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Leave a message, share your experience, or simply say hello! 
          This guestbook is a collection of memories, testimonials, and connections made through dance.
        </p>
        
        {/* Status Messages */}
        {submitStatus === 'success' && (
          <div className="mt-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg max-w-2xl mx-auto animate-fade-in">
            <div className="flex items-center justify-center gap-2">
              <span className="text-xl">✅</span>
              <span className="font-medium">Message sent successfully! It will be added to the guestbook soon.</span>
            </div>
          </div>
        )}
        
        {submitStatus === 'error' && (
          <div className="mt-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg max-w-2xl mx-auto animate-fade-in">
            <div className="flex items-center justify-center gap-2">
              <span className="text-xl">❌</span>
              <span className="font-medium">Something went wrong. Please try again or contact me directly via email.</span>
            </div>
          </div>
        )}
      </div>

      {/* Guestbook Form */}
      <section className="mb-16">
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6 text-center">Leave a Message</h2>
          
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
                  onChange={(e) => handleFieldChange('name', e.target.value)}
                  className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                    errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                )}
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
                  onChange={(e) => handleFieldChange('email', e.target.value)}
                  className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                    errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300'
                  }`}
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-2">
                Message Type
              </label>
              <select
                id="type"
                value={formData.type}
                onChange={(e) => setFormData({...formData, type: e.target.value})}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="message">General Message</option>
                <option value="testimonial">Testimonial</option>
                <option value="feedback">Feedback</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Your Message *
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={formData.message}
                onChange={(e) => handleFieldChange('message', e.target.value)}
                className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none ${
                  errors.message ? 'border-red-500 focus:ring-red-500' : 'border-gray-300'
                }`}
                placeholder="Share your thoughts, experiences, or simply say hello..."
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-600">{errors.message}</p>
              )}
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

      {/* Guestbook Entries */}
      <section>
        <h2 className="text-2xl font-semibold mb-8 text-center">Guestbook Messages</h2>
        
        {guestbookEntries.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📝</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No Messages Yet</h3>
            <p className="text-gray-600 mb-6">
              Be the first to leave a message in my guestbook! Share your thoughts, 
              experiences, or simply say hello.
            </p>
            <p className="text-sm text-gray-500">
              Messages will appear here once they&apos;re submitted through the form above.
            </p>
          </div>
        ) : (
          <div className="grid gap-6">
            {guestbookEntries.map((entry) => (
              <div key={entry.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="font-semibold text-gray-800">{entry.name}</h3>
                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-700">
                      {entry.type.charAt(0).toUpperCase() + entry.type.slice(1)}
                    </span>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-3">
                    {entry.message}
                  </p>
                  
                  <span className="text-sm text-gray-500">
                    {entry.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>


    </main>
  )
} 