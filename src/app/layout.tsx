import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from './components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Harini Sivanandh - Classical Dance Student',
  description: 'Dance journey of Harini Sivanandh - Student of Bharatanatyam under Guru Smt. Vishal Ramani',
  keywords: 'dance, student, bharatanatyam, classical dance, Vishal Ramani, learning journey, dance student',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
