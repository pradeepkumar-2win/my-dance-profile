import { Dancing_Script, Poppins } from 'next/font/google'
import Link from 'next/link'

const dancingScript = Dancing_Script({ 
  subsets: ['latin'],
  weight: ['400', '700']
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700']
})

export default function SankaraInternshipPage() {
  return (
    <div className={`${poppins.className} min-h-screen`}>
      {/* Hero Section */}
      <section className="sankara-hero-section">
        <div className="sankara-hero-overlay">
          <div className="sankara-hero-content">
            <h1 className={`${dancingScript.className} sankara-hero-title`}>
              Sankara Eye Hospital Internship
            </h1>
            <p className="sankara-hero-subtitle">An Eye-Opening Experience in Healthcare</p>
            <p className="sankara-hero-date">Coimbatore, India - A Journey of Learning & Compassion</p>
            <div className="sankara-hero-buttons">
              <Link href="/" className="btn-primary">← Back to Home</Link>
              <Link href="https://www.giftofvision.org/humans-of-sankara/harini-sivanandh-ramadass" 
                    className="btn-secondary" target="_blank" rel="noopener noreferrer">
                Read Full Article →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Internship Overview */}
      <section className="overview-section">
        <div className="container">
          <div className="section-header">
            <h2 className={`${dancingScript.className} section-title`}>Internship Overview</h2>
            <div className="title-underline"></div>
          </div>
          <div className="overview-grid">
            <div className="overview-card">
              <div className="overview-icon">🏥</div>
              <h3>Hospital</h3>
              <p>Super-speciality Sankara Eye Hospital, Coimbatore, India</p>
            </div>
            <div className="overview-card">
              <div className="overview-icon">🎓</div>
              <h3>Role</h3>
              <p>High School Intern - Learning Healthcare Operations</p>
            </div>
            <div className="overview-card">
              <div className="overview-icon">🌍</div>
              <h3>Location</h3>
              <p>Coimbatore, Tamil Nadu, India</p>
            </div>
            <div className="overview-card">
              <div className="overview-icon">💝</div>
              <h3>Mission</h3>
              <p>Gift of Vision Initiative - Free Eye Care for All</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Learning Areas */}
      <section className="learning-areas-section">
        <div className="container">
          <div className="section-header">
            <h2 className={`${dancingScript.className} section-title`}>Key Learning Areas</h2>
            <div className="title-underline"></div>
          </div>
          <div className="learning-areas-grid">
            <div className="learning-area-card">
              <div className="area-icon">👥</div>
              <h3>Patient Counseling</h3>
              <p>Building trust with patients, explaining diagnoses and treatment options, and ensuring they understand their care plan. This crucial process helps patients make informed decisions about surgery or medication.</p>
            </div>
            <div className="learning-area-card">
              <div className="area-icon">🔬</div>
              <h3>Laboratory Operations</h3>
              <p>Witnessing various medical tests including blood work (biochemistry and hematology), microbiology, and ECG tests. Understanding how these tests determine patient fitness for surgery.</p>
            </div>
            <div className="learning-area-card">
              <div className="area-icon">📊</div>
              <h3>Research Department</h3>
              <p>Observing clinical research with incredible rigor and screening standards. Learning the importance of minimizing errors in research for the greater goal of helping more people.</p>
            </div>
            <div className="learning-area-card">
              <div className="area-icon">👁️</div>
              <h3>Eye Bank</h3>
              <p>Seeing donated eyes being prepared for transplant and understanding the profound impact of organ donation. This experience highlighted the mission of giving the gift of sight.</p>
            </div>
            <div className="learning-area-card">
              <div className="area-icon">⚕️</div>
              <h3>Operating Theater</h3>
              <p>Spending two days inside the operating room witnessing both basic cataract surgeries and complex procedures. An intense and unforgettable learning experience.</p>
            </div>
            <div className="learning-area-card">
              <div className="area-icon">🏘️</div>
              <h3>Village Outreach</h3>
              <p>Participating in village outreach camps, seeing the challenges of healthcare access, and understanding the importance of bringing medical care to underserved communities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Through the Hospital */}
      <section className="journey-section">
        <div className="container">
          <div className="section-header">
            <h2 className={`${dancingScript.className} section-title`}>My Journey Through the Hospital</h2>
            <div className="title-underline"></div>
          </div>
          <div className="journey-timeline">
            <div className="timeline-item">
              <div className="timeline-marker">1</div>
              <div className="timeline-content">
                <h3>Comprehensive Hospital Tour</h3>
                <p>Started with a complete tour from the registration desk where patients first arrive, through the wards, pharmacy, and finance departments. Even got a unique peek inside the operating room!</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">2</div>
              <div className="timeline-content">
                <h3>Patient Journey Shadowing</h3>
                <p>Followed patients from registration through the complete eye check-up process. Met various teams including bio-innovation lab, pharmacy, financials, and camp planning department.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">3</div>
              <div className="timeline-content">
                <h3>Specialized Department Learning</h3>
                <p>Developed deep interest in Patient Counseling, Laboratory, Research Department, Eye Bank, and Operating Theater. Each area offered unique insights into healthcare operations.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">4</div>
              <div className="timeline-content">
                <h3>Operating Room Experience</h3>
                <p>The pinnacle of my internship - spending two days inside the Operating Room witnessing basic cataract surgeries and complex procedures up close. A truly unforgettable moment.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">5</div>
              <div className="timeline-content">
                <h3>Village Outreach Camp</h3>
                <p>Participated in a village outreach camp, seeing firsthand the challenges faced by people without easy access to healthcare. Witnessed free eye surgeries for patients with advanced cataracts.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact & Learning */}
      <section className="impact-section">
        <div className="container">
          <div className="section-header">
            <h2 className={`${dancingScript.className} section-title`}>Impact & Key Learnings</h2>
            <div className="title-underline"></div>
          </div>
          <div className="impact-content">
            <div className="impact-text">
              <h3>Transformative Learning Experience</h3>
              <p>
                My internship at Sankara Eye Hospital was more than just a learning opportunity – it was a lesson in compassion, 
                philanthropy, and the hope that giving the gift of sight can bring. As a high school intern, I was initially 
                overwhelmed, but the staff&apos;s warmth and willingness to share their knowledge quickly made me feel at home.
              </p>
              <p>
                This experience taught me practical realities of the medical system that few get to see. I learned about the 
                importance of building trust with patients, the rigor required in clinical research, and the profound impact 
                of organ donation. Most importantly, I witnessed how healthcare can be made accessible to everyone, regardless 
                of their ability to pay.
              </p>
            </div>
            <div className="impact-highlights">
              <div className="impact-highlight">
                <span className="highlight-icon">💡</span>
                <div>
                  <h4>Practical Knowledge</h4>
                  <p>Real-world understanding of healthcare operations beyond textbooks</p>
                </div>
              </div>
              <div className="impact-highlight">
                <span className="highlight-icon">❤️</span>
                <div>
                  <h4>Compassion & Service</h4>
                  <p>Learning the importance of helping others and giving back to community</p>
                </div>
              </div>
              <div className="impact-highlight">
                <span className="highlight-icon">🌍</span>
                <div>
                  <h4>Cultural Awareness</h4>
                  <p>Working in an Indian healthcare setting and understanding local needs</p>
                </div>
              </div>
              <div className="impact-highlight">
                <span className="highlight-icon">🎯</span>
                <div>
                  <h4>Career Insight</h4>
                  <p>Valuable experience for future studies in medicine or healthcare</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gift of Vision Initiative */}
      <section className="gift-vision-section">
        <div className="container">
          <div className="section-header">
            <h2 className={`${dancingScript.className} section-title`}>The Gift of Vision Initiative</h2>
            <div className="title-underline"></div>
          </div>
          <div className="gift-vision-content">
            <div className="gift-vision-text">
              <h3>Bringing Sight to Those in Need</h3>
              <p>
                Sankara&apos;s philanthropic work, funded through their Gift of Vision initiative, was a major focus of my time there. 
                I participated in a village outreach camp, where I saw firsthand the challenges faced by people without easy access 
                to healthcare.
              </p>
              <p>
                Many of these villagers had advanced cataracts due to their living conditions and lack of treatment. I was humbled 
                to learn that all eye surgeries for these patients are performed completely free of charge, with the same precision 
                and care as those for paying patients.
              </p>
              <p>
                This experience brought home how blessed I am to have access to healthcare. It also showed me the power of bringing 
                philanthropic efforts to communities in need. The Gift of Vision initiative truly lives up to its name - bringing 
                light and hope to those who need it most.
              </p>
              <div className="text-center mt-6">
                <a 
                  href="https://www.giftofvision.org/humans-of-sankara/harini-sivanandh-ramadass" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  📖 Read My Full Story on Gift of Vision
                </a>
              </div>
            </div>
            <div className="gift-vision-stats">
              <div className="gift-stat">
                <span className="stat-number">100%</span>
                <span className="stat-label">Free Surgeries</span>
              </div>
              <div className="gift-stat">
                <span className="stat-number">🏘️</span>
                <span className="stat-label">Village Outreach</span>
              </div>
              <div className="gift-stat">
                <span className="stat-number">👁️</span>
                <span className="stat-label">Gift of Sight</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className={`${dancingScript.className} cta-title`}>Experience the Full Story</h2>
            <p className="cta-text">
              This internship at Sankara Eye Hospital was a transformative experience that taught me about healthcare, 
              compassion, and the power of giving back to communities in need. It&apos;s a testament to how diverse experiences 
              can shape our understanding of the world.
            </p>
            <div className="cta-buttons">
              <Link href="https://www.giftofvision.org/humans-of-sankara/harini-sivanandh-ramadass" 
                    className="btn-primary" target="_blank" rel="noopener noreferrer">
                Read Full Article on Gift of Vision →
              </Link>
              <Link href="/" className="btn-secondary">Back to My Dance Journey</Link>
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
