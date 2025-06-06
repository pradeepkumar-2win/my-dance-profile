import profile from '../../../content/profile.json'
import { FaInstagram, FaYoutube, FaFacebook } from 'react-icons/fa'

export default function Contact() {
  return (
    <section className="p-6 bg-gray-100">
      <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
      <p>
        Email:{' '}
        <a
          href={`mailto:${profile.contact.email}`}
          className="text-purple-600 underline"
        >
          {profile.contact.email}
        </a>
      </p>
      <div className="flex space-x-6 mt-4 text-2xl">
        <a href={profile.social.instagram} target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>
        <a href={profile.social.youtube} target="_blank" rel="noreferrer">
          <FaYoutube />
        </a>
        <a href={profile.social.facebook} target="_blank" rel="noreferrer">
          <FaFacebook />
        </a>
      </div>
    </section>
  )
}

