import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { TopBar } from "@/components/topbar"
import { CarCarousel } from "@/components/car-carousel"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ReviewsSection } from "@/components/reviews"
import { DotsBackground } from "@/components/dots-bg"

export default function Home() {
  return (
    <div className="min-h-dvh flex flex-col bg-white text-black">
      <TopBar />
      <Navbar />

      {/* Hero */}
      <section id="accueil" className="relative w-full flex-grow">
        <DotsBackground />
        <div className="w-full h-[50vh]">
          <CarCarousel />
        </div>
      </section>

      {/* Main two-column content */}
      <section id="voitures" className="py-8 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-end justify-between gap-4">
              <h2 className="text-2xl font-semibold">Location de voitures Rabat - Nos voitures</h2>
              <Link href="/nos-voitures" className="text-sm underline underline-offset-4">Voir tout</Link>
            </div>
            <div className="mt-6 grid sm:grid-cols-2 gap-6">
              {[
                {
                  name: "Volkswagen Golf 8",
                  price: 450,
                  img: "/cars/GOLF-8-MOUNTED-CAR.jpg",
                  equipment: "Essence • Automatique • GPS • Climatisation • 5 places • 2 grandes valises",
                },
                {
                  name: "Peugeot 508",
                  price: 600,
                  img: "/cars/PEUGEOT_508_NOIR_PERLA_NERA_BLACK.jpg",
                  equipment: "Diesel • Automatique • GPS • Climatisation • 5 places • 3 grandes valises",
                },
                {
                  name: "Mercedes Classe E",
                  price: 900,
                  img: "/cars/mercedes-class-e-2024-mountedcar2.jpg",
                  equipment: "Diesel • Automatique • GPS • Climatisation • 5 places • 4 grandes valises",
                },
                {
                  name: "Hyundai Accent BVA",
                  price: 280,
                  img: "/cars/hyundai-accent-bva-mounted-car.jpg",
                  equipment: "Essence • Automatique • GPS • Climatisation • 5 places • 2 grandes valises",
                },
              ].map((car) => (
                <Card key={car.name} className="overflow-hidden">
                  <div className="relative h-44 w-full">
                    <Image src={car.img} alt={car.name} fill className="object-cover" />
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{car.name}</CardTitle>
                    <CardDescription>{car.equipment}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm">
                      <span className="text-2xl font-semibold">{car.price} MAD</span>
                      <span className="text-muted-foreground"> / jour</span>
                    </p>
                  </CardContent>
                  <CardFooter className="gap-3">
                    <Button variant="outline">Détails</Button>
                    <Button className="bg-amber-500 hover:bg-amber-600 text-black">Réserver</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Réservation Rapide</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Date début</label>
                  <Input type="date" className="mt-1" />
                </div>
                <div>
                  <label className="text-sm font-medium">Date fin</label>
                  <Input type="date" className="mt-1" />
                </div>
                <div>
                  <label className="text-sm font-medium">Modèle de voiture</label>
                  <div className="mt-1">
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Sélectionnez un modèle" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="audi">Audi A4</SelectItem>
                        <SelectItem value="bmw">BMW Série 3</SelectItem>
                        <SelectItem value="mercedes">Mercedes Classe C</SelectItem>
                        <SelectItem value="dacia">Dacia Duster</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-amber-500 hover:bg-amber-600 text-black">
                  Réserver
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Qui sommes nous ?</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Rabat Rentals est une agence de location de voiture à Rabat, offrant un excellent rapport qualité/prix et un service fiable 24/7. Profitez de nos bons plans et réservez votre voiture en ligne.
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <div className="relative h-28 w-full">
                <Image src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop" alt="Promo" fill className="object-cover" />
              </div>
              <CardContent className="pt-4 text-sm">
                Découvrez notre parc de véhicules: citadines, SUV, luxe.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Assistance 24h/24</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <p className="text-muted-foreground">Appelez-nous</p>
                    <p className="font-semibold">+212 6 61 37 25 37</p>
                  </div>
                  <Button className="bg-amber-500 hover:bg-amber-600 text-black">Formulaire de contact</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <ReviewsSection googleUrl="https://www.google.com/search?sca_esv=1dfb77f5f82eed46&sxsrf=AE3TifN7FddGgsZRlS8pKPNsSAxhbDjnWw:1755138325921&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E3QMDOXEzIDFBLQG-sU12A2-R1XF68eHrahJElZ0Sg1egdCTDHJXEGBNftoGQMPB_2I-XyhZbzKOOCtRRHwuOU2NPGwn3sKW-Sgk9Fy57oDLrxR83g3toL3LOgzKABzdw6lOCcY%3D&q=MOUNTED+CAR+%7C+Agence+Location+Voiture+Rabat+Reviews&sa=X&ved=2ahUKEwie48rjn4mPAxWFTaQEHW_kH2YQ0bkNegQIJBAE&biw=1792&bih=1008&dpr=2" />

      {/* About */}
      <section id="conditions" className="py-12 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold font-serif">À propos de Rabat Rentals</h2>
          <p className="mt-4 text-muted-foreground max-w-3xl">
            Rabat Rentals est une agence premium de location de voiture basée à Rabat. Nous proposons une flotte soigneusement sélectionnée allant des citadines économiques aux berlines de luxe, avec un service client dédié pour une expérience sans souci.
          </p>
        </div>
      </section>

      {/* Conditions */}
      <section className="py-12" id="reservations">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold">Conditions</h2>
          <ul className="mt-4 list-disc pl-5 text-muted-foreground space-y-1">
            <li>Pièce d'identité et permis de conduire valides requis.</li>
            <li>Dépôt de garantie selon le modèle.</li>
            <li>Âge minimum: 21 ans.</li>
          </ul>
        </div>
      </section>

      {/* Assistance */}
      <section id="contact" className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h3 className="text-xl font-semibold">Assistance 24h/24</h3>
            <p className="mt-2 text-muted-foreground">Besoin d'aide ? Notre équipe est disponible en permanence.</p>
          </div>
          <Card>
            <CardContent className="py-6">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Appelez-nous</p>
                  <p className="font-semibold">+212 6 12 34 56 78 • +212 5 37 12 34 56</p>
                </div>
                <Button className="bg-amber-500 hover:bg-amber-600 text-black">Formulaire de contact</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} rabat rentals. Tous droits réservés.</p>
          <div className="flex items-center gap-4 opacity-80">
            <Link href="#" aria-label="Facebook" className="hover:opacity-100 transition-opacity">FB</Link>
            <Link href="#" aria-label="Instagram" className="hover:opacity-100 transition-opacity">IG</Link>
            <Link href="#" aria-label="X" className="hover:opacity-100 transition-opacity">X</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
