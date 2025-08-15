import Link from "next/link"

export function TopBar() {
  return (
    <div className="hidden md:block bg-neutral-950 text-neutral-300 text-xs">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-9 flex items-center justify-between">
        <p className="truncate">
          MOUNTED CAR · 10 Angle Avenue Abdelmoumen et Rue Sebta, Mag N24, Hassan, 10000 Rabat.
        </p>
        <div className="flex items-center gap-4">
          <Link href="tel:+212661372537" className="hover:text-white">+212 6 61 37 25 37</Link>
          <span className="opacity-50">/</span>
          <Link href="tel:+2126161700" className="hover:text-white">+212 6 17 16 17 00</Link>
          <span className="opacity-50">/</span>
          <Link href="tel:+212537700294" className="hover:text-white">+212 5 37 70 02 94</Link>
        </div>
      </div>
    </div>
  )
}


