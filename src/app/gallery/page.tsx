import Image from 'next/image'
import profile from '../../../content/profile.json'

export default function GalleryPage() {
  return (
    <main className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Gallery</h1>
      
      {/* Video Performances Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Video Performances</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {profile.performances.map(({ title, description, video }, i) => (
            <div key={i} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <h3 className="text-xl font-semibold p-4">{title}</h3>
              <p className="px-4 pb-4 text-gray-600">{description}</p>
              <div className="relative aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src={video.replace('watch?v=', 'embed/')}
                  title={title}
                  frameBorder="0"
                  allowFullScreen
                  className="absolute inset-0"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Photo Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Example structure for large images */}
          {[
            {
              id: 1,
              title: "Performance at Cultural Festival",
              description: "Bharatanatyam performance at the annual cultural festival",
              src: "/images/gallery/performance1.jpg", // Replace with your Google Drive URLs
              alt: "Dance performance on stage"
            },
            {
              id: 2,
              title: "Practice Session",
              description: "Intensive practice session with Guru",
              src: "/images/gallery/practice1.jpg",
              alt: "Dance practice in studio"
            },
            {
              id: 3,
              title: "Traditional Costume",
              description: "Wearing traditional Bharatanatyam costume",
              src: "/images/gallery/costume1.jpg",
              alt: "Traditional dance costume"
            }
          ].map((image) => (
            <div key={image.id} className="group relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  priority={image.id <= 3} // Load first 3 images with priority
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{image.title}</h3>
                <p className="text-gray-600 text-sm">{image.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

