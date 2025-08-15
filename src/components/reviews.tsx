import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"

type Review = {
  author: string
  rating: number
  text: string
  date: string
}

const sampleReviews: Review[] = [
  {
    author: "Yassine B.",
    rating: 5,
    text:
      "Service impeccable et véhicule en parfait état. Retrait et retour rapides, je recommande.",
    date: "Mai 2025",
  },
  {
    author: "Sara M.",
    rating: 5,
    text:
      "Très bon rapport qualité/prix. Équipe professionnelle et disponible 24/7.",
    date: "Avr. 2025",
  },
  {
    author: "Amine K.",
    rating: 4,
    text:
      "Réservation simple, voiture propre et récente. Je relouerai sans hésiter.",
    date: "Mars 2025",
  },
]

function Stars({ rating, size = 16 }: { rating: number; size?: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`Note ${rating} sur 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={i < rating ? `text-amber-400` : `text-amber-300`}
          style={{ width: size, height: size }}
          fill={i < rating ? "#f59e0b" : "none"}
        />
      ))}
    </div>
  )
}

export function ReviewsSection({ googleUrl, rating = 4.8, count = 176 }: { googleUrl: string; rating?: number; count?: number }) {
  const reviews = sampleReviews
  return (
    <section id="reviews" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6 flex-wrap">
          <h2 className="text-2xl font-semibold">Avis de nos clients</h2>
          <div className="flex items-center gap-3">
            <span className="text-2xl font-semibold">{rating.toFixed(1)}</span>
            <Stars rating={Math.round(rating)} size={18} />
            <span className="text-sm text-muted-foreground">({count})</span>
            <Button asChild className="bg-amber-500 text-black hover:bg-amber-600">
              <Link href={googleUrl} target="_blank" rel="noopener noreferrer">Voir les {count} avis</Link>
            </Button>
          </div>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, idx) => (
            <Card key={idx} className="rounded-xl border shadow-sm transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md">
              <CardHeader>
                <CardTitle className="text-base flex items-center justify-between gap-3">
                  <span className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 text-neutral-700 text-sm font-medium">
                      {r.author.split(" ")[0][0]}
                    </span>
                    <span>{r.author}</span>
                  </span>
                  <Stars rating={r.rating} />
                </CardTitle>
                <CardDescription>{r.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-6 text-muted-foreground">{r.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}


