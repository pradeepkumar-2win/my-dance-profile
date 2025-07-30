'use client'

import { useState } from 'react'

export default function GuestbookPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    type: 'message'
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  // Sample guestbook entries
  const guestbookEntries = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Dance Student",
      message: "Harini's Bharatanatyam workshop was absolutely transformative! Her attention to detail and passion for the art form is inspiring. I learned so much about the cultural significance behind each movement. Can't wait to attend more classes!",
      type: "testimonial",
      date: "March 20, 2024",
      avatar: "PS"
    },
    {
      id: 2,
      name: "Rahul Menon",
      role: "Event Organizer",
      message: "We had the pleasure of hosting Harini at our cultural festival last month. Her performance was the highlight of the evening - the audience was mesmerized! Her professionalism and artistic excellence made our event truly special.",
      type: "feedback",
      date: "March 15, 2024",
      avatar: "RM"
    },
    {
      id: 3,
      name: "Anjali Patel",
      role: "Fellow Dancer",
      message: "Your contemporary fusion piece at the Urban Dance Festival was breathtaking! The way you blend classical techniques with modern expression is truly innovative. You're pushing the boundaries of what Indian dance can be.",
      type: "message",
      date: "March 10, 2024",
      avatar: "AP"
    },
    {
      id: 4,
      name: "Dr. Meera Krishnan",
      role: "Cultural Scholar",
      message: "As someone who studies traditional Indian arts, I'm impressed by Harini's commitment to preserving cultural authenticity while making dance accessible to modern audiences. Her work bridges the gap between tradition and contemporary expression beautifully.",
      type: "testimonial",
      date: "March 5, 2024",
      avatar: "MK"
    },
    {
      id: 5,
      name: "Kavya Reddy",
      role: "Parent",
      message: "My daughter has been learning from Harini for the past year, and the transformation has been incredible. Not only has she improved technically, but she's also developed a deep appreciation for our cultural heritage. Thank you for being such an inspiring teacher!",
      type: "testimonial",
      date: "February 28, 2024",
      avatar: "KR"
    },
    {
      id: 6,
      name: "Arjun Singh",
      role: "Dance Enthusiast",
      message: "I've been following your performances online and finally got to see you live at the Dance India Festival. Your energy on stage is contagious! The way you connect with the audience through your expressions is truly remarkable.",
      type: "message",
      date: "February 20, 2024",
      avatar: "AS"
    },
    {
      id: 7,
      name: "Sneha Iyer",
      role: "Former Student",
      message: "Harini was my first dance teacher and she instilled in me not just technique, but a love for storytelling through movement. Even though I've moved to a different city, her teachings continue to influence my dance journey. Forever grateful!",
      type: "testimonial",
      date: "February 15, 2024",
      avatar: "SI"
    },
    {
      id: 8,
      name: "Vikram Malhotra",
      role: "Art Director",
      message: "Working with Harini on our music video was a dream come true. Her creativity, professionalism, and ability to adapt to different styles made the entire production process smooth and enjoyable. The final result exceeded all expectations!",
      type: "feedback",
      date: "February 10, 2024",
      avatar: "VM"
    }
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setFormData({ name: '', email: '', message: '', type: 'message' })
      alert('Thank you for your message! It will be added to the guestbook soon.')
    }, 2000)
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'testimonial':
        return 'bg-green-100 text-green-700'
      case 'feedback':
        return 'bg-blue-100 text-blue-700'
      case 'message':
        return 'bg-purple-100 text-purple-700'
      default:
        return 'bg-gray-100 text-gray-700'
    }
  }

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'testimonial':
        return 'Testimonial'
      case 'feedback':
        return 'Feedback'
      case 'message':
        return 'Message'
      default:
        return 'Message'
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
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                placeholder="Share your thoughts, experiences, or simply say hello..."
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

      {/* Guestbook Entries */}
      <section>
        <h2 className="text-2xl font-semibold mb-8 text-center">Recent Messages</h2>
        
        <div className="grid gap-6">
          {guestbookEntries.map((entry) => (
            <div key={entry.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-4">
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                    {entry.avatar}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-semibold text-gray-800">{entry.name}</h3>
                    <span className="text-sm text-gray-500">•</span>
                    <span className="text-sm text-gray-600">{entry.role}</span>
                    <span className="text-sm text-gray-500">•</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(entry.type)}`}>
                      {getTypeLabel(entry.type)}
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
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-8">
          <button className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium">
            Load More Messages
          </button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="mt-16 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-purple-600 mb-2">
              {guestbookEntries.length}+
            </div>
            <div className="text-gray-600">Messages</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-600 mb-2">
              15+
            </div>
            <div className="text-gray-600">Countries</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-600 mb-2">
              100%
            </div>
            <div className="text-gray-600">Positive Feedback</div>
          </div>
        </div>
      </section>
    </main>
  )
} 