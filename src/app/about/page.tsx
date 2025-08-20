import { Dancing_Script, Poppins } from 'next/font/google'
import Image from 'next/image'

const dancingScript = Dancing_Script({ 
  subsets: ['latin'],
  weight: ['400', '700']
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700']
})

export default function AboutPage() {
  return (
    <div className={`${poppins.className} min-h-screen bg-gradient-to-br from-blue-50 to-purple-50`}>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className={`${dancingScript.className} text-5xl md:text-6xl font-bold mb-6`}>
            About My Dance Journey
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Discovering the beauty of Bharatanatyam through dedication, passion, and the guidance of my beloved Guru
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className={`${dancingScript.className} text-4xl font-bold text-gray-800 mb-6`}>
              My Story
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Welcome to my dance journey! I&apos;m Harini Sivanandh, a passionate student of 
              classical Indian dance forms. Under the graceful guidance of my beloved 
              <strong className="text-purple-600"> Guru Smt. Vishal Ramani</strong>, I am learning the beautiful art 
              of Bharatanatyam and exploring the rich traditions of Indian classical dance.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              My journey began with a deep love for dance and storytelling through movement. 
              Every class with my Guru is a step forward in understanding not just the 
              technical aspects, but also the spiritual and cultural essence of this ancient art form. 
              I am grateful to be learning from such an accomplished and inspiring teacher.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Through Bharatanatyam, I&apos;m not just learning dance steps, but discovering 
              the profound connection between movement, music, emotion, and storytelling that 
              makes this classical art form so special and timeless.
            </p>
          </div>

          {/* Image */}
          <div className="about-image">
            <div className="image-container">
              <Image
                src="/images/DSC06342-Enhanced-NR.jpg"
                alt="Harini's Dance Journey"
                width={350}
                height={470}
                className="profile-image"
                priority
              />
            </div>
          </div>
        </div>

        {/* Learning Journey */}
        <section className="mb-20">
          <h2 className={`${dancingScript.className} text-4xl font-bold text-center text-gray-800 mb-12`}>
            My Learning Path
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🙏</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Bharatanatyam Basics</h3>
              <p className="text-gray-600">Learning fundamental positions, hand gestures (mudras), and basic steps under Guru Smt. Vishal Ramani&apos;s guidance</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">💃</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Adavus & Technique</h3>
              <p className="text-gray-600">Mastering the building blocks of Bharatanatyam through dedicated practice of various adavus and movements</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🎭</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Expressions (Abhinaya)</h3>
              <p className="text-gray-600">Exploring the art of storytelling through facial expressions and emotions in classical dance</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🎵</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Music & Rhythm</h3>
              <p className="text-gray-600">Understanding the intricate relationship between dance, music, and rhythm in classical performances</p>
            </div>
          </div>
        </section>

        {/* Guru Section */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-3xl p-12 text-center">
            <h2 className={`${dancingScript.className} text-4xl font-bold text-gray-800 mb-8`}>
              My Beloved Guru
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="text-6xl mb-6">🙏</div>
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">Guru Smt. Vishal Ramani</h3>
              <p className="text-lg text-gray-600 mb-6">
                I am incredibly fortunate to be learning under the guidance of 
                <strong className="text-orange-600"> Guru Smt. Vishal Ramani</strong>, an accomplished Bharatanatyam dancer 
                and teacher. Her dedication to preserving and teaching the classical art form 
                is truly inspiring.
              </p>
              <p className="text-lg text-gray-600">
                Under her patient guidance, I am not only learning the technical aspects of 
                dance but also understanding the deeper cultural and spiritual significance 
                of each movement. Her teaching style combines traditional methods with 
                contemporary understanding, making each lesson enriching and meaningful.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="text-center">
          <h2 className={`${dancingScript.className} text-4xl font-bold text-gray-800 mb-12`}>
            My Journey in Numbers
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-5xl font-bold text-purple-600 mb-2">10+</div>
              <div className="text-xl text-gray-600">Years Learning</div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-5xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-xl text-gray-600">Performances</div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-5xl font-bold text-green-600 mb-2">1</div>
              <div className="text-xl text-gray-600">Inspiring Guru</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

