export default function WritingPage() {
  const articles = [
    {
      id: 1,
      title: "The Art of Bharatanatyam: Beyond the Steps",
      excerpt: "Exploring the deeper meaning behind classical Indian dance and how it connects us to our cultural roots.",
      content: "Bharatanatyam is not just a dance form; it's a spiritual journey that connects the dancer to centuries of tradition. Every mudra, every expression, every movement tells a story that transcends time. In this article, I share my personal journey of discovering the profound meaning behind this ancient art form and how it has shaped my understanding of dance as a medium of storytelling.",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "Classical Dance",
      featured: true
    },
    {
      id: 2,
      title: "Contemporary Fusion: Blending Traditional and Modern",
      excerpt: "How I approach creating contemporary pieces that honor traditional techniques while embracing modern expression.",
      content: "The beauty of contemporary dance lies in its ability to bridge the gap between tradition and innovation. In my choreography, I often find myself drawing from classical techniques while incorporating modern movement vocabulary. This fusion creates a unique language that speaks to both traditional and contemporary audiences. Here's how I approach this delicate balance in my work.",
      date: "February 28, 2024",
      readTime: "4 min read",
      category: "Contemporary",
      featured: false
    },
    {
      id: 3,
      title: "The Dancer's Mindset: Building Confidence on Stage",
      excerpt: "Practical tips and mental techniques I've learned to overcome stage fright and deliver powerful performances.",
      content: "Stage fright is something every performer faces, regardless of experience level. Over the years, I've developed specific techniques to channel nervous energy into powerful performances. From breathing exercises to mental visualization, these practices have become essential parts of my pre-performance routine. I share these insights hoping they help other dancers find their confidence on stage.",
      date: "February 10, 2024",
      readTime: "6 min read",
      category: "Performance Tips",
      featured: false
    },
    {
      id: 4,
      title: "Dance as Cultural Preservation",
      excerpt: "How traditional dance forms serve as living museums of our cultural heritage and why preservation matters.",
      content: "Every traditional dance form carries within it the stories, values, and wisdom of generations. As dancers, we become custodians of this cultural wealth, responsible for passing it on to future generations. In this piece, I reflect on the importance of cultural preservation through dance and share my commitment to keeping these traditions alive while making them relevant to contemporary audiences.",
      date: "January 25, 2024",
      readTime: "7 min read",
      category: "Cultural Heritage",
      featured: true
    },
    {
      id: 5,
      title: "The Physical Demands of Professional Dance",
      excerpt: "An honest look at the physical challenges of dance and how to maintain peak performance.",
      content: "Professional dance is as physically demanding as any sport, requiring strength, flexibility, endurance, and precision. In this article, I discuss the physical challenges I face daily and share my approach to maintaining peak physical condition. From nutrition and cross-training to recovery techniques, I cover the essential aspects of a dancer's physical preparation.",
      date: "January 12, 2024",
      readTime: "5 min read",
      category: "Health & Fitness",
      featured: false
    },
    {
      id: 6,
      title: "Teaching Dance: Passing on the Passion",
      excerpt: "My philosophy on teaching dance and how I approach sharing knowledge with students of all levels.",
      content: "Teaching dance has been one of the most rewarding aspects of my career. It's not just about teaching steps; it's about inspiring passion, building confidence, and nurturing artistic expression. In this piece, I share my teaching philosophy and the methods I use to help students discover their unique voice as dancers while respecting the traditions we're preserving.",
      date: "December 20, 2023",
      readTime: "4 min read",
      category: "Teaching",
      featured: false
    },
    {
      id: 7,
      title: "The Evolution of Indian Dance in the Digital Age",
      excerpt: "How social media and technology are changing the way we experience and share dance.",
      content: "The digital revolution has transformed how we create, share, and consume dance. From Instagram reels to virtual performances, technology has opened new avenues for dancers to reach global audiences. In this article, I explore both the opportunities and challenges this presents for traditional dance forms and how I navigate this evolving landscape.",
      date: "December 5, 2023",
      readTime: "6 min read",
      category: "Digital Age",
      featured: false
    },
    {
      id: 8,
      title: "Finding Your Dance Voice: A Personal Journey",
      excerpt: "My personal story of discovering my unique style and artistic voice in the world of dance.",
      content: "Every dancer's journey is unique, filled with moments of discovery, doubt, and breakthrough. In this deeply personal piece, I share my own journey of finding my voice as a dancer. From my early struggles with self-expression to the moments that defined my artistic identity, this is a story of growth, perseverance, and the constant search for authenticity in movement.",
      date: "November 18, 2023",
      readTime: "8 min read",
      category: "Personal Journey",
      featured: true
    }
  ]

  return (
    <main className="max-w-6xl mx-auto p-6">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Dance Writings
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Thoughts, insights, and reflections on dance, culture, and the artistic journey. 
          From technical tips to philosophical musings, these writings capture my perspective on the world of dance.
        </p>
      </div>

      {/* Featured Articles */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-8 text-center">Featured Articles</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {articles.filter(article => article.featured).map((article) => (
            <article key={article.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                    {article.category}
                  </span>
                  <span className="text-gray-500 text-sm">{article.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800 hover:text-purple-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{article.date}</span>
                  <button className="text-purple-600 hover:text-purple-700 font-medium text-sm transition-colors">
                    Read More →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* All Articles */}
      <section>
        <h2 className="text-2xl font-semibold mb-8 text-center">All Articles</h2>
        <div className="grid gap-6">
          {articles.map((article) => (
            <article key={article.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium">
                      {article.category}
                    </span>
                    <span className="text-gray-500 text-xs">{article.readTime}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800 hover:text-purple-600 transition-colors cursor-pointer">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{article.date}</span>
                    <button className="text-purple-600 hover:text-purple-700 font-medium text-xs transition-colors">
                      Read Full Article →
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="mt-16 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8 text-center">
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">
          Stay Updated with Dance Insights
        </h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Get notified when I publish new articles about dance techniques, cultural insights, and performance tips.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
          <button className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium">
            Subscribe
          </button>
        </div>
      </section>
    </main>
  )
} 