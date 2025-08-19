'use client'

import { Dancing_Script, Poppins } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'

const dancingScript = Dancing_Script({ 
  subsets: ['latin'],
  weight: ['400', '700']
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700']
})

export default function Home() {
  return (
    <div className={`${poppins.className} min-h-screen`}>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className={`${dancingScript.className} hero-title`}>
              Harini Sivanandh
            </h1>
            <p className="hero-subtitle">Classical Dance Student & Enthusiast</p>
            <div className="hero-buttons">
              <button 
                className="btn-primary"
                onClick={() => {
                  document.getElementById('about-section')?.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }}
              >
                View My Journey
              </button>
              <Link href="/contact" className="btn-secondary">
                Connect With Me
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about-section" className="about-section">
        <div className="container">
          <div className="section-header">
            <h2 className={`${dancingScript.className} section-title`}>About My Journey</h2>
            <div className="title-underline"></div>
          </div>
          <div className="about-content flex flex-col lg:flex-row lg:items-center lg:gap-8">
            <div className="about-text flex-1">
              <p>
                Welcome to my dance journey! I&apos;m Harini Sivanandh, a passionate student of 
                classical Indian dance forms. Under the graceful guidance of my beloved 
                <strong> Guru Smt. Vishal Ramani</strong>, I am learning the beautiful art 
                of Bharatanatyam and exploring the rich traditions of Indian classical dance.
              </p>
              <p>
                My journey began with a deep love for dance and storytelling through movement. 
                Every class with my Guru is a step forward in understanding not just the 
                technical aspects, but also the spiritual and cultural essence of this ancient art form. 
                I am grateful to be learning from such an accomplished and inspiring teacher.
              </p>
              <div className="stats">
                <div className="stat-item">
                  <span className="stat-number">10+</span>
                  <span className="stat-label">Years Learning</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">15+</span>
                  <span className="stat-label">Performances</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">1</span>
                  <span className="stat-label">Inspiring Guru</span>
                </div>
              </div>
            </div>
            <div className="about-image w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto lg:mx-0 lg:w-1/2 flex justify-center items-center mt-8 lg:mt-0">
              <div className="relative w-full bg-gray-100 shadow-2xl rounded-2xl p-2 flex justify-center items-center" style={{marginTop: '10px', marginBottom: '10px'}}>
                <Image
                  src="/images/DSC06342-Enhanced-NR.jpg"
                  alt="Harini's Photo"
                  width={350}
                  height={470}
                  className="object-contain rounded-2xl w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Journey Section */}
      <section className="styles-section">
        <div className="container">
          <div className="section-header">
            <h2 className={`${dancingScript.className} section-title`}>My Learning Path</h2>
            <div className="title-underline"></div>
          </div>
          <div className="styles-grid">
            <div className="style-card">
              <div className="card-icon">🙏</div>
              <h3>Bharatanatyam Basics</h3>
              <p>Learning fundamental positions, hand gestures (mudras), and basic steps under Guru Smt. Vishal Ramani&apos;s guidance</p>
            </div>
            <div className="style-card">
              <div className="card-icon">💃</div>
              <h3>Adavus & Technique</h3>
              <p>Mastering the building blocks of Bharatanatyam through dedicated practice of various adavus and movements</p>
            </div>
            <div className="style-card">
              <div className="card-icon">🎭</div>
              <h3>Expressions (Abhinaya)</h3>
              <p>Exploring the art of storytelling through facial expressions and emotions in classical dance</p>
            </div>
            <div className="style-card">
              <div className="card-icon">🎵</div>
              <h3>Music & Rhythm</h3>
              <p>Understanding the intricate relationship between dance, music, and rhythm in classical performances</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section">
        <div className="container">
          <div className="section-header">
            <h2 className={`${dancingScript.className} section-title`}>My Dance Moments</h2>
            <div className="title-underline"></div>
          </div>
          <div className="gallery-grid">
            {[
              "Practice Session",
              "First Performance",
              "Cultural Event",
              "Class Recital",
              "Festival Performance",
              "With My Guru"
            ].map((item, index) => (
              <div key={index + 1} className="gallery-item">
                <div className="gallery-placeholder">
                  <span>{item}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guru Section */}
      <section className="guru-section">
        <div className="container">
          <div className="section-header">
            <h2 className={`${dancingScript.className} section-title`}>My Guru</h2>
            <div className="title-underline"></div>
          </div>
          <div className="guru-content">
            <div className="guru-image">
              <div className="image-placeholder">
                <span>Guru Smt. Vishal Ramani</span>
              </div>
            </div>
            <div className="guru-text">
              <h3 className={`${dancingScript.className} guru-name`}>Guru Smt. Vishal Ramani</h3>
              <p>
                I am incredibly fortunate to be learning under the guidance of 
                <strong> Guru Smt. Vishal Ramani</strong>, an accomplished Bharatanatyam dancer 
                and teacher. Her dedication to preserving and teaching the classical art form 
                is truly inspiring.
              </p>
              <p>
                Under her patient guidance, I am not only learning the technical aspects of 
                dance but also understanding the deeper cultural and spiritual significance 
                of each movement. Her teaching style combines traditional methods with 
                contemporary understanding, making each lesson enriching and meaningful.
              </p>
              <div className="guru-qualities">
                <div className="quality-item">
                  <span className="quality-icon">🌟</span>
                  <span>Inspiring Teacher</span>
                </div>
                <div className="quality-item">
                  <span className="quality-icon">🎯</span>
                  <span>Technical Excellence</span>
                </div>
                <div className="quality-item">
                  <span className="quality-icon">❤️</span>
                  <span>Patient Guidance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <h2 className={`${dancingScript.className} section-title`}>My Achievements</h2>
            <div className="title-underline"></div>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🌟</div>
              <h3>Ananda Margam</h3>
              <p>Successfully completed my first major Bharatanatyam performance - a complete dance repertoire including Alarippu, Jatiswaram, Shabdam, Varnam, and Padam, showcasing fundamental techniques, expressions, and storytelling. This milestone performance marked my transition from student to performer.</p>
              <Link href="/ananda-margam" className="btn-primary mt-4 inline-block">Learn More →</Link>
            </div>
            <div className="service-card">
              <div className="service-icon">🏆</div>
              <h3>School Performances</h3>
              <p>Regular performances at school cultural events and annual day celebrations</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🎪</div>
              <h3>Cultural Festivals</h3>
              <p>Participated in various cultural festivals and community events showcasing classical dance</p>
            </div>
            <div className="service-card">
              <div className="service-icon">📜</div>
              <h3>Recitals</h3>
              <p>Successfully completed several dance recitals as part of my learning journey</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🌸</div>
              <h3>Continuous Learning</h3>
              <p>Dedicated to regular practice and continuous improvement in my dance skills</p>
            </div>
          </div>
        </div>
      </section>



      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2 className={`${dancingScript.className} section-title`}>What People Say</h2>
            <div className="title-underline"></div>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>&quot;Harini&apos;s dedication to learning Bharatanatyam is remarkable. Her performances show genuine passion and respect for the art form.&quot;</p>
              </div>
              <div className="testimonial-author">
                <strong>Priya Aunty</strong>
                <span>Family Friend</span>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>&quot;It&apos;s wonderful to see young students like Harini embracing our classical traditions with such enthusiasm and dedication.&quot;</p>
              </div>
              <div className="testimonial-author">
                <strong>Mrs. Sharma</strong>
                <span>School Teacher</span>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>&quot;Harini&apos;s progress in dance has been incredible to watch. Her commitment to learning is truly admirable.&quot;</p>
              </div>
              <div className="testimonial-author">
                <strong>Ravi Uncle</strong>
                <span>Family Friend</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-section" className="contact-section">
        <div className="container">
          <div className="section-header">
            <h2 className={`${dancingScript.className} section-title`}>Connect With Me</h2>
            <div className="title-underline"></div>
          </div>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Let&apos;s Share Our Love for Dance</h3>
              <p>
                I love connecting with fellow dance enthusiasts and sharing experiences about 
                our learning journey. Whether you&apos;re also learning classical dance or just 
                appreciate the art form, I&apos;d love to hear from you!
              </p>
              <div className="contact-items">
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <span>harini.sivanandh@email.com</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📱</span>
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <span>Your City, State</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">💃</span>
                  <span>Student of Guru Smt. Vishal Ramani</span>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <form>
                <div className="form-group">
                  <input type="text" placeholder="Your Name" className="form-input" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" className="form-input" required />
                </div>
                <div className="form-group">
                  <input type="tel" placeholder="Your Phone Number" className="form-input" />
                </div>
                <div className="form-group">
                  <select className="form-input" required>
                    <option value="">How can we connect?</option>
                    <option value="dance-chat">Dance Discussion</option>
                    <option value="learning-tips">Learning Tips</option>
                    <option value="performance">Performance Opportunity</option>
                    <option value="friendship">Just to Connect</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <textarea placeholder="Share your thoughts or questions about dance..." rows={5} className="form-input" required></textarea>
                </div>
                <button type="submit" className="btn-primary">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-text">
              <h3 className={`${dancingScript.className}`}>Harini Sivanandh</h3>
              <p>Student of Classical Dance</p>
              <p>Learning under Guru Smt. Vishal Ramani</p>
            </div>
            <div className="social-links">
              <a href="#" className="social-link">Instagram</a>
              <a href="#" className="social-link">YouTube</a>
              <a href="#" className="social-link">Facebook</a>
              <a href="#" className="social-link">LinkedIn</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2024 Harini Sivanandh. A student&apos;s journey in classical dance 💃</p>
          </div>
        </div>
      </footer>
    </div>
  )
}