"use client"

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '/#accueil', label: 'Accueil' },
  { href: '/#voitures', label: 'Nos Voitures' },
  { href: '/#reservations', label: 'Réservations' },
  { href: '/#conditions', label: 'Conditions' },
  { href: '/#contact', label: 'Contact' },
]

export function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const menuVariants = {
    hidden: { 
      opacity: 0, 
      x: '100%',
      transition: {
        duration: 0.3,
        ease: 'easeInOut'
      }
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut'
      }
    }
  }

  const hamburgerVariants = {
    closed: { 
      rotate: 0,
      transition: { duration: 0.3 }
    },
    open: { 
      rotate: 180,
      transition: { duration: 0.3 }
    }
  }

  return (
    <div className="md:hidden">
      {/* Hamburger Button */}
      <motion.button
        className="fixed top-4 right-4 z-50 bg-neutral-900 text-white p-2 rounded-full shadow-lg"
        onClick={toggleMenu}
        animate={isOpen ? 'open' : 'closed'}
        variants={hamburgerVariants}
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </motion.button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-6"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
          >
            {navLinks.map((link) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { 
                    delay: 0.1,
                    duration: 0.3 
                  }
                }}
                exit={{ 
                  opacity: 0, 
                  y: 20,
                  transition: { duration: 0.2 }
                }}
              >
                <Link 
                  href={link.href} 
                  className="text-2xl font-bold text-neutral-900 hover:text-primary transition-colors"
                  onClick={toggleMenu}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
