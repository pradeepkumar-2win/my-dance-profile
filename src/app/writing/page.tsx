export default function WritingPage() {
  // Writing articles will be added as you create real content

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

      {/* Writing Content */}
      <section className="text-center py-16">
        <div className="text-6xl mb-6">✍️</div>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Coming Soon</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
          I&apos;m working on sharing my thoughts and experiences about dance, culture, and the artistic journey. 
          Articles will appear here as I create them.
        </p>
        <p className="text-sm text-gray-500">
          Topics will include dance techniques, cultural insights, performance tips, and personal reflections.
        </p>
      </section>
    </main>
  )
} 