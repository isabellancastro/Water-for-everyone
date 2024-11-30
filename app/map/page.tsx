'use client'

import { MapPin } from 'lucide-react'

export default function Map() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-navy-900 mb-8">
        Found volunteers and sources of water near you!
      </h2>

      <div className="relative aspect-[16/9] bg-gray-200 rounded-lg overflow-hidden mb-6">
        <div className="absolute inset-0">
          {/* Replace with actual map implementation */}
          <div className="w-full h-full bg-[url('/placeholder.svg')] bg-cover bg-center" />
        </div>
      </div>

      <div className="flex gap-8 justify-center">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-purple-500" />
          <span>volunteers</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-green-500" />
          <span>stockage</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-cyan-500" />
          <span>water source</span>
        </div>
      </div>
    </div>
  )
}

