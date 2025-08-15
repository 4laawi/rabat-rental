import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-neutral-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex flex-col leading-none">
            <span className="tracking-[0.08em]" style={{ fontFamily: "var(--font-logo)" }}>RABAT RENTALS</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-300">Location Voiture</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-200">
          <Link href="/#accueil" className="hover:text-white">Accueil</Link>
          <Link href="/#voitures" className="hover:text-white">Nos Voitures</Link>
          <Link href="/#reservations" className="hover:text-white">Réservations</Link>
          <Link href="/#conditions" className="hover:text-white">Conditions</Link>
          <Link href="/#contact" className="hover:text-white">Contact</Link>
        </nav>
        <div className="hidden md:block">
          <Button className="bg-amber-500 text-black hover:bg-amber-600">Réserver</Button>
        </div>
      </div>
    </header>
  )
}


