import './globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-800 font-sans">
        {/* You can add a Header component here if you want */}
        {children}
        {/* Footer shown on every page */}
        <footer className="text-center py-6 text-sm text-gray-500 border-t mt-12">
          &copy; {new Date().getFullYear()} Pradeep Kumar. All rights reserved.
        </footer>
      </body>
    </html>
  )
}

