import Link from 'next/link'

export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <Link href="/" className="absolute top-4 left-4 text-white hover:text-gray-300">
        Back to Home
      </Link>
      <h1 className="text-4xl font-bold mb-8 font-['Orbitron']">Discord</h1>
      <div className="bg-gray-700 p-6 rounded-2xl max-w-md">
        <h2 className="text-2xl font-semibold mb-2">Hexova</h2>
        <p className="text-gray-300">https://discord.gg/RXfqhDYqXF</p>
      </div>
    </div>
  )
}

