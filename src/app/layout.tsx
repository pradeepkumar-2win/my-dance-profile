import './globals.css';  // if you have global styles
import Link from 'next/link';

export const metadata = {
  title: 'Dance Profile',
  description: 'My Dance Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>My Dance Profile</h1>
          <nav>
	    <Link href="/">Home</Link> | <Link href="/about">About</Link> | <Link href="/gallery">Gallery</Link>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}

