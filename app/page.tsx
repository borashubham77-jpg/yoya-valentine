"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const playfulMessages = [
  "Are you sure?",
  "Don't be shy...",
  "Come on, it'll be fun!",
  "I already picked the cutest outfit!",
  "This button is getting tired...",
  "One date won't hurt!",
  "Pretty please?",
  "You're breaking my heart...",
  "Just one little yes?",
  "I'll be the best valentine ever!",
  "Please please please?",
  "I won't give up on you!",
  "The yes button is right there...",
  "My heart can't take this!",
  "You know you want to say yes!",
]

export default function ValentinePage() {
  const [yesClicked, setYesClicked] = useState(false)
  const [noClickCount, setNoClickCount] = useState(0)
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 })
  const noButtonRef = useRef<HTMLButtonElement>(null)

  const yesScale = 1 + noClickCount * 0.2
  const yesSize = Math.min(yesScale, 3)

  const handleNoClick = () => {
    setNoClickCount((prev) => prev + 1)
    const maxX = 120
    const maxY = 80
    setNoPosition({
      x: (Math.random() - 0.5) * maxX,
      y: (Math.random() - 0.5) * maxY,
    })
  }

  const handleYesClick = () => {
    setYesClicked(true)
  }

  const currentMessage = playfulMessages[Math.min(noClickCount - 1, playfulMessages.length - 1)]

  return (
    <div className="fixed inset-0 w-full h-full bg-gradient-to-b from-pink-100 via-rose-50 to-pink-100 overflow-hidden">
      <FloatingHearts />
      
      <div className="absolute inset-0 flex items-center justify-center">
        <AnimatePresence mode="wait">
          {!yesClicked ? (
            <motion.div
              key="question"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex flex-col items-center text-center px-6"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="mb-6"
              >
                <CuteCat />
              </motion.div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-rose-500 mb-8 text-balance">
                Will you be my Valentine?
              </h1>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
                <motion.button
                  onClick={handleYesClick}
                  animate={{ scale: yesSize }}
                  whileHover={{ scale: yesSize * 1.05 }}
                  whileTap={{ scale: yesSize * 0.95 }}
                  className="px-10 py-5 sm:px-14 sm:py-6 bg-rose-400 hover:bg-rose-500 text-white font-bold rounded-full shadow-xl text-2xl sm:text-3xl"
                >
                  Yes
                </motion.button>

                <motion.button
                  ref={noButtonRef}
                  onClick={handleNoClick}
                  animate={{
                    x: noPosition.x,
                    y: noPosition.y,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  whileHover={{ scale: 0.95 }}
                  whileTap={{ rotate: [0, -5, 5, -5, 0], transition: { duration: 0.4 } }}
                  className="px-10 py-5 sm:px-14 sm:py-6 bg-purple-200 hover:bg-purple-300 text-gray-600 font-bold rounded-full shadow-xl text-2xl sm:text-3xl"
                >
                  No
                </motion.button>
              </div>

              {noClickCount > 0 && (
                <motion.p
                  key={noClickCount}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-rose-400 text-xl sm:text-2xl mt-8 font-medium"
                >
                  {currentMessage}
                </motion.p>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="celebration"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center text-center px-6"
            >
              <Celebration />

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-rose-500 mt-6 mb-4 text-balance">
                Yay! I knew you'd say yes!
              </h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-xl sm:text-2xl text-rose-400"
              >
                You just made me the happiest!
              </motion.p>

              <Confetti />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

function CuteCat() {
  return (
    <svg width="140" height="140" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="60" cy="65" rx="40" ry="35" fill="#FFE4E1" />
      <path d="M25 45 L35 20 L50 40 Z" fill="#FFE4E1" />
      <path d="M95 45 L85 20 L70 40 Z" fill="#FFE4E1" />
      <path d="M30 42 L37 25 L47 40 Z" fill="#FFB6C1" />
      <path d="M90 42 L83 25 L73 40 Z" fill="#FFB6C1" />
      <ellipse cx="45" cy="60" rx="8" ry="10" fill="#2D2D2D" />
      <ellipse cx="75" cy="60" rx="8" ry="10" fill="#2D2D2D" />
      <circle cx="47" cy="57" r="3" fill="white" />
      <circle cx="77" cy="57" r="3" fill="white" />
      <ellipse cx="60" cy="72" rx="4" ry="3" fill="#FFB6C1" />
      <path d="M55 78 Q60 83 65 78" stroke="#2D2D2D" strokeWidth="2" fill="none" strokeLinecap="round" />
      <line x1="20" y1="65" x2="38" y2="68" stroke="#2D2D2D" strokeWidth="1.5" />
      <line x1="20" y1="72" x2="38" y2="72" stroke="#2D2D2D" strokeWidth="1.5" />
      <line x1="82" y1="68" x2="100" y2="65" stroke="#2D2D2D" strokeWidth="1.5" />
      <line x1="82" y1="72" x2="100" y2="72" stroke="#2D2D2D" strokeWidth="1.5" />
      <ellipse cx="35" cy="73" rx="6" ry="4" fill="#FFB6C1" opacity="0.5" />
      <ellipse cx="85" cy="73" rx="6" ry="4" fill="#FFB6C1" opacity="0.5" />
    </svg>
  )
}

function HappyCat() {
  return (
    <svg width="180" height="180" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="60" cy="65" rx="40" ry="35" fill="#FFE4E1" />
      <path d="M25 45 L35 20 L50 40 Z" fill="#FFE4E1" />
      <path d="M95 45 L85 20 L70 40 Z" fill="#FFE4E1" />
      <path d="M30 42 L37 25 L47 40 Z" fill="#FFB6C1" />
      <path d="M90 42 L83 25 L73 40 Z" fill="#FFB6C1" />
      <path d="M38 58 Q45 52 52 58" stroke="#2D2D2D" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M68 58 Q75 52 82 58" stroke="#2D2D2D" strokeWidth="3" fill="none" strokeLinecap="round" />
      <ellipse cx="60" cy="72" rx="4" ry="3" fill="#FFB6C1" />
      <path d="M48 78 Q60 92 72 78" stroke="#2D2D2D" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <line x1="20" y1="65" x2="38" y2="68" stroke="#2D2D2D" strokeWidth="1.5" />
      <line x1="20" y1="72" x2="38" y2="72" stroke="#2D2D2D" strokeWidth="1.5" />
      <line x1="82" y1="68" x2="100" y2="65" stroke="#2D2D2D" strokeWidth="1.5" />
      <line x1="82" y1="72" x2="100" y2="72" stroke="#2D2D2D" strokeWidth="1.5" />
      <ellipse cx="35" cy="73" rx="8" ry="5" fill="#FFB6C1" opacity="0.6" />
      <ellipse cx="85" cy="73" rx="8" ry="5" fill="#FFB6C1" opacity="0.6" />
    </svg>
  )
}

function Celebration() {
  return (
    <motion.div className="relative">
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, -5, 5, 0],
        }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <HappyCat />
      </motion.div>

      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-3xl"
          initial={{
            x: 90,
            y: 90,
            opacity: 0,
            scale: 0,
          }}
          animate={{
            x: 90 + Math.cos((i * Math.PI) / 3) * 100,
            y: 90 + Math.sin((i * Math.PI) / 3) * 100 - 20,
            opacity: [0, 1, 0],
            scale: [0, 1.2, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.3,
          }}
        >
          {i % 2 === 0 ? "💖" : "✨"}
        </motion.div>
      ))}
    </motion.div>
  )
}

function FloatingHearts() {
  const [hearts, setHearts] = useState<Array<{id: number; x: number; delay: number; duration: number; size: number}>>([])

  useEffect(() => {
    setHearts([...Array(12)].map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 5 + Math.random() * 5,
      size: 12 + Math.random() * 16,
    })))
  }, [])

  if (hearts.length === 0) return null

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute text-rose-200"
          style={{
            left: `${heart.x}%`,
            fontSize: heart.size,
          }}
          initial={{ y: "100vh", opacity: 0 }}
          animate={{
            y: "-20vh",
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: heart.duration,
            repeat: Infinity,
            delay: heart.delay,
            ease: "linear",
          }}
        >
          ♥
        </motion.div>
      ))}
    </div>
  )
}

function Confetti() {
  const [confetti, setConfetti] = useState<Array<{id: number; x: number; color: string; delay: number}>>([])

  useEffect(() => {
    const colors = ["#FFB6C1", "#FF69B4", "#FFC0CB", "#E6E6FA", "#FFD700"]
    setConfetti([...Array(30)].map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: Math.random() * 0.5,
    })))
  }, [])

  if (confetti.length === 0) return null

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {confetti.map((piece) => (
        <motion.div
          key={piece.id}
          className="absolute w-3 h-3 rounded-sm"
          style={{
            left: `${piece.x}%`,
            backgroundColor: piece.color,
          }}
          initial={{ y: -20, rotate: 0, opacity: 1 }}
          animate={{
            y: "100vh",
            rotate: 360 * 3,
            opacity: [1, 1, 0],
          }}
          transition={{
            duration: 3,
            delay: piece.delay,
            ease: "easeIn",
          }}
        />
      ))}
    </div>
  )
}
