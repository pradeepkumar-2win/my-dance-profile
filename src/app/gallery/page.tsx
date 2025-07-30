'use client'

import Image from 'next/image'
import { useState } from 'react'

// Define the gallery images with metadata
const galleryImages = [
  {
    id: 1,
    src: "/images/DSC05575.jpg",
    alt: "Dance performance - Classical pose",
    title: "Classical Bharatanatyam Pose",
    description: "Traditional mudra and expression in classical dance"
  },
  {
    id: 2,
    src: "/images/DSC05616.jpg",
    alt: "Dance performance - Dynamic movement",
    title: "Dynamic Movement",
    description: "Expressive contemporary dance movement"
  },
  {
    id: 3,
    src: "/images/DSC05632.jpg",
    alt: "Dance performance - Stage presence",
    title: "Stage Presence",
    description: "Commanding presence on stage during performance"
  },
  {
    id: 4,
    src: "/images/DSC05632(1).jpg",
    alt: "Dance performance - Artistic expression",
    title: "Artistic Expression",
    description: "Capturing the essence of dance through movement"
  },
  {
    id: 5,
    src: "/images/DSC05653.jpg",
    alt: "Dance performance - Graceful pose",
    title: "Graceful Pose",
    description: "Elegant pose showcasing classical training"
  },
  {
    id: 6,
    src: "/images/DSC05685.jpg",
    alt: "Dance performance - Energy and passion",
    title: "Energy and Passion",
    description: "High-energy performance with dynamic choreography"
  },
  {
    id: 7,
    src: "/images/DSC05708.jpg",
    alt: "Dance performance - Cultural expression",
    title: "Cultural Expression",
    description: "Celebrating cultural heritage through dance"
  },
  {
    id: 8,
    src: "/images/DSC05716.jpg",
    alt: "Dance performance - Contemporary style",
    title: "Contemporary Style",
    description: "Modern contemporary dance interpretation"
  },
  {
    id: 9,
    src: "/images/DSC05723.jpg",
    alt: "Dance performance - Traditional costume",
    title: "Traditional Costume",
    description: "Beautiful traditional dance costume and jewelry"
  },
  {
    id: 10,
    src: "/images/DSC06292.jpg",
    alt: "Dance performance - Solo performance",
    title: "Solo Performance",
    description: "Captivating solo dance performance"
  },
  {
    id: 11,
    src: "/images/DSC06342-Enhanced-NR.jpg",
    alt: "Dance performance - Enhanced expression",
    title: "Enhanced Expression",
    description: "Enhanced dance expression with perfect timing"
  },
  {
    id: 12,
    src: "/images/DSC06364.jpg",
    alt: "Dance performance - Stage lighting",
    title: "Stage Lighting",
    description: "Dramatic stage lighting enhancing the performance"
  },
  {
    id: 13,
    src: "/images/DSC06461.jpg",
    alt: "Dance performance - Audience engagement",
    title: "Audience Engagement",
    description: "Connecting with the audience through movement"
  },
  {
    id: 14,
    src: "/images/DSC06587.jpg",
    alt: "Dance performance - Final pose",
    title: "Final Pose",
    description: "Striking final pose of the performance"
  },
  {
    id: 15,
    src: "/images/IMG_9082.jpg",
    alt: "Dance performance - Practice session",
    title: "Practice Session",
    description: "Intensive practice session with focus on technique"
  },
  {
    id: 16,
    src: "/images/IMG_9086.jpg",
    alt: "Dance performance - Rehearsal",
    title: "Rehearsal",
    description: "Perfecting choreography during rehearsal"
  },
  {
    id: 17,
    src: "/images/IMG_9102.jpg",
    alt: "Dance performance - Performance moment",
    title: "Performance Moment",
    description: "Capturing the magic of live performance"
  },
  {
    id: 18,
    src: "/images/IMG_9123.jpg",
    alt: "Dance performance - Artistic moment",
    title: "Artistic Moment",
    description: "Pure artistic expression in dance"
  },
  {
    id: 19,
    src: "/images/IMG_9127.jpg",
    alt: "Dance performance - Celebration",
    title: "Celebration",
    description: "Celebrating the joy of dance and performance"
  }
]

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null)

  return (
    <main className="max-w-7xl mx-auto p-6">
      {/* Photo Gallery Section */}
      <section>
        <h2 className="text-3xl font-semibold mb-8 text-center">Photo Gallery</h2>
        
        {/* Filter buttons */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-100 rounded-full p-1">
            <button className="px-6 py-2 rounded-full bg-white shadow-sm text-gray-700 font-medium transition-all duration-200">
              All Photos
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryImages.map((image) => (
            <div 
              key={image.id} 
              className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  priority={image.id <= 8}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="text-lg font-semibold mb-1">{image.title}</h3>
                    <p className="text-sm opacity-90">{image.description}</p>
                  </div>
                </div>

                {/* Zoom icon */}
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Image counter */}
        <div className="text-center mt-8 text-gray-600">
          <p>{galleryImages.length} photos in the gallery</p>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <button 
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
              onClick={() => setSelectedImage(null)}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="relative">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={800}
                height={1000}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
                priority
              />
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <h3 className="text-2xl font-semibold text-white mb-2">{selectedImage.title}</h3>
                <p className="text-white/90">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

