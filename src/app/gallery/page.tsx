import profile from '../../../content/profile.json'

export default function GalleryPage() {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Performances</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {profile.performances.map(({ title, description, video }, i) => (
          <div key={i}>
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="mb-2 text-gray-600">{description}</p>
            <iframe
              width="100%"
              height="215"
              src={video.replace('watch?v=', 'embed/')}
              title={title}
              frameBorder="0"
              allowFullScreen
            />
          </div>
        ))}
      </div>
    </main>
  )
}

