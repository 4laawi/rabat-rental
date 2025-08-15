"use client"

import { useState, useEffect, useRef, ReactNode } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface CarouselCar {
  name: string
  image: {
    desktop: string
    mobile: string
  }
  pricePerDayMad: number
  equipment: string
}

interface CarCarouselProps {
  overlayContent?: ReactNode
}

// Use the specific images the user provided in public/cars
const carouselCars: CarouselCar[] = [
  {
    name: "Range Rover Evoque",
    image: {
      desktop: "/cars/range.jpeg",
      mobile: "/cars/mobile/range-rover-mobile.jpg"
    },
    pricePerDayMad: 1200,
    equipment: "Diesel • Automatique • GPS • Climatisation • 5 places • 3 grandes valises",
  },
  {
    name: "Volkswagen Touareg",
    image: {
      desktop: "/cars/touareg.webp",
      mobile: "/cars/mobile/touareg-mobile.jpg"
    },
    pricePerDayMad: 900,
    equipment: "Diesel • Automatique • GPS • Climatisation • 5 places • 4 grandes valises",
  },
  {
    name: "Mercedes Classe S",
    image: {
      desktop: "/cars/class-s.jpg",
      mobile: "/cars/mobile/mercedes-s-mobile.jpg"
    },
    pricePerDayMad: 1500,
    equipment: "Diesel • Automatique • GPS • Climatisation • 5 places • 4 grandes valises",
  },
]

const CAPTION_ANIM_MS = 350
const CAPTION_DELAY_AFTER_SWITCH_MS = 1000
const AUTO_INTERVAL_MS = 10000 // 10 seconds between image changes

export function CarCarousel({ overlayContent }: CarCarouselProps) {
  const cars = carouselCars
  const [currentCar, setCurrentCar] = useState(0)
  const [nextCar, setNextCar] = useState(1)
  const [captionVisible, setCaptionVisible] = useState(true)
  const [isChanging, setIsChanging] = useState(false)
  const [imageTransition, setImageTransition] = useState(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const hideTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const showTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const clearTimers = () => {
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current)
      hideTimeoutRef.current = null
    }
    if (showTimeoutRef.current) {
      clearTimeout(showTimeoutRef.current)
      showTimeoutRef.current = null
    }
  }

  const clearIntervalRef = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }

  const startAuto = () => {
    clearIntervalRef()
    intervalRef.current = setInterval(() => {
      nextCarTransition()
    }, AUTO_INTERVAL_MS)
  }

  const nextCarTransition = () => {
    // Prevent multiple simultaneous changes
    if (isChanging) return

    setIsChanging(true)
    setImageTransition(true)
    
    // Slide caption down first
    setCaptionVisible(false)
    clearTimers()
    clearIntervalRef()

    hideTimeoutRef.current = setTimeout(() => {
      // Update car indices
      setCurrentCar((prev) => (prev + 1) % cars.length)
      setNextCar((prev) => (prev + 1) % cars.length)
      
      // Delay before sliding caption back up
      showTimeoutRef.current = setTimeout(() => {
        setCaptionVisible(true)
        setImageTransition(false)
        setIsChanging(false)
        startAuto()
      }, CAPTION_DELAY_AFTER_SWITCH_MS)
    }, CAPTION_ANIM_MS)
  }

  useEffect(() => {
    startAuto()
    return () => {
      clearIntervalRef()
      clearTimers()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const currentCarData = cars[currentCar]
  const nextCarData = cars[nextCar]

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div className="absolute inset-0">
        {/* Desktop Transition */}
        <div className="hidden md:block w-full h-full relative">
          <Image 
            src={currentCarData.image.desktop} 
            alt={currentCarData.name} 
            fill 
            priority 
            className={cn(
              "absolute inset-0 object-cover transition-opacity duration-[2000ms] ease-in-out",
              imageTransition ? "opacity-0" : "opacity-100"
            )}
          />
          <Image 
            src={nextCarData.image.desktop} 
            alt={nextCarData.name} 
            fill 
            priority 
            className={cn(
              "absolute inset-0 object-cover transition-opacity duration-[2000ms] ease-in-out",
              imageTransition ? "opacity-100" : "opacity-0"
            )}
          />
        </div>

        {/* Mobile Transition */}
        <div className="md:hidden w-full h-full relative">
          <Image 
            src={currentCarData.image.mobile} 
            alt={currentCarData.name} 
            fill 
            priority 
            className={cn(
              "absolute inset-0 object-cover transition-opacity duration-[2000ms] ease-in-out",
              imageTransition ? "opacity-0" : "opacity-100"
            )}
          />
          <Image 
            src={nextCarData.image.mobile} 
            alt={nextCarData.name} 
            fill 
            priority 
            className={cn(
              "absolute inset-0 object-cover transition-opacity duration-[2000ms] ease-in-out",
              imageTransition ? "opacity-100" : "opacity-0"
            )}
          />
          
          {/* Bottom information card */}
          <div className="absolute bottom-0 left-0 right-0 bg-black/80 text-white px-3 py-2">
            <h2 className="text-xs font-bold tracking-tight mb-0.5">
              AGENCE LOCATION DE VOITURE RABAT : {currentCarData.name.toUpperCase()}
            </h2>
            <p className="text-[10px] opacity-90 leading-tight">
              {currentCarData.equipment} · <span className="text-amber-400 font-semibold">{currentCarData.pricePerDayMad} MAD / JOUR</span>
            </p>
          </div>
        </div>
      </div>

      {/* Overlay content */}
      {overlayContent}

      {/* Bottom caption band with slide animation - Desktop only */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden hidden md:block">
        <div
          className={cn(
            "bg-black/80 px-4 py-3 sm:px-6 sm:py-4 transform transition-all duration-500 ease-in-out text-white",
            captionVisible 
              ? "translate-y-0 opacity-100" 
              : "translate-y-full opacity-0"
          )}
        >
          <h2 className="text-xs sm:text-sm font-bold tracking-wide">
            AGENCE LOCATION DE VOITURE RABAT : {currentCarData.name.toUpperCase()}
          </h2>
          <p className="mt-1 text-[10px] sm:text-xs opacity-90">
            {currentCarData.equipment} · <span className="text-amber-400 font-semibold">{currentCarData.pricePerDayMad} MAD / JOUR</span>
          </p>
        </div>
      </div>
    </div>
  )
}
