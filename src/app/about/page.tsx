import profile from '../../../content/profile.json'

export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      <p>{profile.bio}</p>
      <h2 className="mt-8 text-2xl font-semibold">Dance Styles</h2>
      <ul className="list-disc ml-5 mt-2">
        {profile.danceStyles.map((style) => (
          <li key={style}>{style}</li>
        ))}
      </ul>
    </main>
  )
}

