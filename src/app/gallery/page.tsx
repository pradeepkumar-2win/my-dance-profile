import Image from 'next/image';

export default function Gallery() {
  return (
    <section>
      <h2>Gallery</h2>
      <Image src="/images/dance1.jpg" alt="Dance 1" width={500} height={300} />
      <Image src="/images/dance2.jpg" alt="Dance 2" width={500} height={300} />
    </section>
  );
}

