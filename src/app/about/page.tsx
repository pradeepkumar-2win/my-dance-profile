import profile from '../../../content/profile.json'
;
export default function About() {
  return (
    <section>
      <h2>About Me</h2>
      <p>{profile.bio}</p>
    </section>
  );
}

