import Link from "next/link"

export default function Navigation() {
  return (
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
  )
}

