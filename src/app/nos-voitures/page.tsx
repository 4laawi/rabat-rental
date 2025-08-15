import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import path from "path"
import { promises as fs } from "fs"

type CarTier = "economy" | "compact" | "suv" | "premium" | "luxury" | "van" | "minibus"

interface DiscoveredCar {
  id: string
  name: string
  image: string
  tier: CarTier
  pricePerDayMad: number
  equipment: string
}

function inferTierAndPrice(nameLower: string): { tier: CarTier; price: number } {
  const luxury = ["range rover", "classe s", "s-class", "mercedes class s", "touareg", "classe e", "class e", "508 "]
  const suv = ["tucson", "duster", "santa fe", "range rover", "2008", "3008", "c4 cactus", "c4", "evoque"]
  const compact = ["golf", "megane", "308", "208", "c3", "polo", "ibiza", "jetta", "symbol", "fluence", "classe c", "serie 3", "serie3"]
  const economy = ["clio", "i10", "picanto", "fiat 500", "logan", "sandero", "fiesta"]
  const van = ["partner", "doblo", "express"]
  const minibus = ["minibus", "bus", "h1"]

  if (luxury.some(k => nameLower.includes(k))) return { tier: "luxury", price: 1200 }
  if (minibus.some(k => nameLower.includes(k))) return { tier: "minibus", price: 900 }
  if (van.some(k => nameLower.includes(k))) return { tier: "van", price: 600 }
  if (suv.some(k => nameLower.includes(k))) return { tier: "suv", price: 500 }
  if (compact.some(k => nameLower.includes(k))) return { tier: "compact", price: 420 }
  if (economy.some(k => nameLower.includes(k))) return { tier: "economy", price: 300 }
  return { tier: "compact", price: 420 }
}

function prettifyName(filename: string): string {
  const base = filename.replace(/\.[^.]+$/, "")
  return base
    .replace(/[-_]+/g, " ")
    .replace(/mounted\s*car|location|voiture|rabat|dies|ess|auto/gi, "")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b([a-z])(\w*)/gi, (_, a: string, b: string) => a.toUpperCase() + b.toLowerCase())
}

async function scanCarsFromPublic(): Promise<DiscoveredCar[]> {
  const dir = path.join(process.cwd(), "public", "cars")
  const entries = await fs.readdir(dir)
  const images = entries.filter((f) => /\.(jpg|jpeg|png|webp)$/i.test(f))

  const cars: DiscoveredCar[] = images.map((file) => {
    const namePretty = prettifyName(file)
    const { tier, price } = inferTierAndPrice(namePretty.toLowerCase())
    const equipmentByTier: Record<CarTier, string> = {
      luxury: "Diesel • Automatique • GPS • Climatisation • 5 places • 4 grandes valises",
      premium: "Diesel • Automatique • GPS • Climatisation • 5 places",
      suv: "Diesel • Automatique • GPS • Climatisation • 5 places • 3 grandes valises",
      compact: "Essence • Automatique • GPS • Climatisation • 5 places • 2 grandes valises",
      economy: "Essence • Manuel • Climatisation • 5 places",
      van: "Diesel • Manuel • 2-3 places • Grand coffre",
      minibus: "Diesel • Manuel • 9-17 places • Climatisation",
    }
    return {
      id: namePretty.toLowerCase().replace(/\s+/g, "-"),
      name: namePretty,
      image: `/cars/${file}`,
      tier,
      pricePerDayMad: price,
      equipment: equipmentByTier[tier],
    }
  })

  cars.sort((a, b) => a.name.localeCompare(b.name))
  return cars
}

export default async function NosVoituresPage() {
  const discovered = await scanCarsFromPublic()
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-end justify-between gap-4">
        <h1 className="text-3xl font-semibold">Nos Voitures</h1>
        <Link href="/" className="text-sm underline underline-offset-4">Retour</Link>
      </div>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {discovered.map((car) => (
          <Card key={car.id} className="overflow-hidden">
            <div className="relative h-48 w-full">
              <Image src={car.image} alt={car.name} fill className="object-cover" />
            </div>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">{car.name}</CardTitle>
              <CardDescription className="line-clamp-2">{car.equipment}</CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-sm">
                <span className="text-2xl font-semibold">{car.pricePerDayMad} MAD</span>
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
  )
}


