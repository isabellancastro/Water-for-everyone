import Image from 'next/image'

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12 max-w-4xl mx-auto">
        <p className="text-lg">
          Access to potable water remains a challenge for many people in underdeveloped cities worldwide.
          Women are often the most affected, as they are typically responsible for providing nourishment and caring for
          their families—a task that heavily relies on access to clean drinking water. To address this pressing issue, we
          present a platform that offers a simple and efficient solution, aiming to tackle this problem and promote a better
          quality of life for all.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="space-y-4">
          <Image
            src="/placeholder.svg"
            alt="Water source location 1"
            width={400}
            height={300}
            className="w-full rounded-lg"
          />
          <h2 className="text-xl font-bold text-center">Place 1</h2>
        </div>
        <div className="space-y-4">
          <Image
            src="/placeholder.svg"
            alt="Water source location 2"
            width={400}
            height={300}
            className="w-full rounded-lg"
          />
          <h2 className="text-xl font-bold text-center">Place 2</h2>
        </div>
        <div className="space-y-4">
          <Image
            src="/placeholder.svg"
            alt="Water source location 3"
            width={400}
            height={300}
            className="w-full rounded-lg"
          />
          <h2 className="text-xl font-bold text-center">Place 3</h2>
        </div>
      </div>
    </div>
  )
}

