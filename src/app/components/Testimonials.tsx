import profile from '../../../content/profile.json'

export default function Testimonials() {
  return (
    <section className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6">Testimonials</h2>
      <div className="space-y-6">
        {profile.testimonials.map(({ name, role, quote }, i) => (
          <blockquote
            key={i}
            className="border-l-4 pl-4 border-purple-400 italic text-gray-700"
          >
            “{quote}”
            <footer className="mt-2 text-sm text-gray-500">
              — {name}, {role}
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  )
}

