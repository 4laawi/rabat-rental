export type CarTier = "economy" | "compact" | "suv" | "premium" | "luxury"

export interface CarInfo {
  id: string
  name: string
  image: string
  pricePerDayMad: number
  equipment: string
  tier: CarTier
}

export const allCars: CarInfo[] = [
  {
    id: "range-rover-evoque",
    name: "Range Rover Evoque",
    image: "/cars/Range-Rover-Evoque-mountedcar.jpg",
    pricePerDayMad: 1200,
    equipment: "Diesel • Automatique • GPS • Climatisation • 5 places • 3 grandes valises",
    tier: "luxury",
  },
  {
    id: "mercedes-s",
    name: "Mercedes Classe S",
    image: "/cars/mercedes-classe-s.jpg",
    pricePerDayMad: 1500,
    equipment: "Diesel • Automatique • GPS • Climatisation • 5 places • 4 grandes valises",
    tier: "luxury",
  },
  {
    id: "vw-touareg",
    name: "Volkswagen Touareg",
    image: "/cars/mountedcar-touareg.jpg",
    pricePerDayMad: 900,
    equipment: "Diesel • Automatique • GPS • Climatisation • 5 places • 4 grandes valises",
    tier: "luxury",
  },
  {
    id: "golf-8",
    name: "Volkswagen Golf 8",
    image: "/cars/GOLF-8-MOUNTED-CAR.jpg",
    pricePerDayMad: 450,
    equipment: "Essence • Automatique • GPS • Climatisation • 5 places • 2 grandes valises",
    tier: "compact",
  },
  {
    id: "clio-5",
    name: "Renault Clio 5",
    image: "/cars/clio5-automatique-mountedcar1.jpg",
    pricePerDayMad: 280,
    equipment: "Essence • Automatique • GPS • Climatisation • 5 places • 2 grandes valises",
    tier: "economy",
  },
  {
    id: "tucson",
    name: "Hyundai Tucson",
    image: "/cars/hyundai-tucsun-2024-mountedcar222.jpg",
    pricePerDayMad: 550,
    equipment: "Diesel • Automatique • GPS • Climatisation • 5 places • 3 grandes valises",
    tier: "suv",
  },
  {
    id: "peugeot-2008",
    name: "Peugeot 2008",
    image: "/cars/peugeot-2008-mountedcar.jpg",
    pricePerDayMad: 420,
    equipment: "Essence • Automatique • GPS • Climatisation • 5 places • 2 grandes valises",
    tier: "compact",
  },
  {
    id: "dacia-duster",
    name: "Dacia Duster",
    image: "/cars/dacia-duster.jpg",
    pricePerDayMad: 320,
    equipment: "Diesel • Manuel • GPS • Climatisation • 5 places • 2 grandes valises",
    tier: "suv",
  },
  {
    id: "citroen-c3",
    name: "Citroen C3",
    image: "/cars/mountedcar-c3.jpg",
    pricePerDayMad: 350,
    equipment: "Essence • Manuel • GPS • Climatisation • 5 places • 2 grandes valises",
    tier: "economy",
  },
  {
    id: "peugeot-308",
    name: "Peugeot 308",
    image: "/cars/peugeot-308-mountedcar-2025.jpg",
    pricePerDayMad: 480,
    equipment: "Essence • Automatique • GPS • Climatisation • 5 places • 2 grandes valises",
    tier: "compact",
  },
  {
    id: "hyundai-accent",
    name: "Hyundai Accent",
    image: "/cars/hyundai-accent-bva-mounted-car.jpg",
    pricePerDayMad: 280,
    equipment: "Essence • Automatique • GPS • Climatisation • 5 places • 2 grandes valises",
    tier: "economy",
  },
  {
    id: "peugeot-208",
    name: "Peugeot 208",
    image: "/cars/peugeot-208-mounted-car-2025.jpg",
    pricePerDayMad: 320,
    equipment: "Essence • Manuel • GPS • Climatisation • 5 places • 2 grandes valises",
    tier: "economy",
  },
  {
    id: "renault-megane",
    name: "Renault Megane",
    image: "/cars/renault-megane-berline.jpg",
    pricePerDayMad: 380,
    equipment: "Diesel • Manuel • GPS • Climatisation • 5 places • 2 grandes valises",
    tier: "compact",
  },
]

export const luxuryCars: CarInfo[] = allCars.filter((c) => c.tier === "luxury")

