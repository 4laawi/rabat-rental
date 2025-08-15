import { Award, ShieldCheck, Medal } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

type Badge = {
  title: string
  subtitle: string
  icon: React.ComponentType<{ className?: string }>
  accent: string
}

const BADGES: Badge[] = [
  {
    title: "Best in Rabat 2025",
    subtitle: "Sélectionné pour l'excellence du service",
    icon: Award,
    accent: "from-amber-400 to-yellow-500",
  },
  {
    title: "Certified Agency",
    subtitle: "Agrément et conformité assurés",
    icon: ShieldCheck,
    accent: "from-emerald-400 to-teal-500",
  },
  {
    title: "Top Rated 4.8/5",
    subtitle: "Avis vérifiés par nos clients",
    icon: Medal,
    accent: "from-indigo-400 to-blue-500",
  },
]

export function TrustBadges() {
  return (
    <section className="py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl font-semibold">Certifications & Récompenses</h2>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BADGES.map(({ title, subtitle, icon: Icon, accent }) => (
            <Card
              key={title}
              className="relative overflow-hidden rounded-xl border bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/75 shadow-sm"
            >
              <CardContent className="p-6 flex items-start gap-4">
                <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-full ring-1 ring-black/5">
                  <span
                    className={`absolute inset-0 rounded-full bg-gradient-to-br ${accent} opacity-90`}
                  />
                  <Icon className="relative z-10 h-6 w-6 text-white" />
                </span>
                <div>
                  <p className="font-medium">{title}</p>
                  <p className="text-sm text-muted-foreground mt-1 leading-6">{subtitle}</p>
                </div>
              </CardContent>
              <div className="pointer-events-none absolute inset-0 rounded-xl [mask-image:radial-gradient(120%_60%_at_0%_0%,black,transparent)] bg-gradient-to-br from-black/5 to-transparent" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}


