import { Camera } from 'lucide-react'
import Link from "next/link"

export default function WaterForEveryone() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-sky-300 py-8">
        <h1 className="text-4xl md:text-6xl font-black text-center tracking-tight">
          WATER FOR EVERYONE
        </h1>
      </header>

      {/* Navigation */}
      <nav className="bg-gray-200 py-4">
        <ul className="flex justify-around max-w-6xl mx-auto px-4">
          <li>
            <Link href="/identify" className="text-navy-900 hover:text-navy-700 font-bold">
              Identify
            </Link>
          </li>
          <li>
            <Link href="/forum" className="text-navy-900 hover:text-navy-700 font-bold">
              Forum
            </Link>
          </li>
          <li>
            <Link href="/map" className="text-navy-900 hover:text-navy-700 font-bold">
              Map
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-navy-900 hover:text-navy-700 font-bold">
              Who are we
            </Link>
          </li>
          <li>
            <Link href="/help" className="text-navy-900 hover:text-navy-700 font-bold">
              Help
            </Link>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <main className="flex-1 max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-12">
          To find, to purify or to store?
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Upload Section */}
          <div className="bg-gray-200 rounded-lg p-8 text-center">
            <div className="mb-4">
              <Camera className="w-16 h-16 mx-auto text-gray-600" />
              <p className="text-gray-600 mt-2">uploade or take a picture</p>
            </div>
            <label className="cursor-pointer inline-block">
              <span className="sr-only">Choose file</span>
              <input type="file" accept="image/*" capture="environment" className="hidden" />
              <div className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Upload Photo
              </div>
            </label>
          </div>

          {/* Description */}
          <div className="space-y-4">
            <p className="text-lg leading-relaxed">
              Upload or capture a photo to identify nearby water sources, determine their location, if they can be purified,
              or assess their storage potential. Using an algorithm powered by artificial intelligence, our platform quickly
              evaluates whether a water source is safe for drinking.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

