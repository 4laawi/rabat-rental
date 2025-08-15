import { Navbar } from "@/components/navbar"
import { TopBar } from "@/components/topbar"

export default function NosVoituresLayout({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
    </div>
  )
}
