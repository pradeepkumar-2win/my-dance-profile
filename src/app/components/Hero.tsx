import Image from 'next/image'
import profile from '../../../content/profile.json'

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between p-6 bg-gray-100">
      <Image
        src="/images/harini-profile.jpg"
        alt={profile.name}
        width={300}
        height={300}
        className="rounded-full"
      />
      <div className="md:ml-12 mt-6 md:mt-0 text-center md:text-left max-w-xl">
        <h1 className="text-4xl font-bold">{profile.name}</h1>
        <p className="text-xl text-gray-600">{profile.title}</p>
        <p className="mt-4">{profile.bio}</p>
      </div>
    </section>
  )
}

