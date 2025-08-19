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

export default function AnandaMargamPage() {
  return (
    <div className={`${poppins.className} min-h-screen`}>
      {/* Hero Section */}
      <section className="ananda-hero-section">
        <div className="ananda-hero-overlay">
          <div className="ananda-hero-content">
            <h1 className={`${dancingScript.className} ananda-hero-title`}>
              Ananda Margam
            </h1>
            <p className="ananda-hero-subtitle">My First Major Bharatanatyam Performance</p>
            <p className="ananda-hero-date">A Journey from Student to Performer</p>
            <div className="ananda-hero-buttons">
              <Link href="/" className="btn-primary">← Back to Home</Link>
              <Link href="/gallery" className="btn-secondary">View Gallery</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Overview */}
      <section className="overview-section">
        <div className="container">
          <div className="section-header">
            <h2 className={`${dancingScript.className} section-title`}>Performance Overview</h2>
            <div className="title-underline"></div>
          </div>
          <div className="overview-grid">
            <div className="overview-card">
              <div className="overview-icon">🎭</div>
              <h3>Performance Type</h3>
              <p>Solo Bharatanatyam Arangetram-style Presentation</p>
            </div>
            <div className="overview-card">
              <div className="overview-icon">⏱️</div>
              <h3>Duration</h3>
              <p>90 Minutes of Pure Classical Dance</p>
            </div>
            <div className="overview-card">
              <div className="overview-icon">🎵</div>
              <h3>Music</h3>
              <p>Live Traditional Carnatic Music Accompaniment</p>
            </div>
            <div className="overview-card">
              <div className="overview-icon">👘</div>
              <h3>Costume</h3>
              <p>Traditional Bharatanatyam Attire & Jewelry</p>
            </div>
          </div>
        </div>
      </section>

      {/* Repertoire Details */}
      <section className="repertoire-section">
        <div className="container">
          <div className="section-header">
            <h2 className={`${dancingScript.className} section-title`}>Complete Repertoire</h2>
            <div className="title-underline"></div>
          </div>
          <div className="repertoire-detailed-grid">
            <div className="repertoire-detailed-item">
              <div className="repertoire-number">01</div>
              <div className="repertoire-content">
                <h3>Alarippu</h3>
                <p className="repertoire-description">
                  The opening invocation piece that begins with pure dance movements (nritta). 
                  This piece serves as a prayer and warm-up, setting the spiritual tone for the entire performance.
                </p>
                <div className="repertoire-features">
                  <span className="feature-tag">Pure Dance</span>
                  <span className="feature-tag">Rhythm</span>
                  <span className="feature-tag">Invocation</span>
                </div>
              </div>
            </div>

            <div className="repertoire-detailed-item">
              <div className="repertoire-number">02</div>
              <div className="repertoire-content">
                <h3>Jatiswaram</h3>
                <p className="repertoire-description">
                  A complex piece that combines rhythmic patterns (jatis) with musical notes (swaras). 
                  This showcases technical mastery and rhythmic precision.
                </p>
                <div className="repertoire-features">
                  <span className="feature-tag">Technical</span>
                  <span className="feature-tag">Rhythm</span>
                  <span className="feature-tag">Complex</span>
                </div>
              </div>
            </div>

            <div className="repertoire-detailed-item">
              <div className="repertoire-number">03</div>
              <div className="repertoire-content">
                <h3>Shabdam</h3>
                <p className="repertoire-description">
                  The first piece that introduces lyrics with simple expressions (abhinaya). 
                  This marks the beginning of storytelling through dance.
                </p>
                <div className="repertoire-features">
                  <span className="feature-tag">Expression</span>
                  <span className="feature-tag">Storytelling</span>
                  <span className="feature-tag">Lyrics</span>
                </div>
              </div>
            </div>

            <div className="repertoire-detailed-item">
              <div className="repertoire-number">04</div>
              <div className="repertoire-content">
                <h3>Varnam</h3>
                <p className="repertoire-description">
                  The central and most important piece that combines pure dance, music, and expression. 
                  This is the heart of the performance, showcasing the dancer's complete skills.
                </p>
                <div className="repertoire-features">
                  <span className="feature-tag">Central Piece</span>
                  <span className="feature-tag">Complete Skills</span>
                  <span className="feature-tag">Masterpiece</span>
                </div>
              </div>
            </div>

            <div className="repertoire-detailed-item">
              <div className="repertoire-number">05</div>
              <div className="repertoire-content">
                <h3>Padam</h3>
                <p className="repertoire-description">
                  A deeply emotional piece that focuses on storytelling through expressions (abhinaya). 
                  This piece demonstrates the dancer's ability to convey emotions and narratives.
                </p>
                <div className="repertoire-features">
                  <span className="feature-tag">Emotional</span>
                  <span className="feature-tag">Storytelling</span>
                  <span className="feature-tag">Expression</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="journey-section">
        <div className="container">
          <div className="section-header">
            <h2 className={`${dancingScript.className} section-title`}>My Journey to Ananda Margam</h2>
            <div className="title-underline"></div>
          </div>
          <div className="journey-content">
            <div className="journey-text">
              <p className="journey-paragraph">
                My journey to Ananda Margam began years ago when I first stepped into the world of Bharatanatyam. 
                Under the loving guidance of my Guru Smt. Vishal Ramani, I learned not just the movements, 
                but the soul of this ancient art form.
              </p>
              <p className="journey-paragraph">
                Every class was a step forward - from learning basic adavus to understanding the intricate 
                relationship between music, rhythm, and expression. The path was challenging but incredibly rewarding.
              </p>
              <p className="journey-paragraph">
                When my Guru announced that I was ready for Ananda Margam, it was both exciting and humbling. 
                This wasn't just another performance; it was a milestone that would mark my transition from 
                a student to a performer, carrying forward the legacy of this beautiful tradition.
              </p>
            </div>
            <div className="journey-stats">
              <div className="journey-stat">
                <span className="stat-number">1000+</span>
                <span className="stat-label">Hours of Practice</span>
              </div>
              <div className="journey-stat">
                <span className="stat-number">5</span>
                <span className="stat-label">Years of Learning</span>
              </div>
              <div className="journey-stat">
                <span className="stat-number">1</span>
                <span className="stat-label">Inspiring Guru</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guru Tribute */}
      <section className="guru-tribute-section">
        <div className="container">
          <div className="section-header">
            <h2 className={`${dancingScript.className} section-title`}>Gratitude to My Guru</h2>
            <div className="title-underline"></div>
          </div>
          <div className="guru-tribute-content">
            <div className="guru-tribute-text">
              <h3>Guru Smt. Vishal Ramani</h3>
              <p>
                This Ananda Margam performance would not have been possible without the unwavering support, 
                patience, and guidance of my beloved Guru Smt. Vishal Ramani. Her dedication to preserving 
                and teaching the classical art form is truly inspiring.
              </p>
              <p>
                Under her patient guidance, I learned not only the technical aspects of dance but also the 
                deeper cultural and spiritual significance of each movement. Her teaching style combines 
                traditional methods with contemporary understanding, making each lesson enriching and meaningful.
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
                <div className="quality-item">
                  <span className="quality-icon">🙏</span>
                  <span>Spiritual Wisdom</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Highlights */}
      <section className="highlights-section">
        <div className="container">
          <div className="section-header">
            <h2 className={`${dancingScript.className} section-title`}>Performance Highlights</h2>
            <div className="title-underline"></div>
          </div>
          <div className="highlights-grid">
            <div className="highlight-card">
              <div className="highlight-icon">🎭</div>
              <h3>Traditional Costume</h3>
              <p>Beautifully adorned in traditional Bharatanatyam attire with authentic jewelry, presenting the complete classical look</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">🎵</div>
              <h3>Live Music</h3>
              <p>Accompanied by live Carnatic music ensemble, creating an authentic and immersive performance experience</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">💫</div>
              <h3>Complete Repertoire</h3>
              <p>Successfully presented all five pieces of the traditional Bharatanatyam repertoire with technical precision</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">👥</div>
              <h3>Audience Appreciation</h3>
              <p>Received warm appreciation and recognition from the audience, marking the success of this milestone performance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className={`${dancingScript.className} cta-title`}>Experience the Magic</h2>
            <p className="cta-text">
              This Ananda Margam performance was a celebration of tradition, dedication, and the beautiful 
              journey of learning classical dance. It marked the beginning of my path as a performer.
            </p>
            <div className="cta-buttons">
              <Link href="/gallery" className="btn-primary">View Performance Photos</Link>
              <Link href="/contact" className="btn-secondary">Connect With Me</Link>
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
            <p>© 2024 Harini Sivanandh. A student's journey in classical dance 💃</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
