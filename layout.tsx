import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Hexova',
  description: 'Webhook Tool and More',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white min-h-screen`}>
        <div className="absolute top-4 right-4 text-gray-500">nigiri (xr4o) full access | V1.0</div>
        {children}
      </body>
    </html>
  )
}

