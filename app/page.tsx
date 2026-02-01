"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function ValentinePage() {
  const [yesClicked, setYesClicked] = useState(false)
  const [noClickCount, setNoClickCount] = useState(0)
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 })
  const noButtonRef = useRef<HTMLButtonElement>(null)

  const yesScale = 1 + noClickCount * 0.15
  const yesSize = Math.min(yesScale, 2.5)

  const handleNoClick = () => {
    setNoClickCount((prev) => prev + 1)
    // Move the No button to a random position
    const maxX = 100
    const maxY = 50
    setNoPosition({
      x: (Math.random() - 0.5) * maxX,
      y: (Math.random() - 0.5) * maxY,
    })
  }

  const handleYesClick = () => {
    setYesClicked(true)
  }

  return (
    <main className="h-screen w-screen bg-gradient-to-b from-pink-100 via-rose-50 to-pink-100 flex items-center justify-center overflow-hidden">
      {/* Floating hearts background */}
      <FloatingHearts />

      <AnimatePresence mode="wait">
        {!yesClicked ? (
          <motion.div
            key="question"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="flex flex-col items-center justify-center z-10 text-center px-4"
          >
            {/* Cute cat illustration */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="text-8xl"
            >
              <CuteCat />
            </motion.div>

            {/* Main question */}
            <motion.h1
              className="text-3xl md:text-5xl font-bold text-rose-500 text-center text-balance"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Will you be my Valentine?
            </motion.h1>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-4">
              <motion.button
                onClick={handleYesClick}
                animate={{ scale: yesSize }}
                whileHover={{ scale: yesSize * 1.05 }}
                whileTap={{ scale: yesSize * 0.95 }}
                className="px-16 py-6 bg-rose-400 hover:bg-rose-500 text-white font-bold rounded-full shadow-xl transition-colors text-2xl md:text-3xl min-w-[200px] min-h-[70px]"
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
                className="px-16 py-6 text-gray-600 font-bold rounded-full shadow-xl transition-colors text-2xl md:text-3xl min-w-[200px] min-h-[70px]"
                style={{ backgroundColor: "#E6E6FA" }}
              >
                No
              </motion.button>
            </div>

            {noClickCount > 0 && (
              <motion.p
                key={noClickCount}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-rose-400 text-lg md:text-xl mt-4 font-medium text-center"
              >
                {noClickCount === 1 && "Are you sure?"}
                {noClickCount === 2 && "Really? Think again..."}
                {noClickCount === 3 && "Pretty please?"}
                {noClickCount === 4 && "Come on, don't be shy!"}
                {noClickCount === 5 && "I promise it'll be fun!"}
                {noClickCount === 6 && "You're breaking my heart..."}
                {noClickCount === 7 && "Just one little yes?"}
                {noClickCount === 8 && "I'll be the best valentine ever!"}
                {noClickCount === 9 && "Please please please?"}
                {noClickCount === 10 && "I won't give up on you!"}
                {noClickCount === 11 && "The yes button is right there..."}
                {noClickCount === 12 && "My heart can't take this!"}
                {noClickCount === 13 && "You know you want to say yes!"}
                {noClickCount === 14 && "I believe in us!"}
                {noClickCount >= 15 && "Okay okay, just click Yes already!"}
              </motion.p>
            )}
          </motion.div>
        ) : (
          <motion.div
            key="celebration"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center z-10 text-center px-4"
          >
            {/* Celebration animation */}
            <Celebration />

            {/* Happy message */}
            <motion.h1
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              className="text-3xl md:text-5xl font-bold text-rose-500 text-center text-balance"
            >
              Yay! I knew you'd say yes
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xl text-rose-400"
            >
              You just made me the happiest!
            </motion.p>

            {/* Confetti */}
            <Confetti />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}

function CuteCat() {
  return (
    <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Cat face */}
      <ellipse cx="60" cy="65" rx="40" ry="35" fill="#FFE4E1" />
      {/* Ears */}
      <path d="M25 45 L35 20 L50 40 Z" fill="#FFE4E1" />
      <path d="M95 45 L85 20 L70 40 Z" fill="#FFE4E1" />
      <path d="M30 42 L37 25 L47 40 Z" fill="#FFB6C1" />
      <path d="M90 42 L83 25 L73 40 Z" fill="#FFB6C1" />
      {/* Eyes */}
      <ellipse cx="45" cy="60" rx="8" ry="10" fill="#2D2D2D" />
      <ellipse cx="75" cy="60" rx="8" ry="10" fill="#2D2D2D" />
      <circle cx="47" cy="57" r="3" fill="white" />
      <circle cx="77" cy="57" r="3" fill="white" />
      {/* Nose */}
      <ellipse cx="60" cy="72" rx="4" ry="3" fill="#FFB6C1" />
      {/* Mouth */}
      <path d="M55 78 Q60 83 65 78" stroke="#2D2D2D" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* Whiskers */}
      <line x1="20" y1="65" x2="38" y2="68" stroke="#2D2D2D" strokeWidth="1.5" />
      <line x1="20" y1="72" x2="38" y2="72" stroke="#2D2D2D" strokeWidth="1.5" />
      <line x1="82" y1="68" x2="100" y2="65" stroke="#2D2D2D" strokeWidth="1.5" />
      <line x1="82" y1="72" x2="100" y2="72" stroke="#2D2D2D" strokeWidth="1.5" />
      {/* Blush */}
      <ellipse cx="35" cy="73" rx="6" ry="4" fill="#FFB6C1" opacity="0.5" />
      <ellipse cx="85" cy="73" rx="6" ry="4" fill="#FFB6C1" opacity="0.5" />
    </svg>
  )
}

function HappyCat() {
  return (
    <svg width="150" height="150" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Cat face */}
      <ellipse cx="60" cy="65" rx="40" ry="35" fill="#FFE4E1" />
      {/* Ears */}
      <path d="M25 45 L35 20 L50 40 Z" fill="#FFE4E1" />
      <path d="M95 45 L85 20 L70 40 Z" fill="#FFE4E1" />
      <path d="M30 42 L37 25 L47 40 Z" fill="#FFB6C1" />
      <path d="M90 42 L83 25 L73 40 Z" fill="#FFB6C1" />
      {/* Happy closed eyes */}
      <path d="M38 58 Q45 52 52 58" stroke="#2D2D2D" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M68 58 Q75 52 82 58" stroke="#2D2D2D" strokeWidth="3" fill="none" strokeLinecap="round" />
      {/* Nose */}
      <ellipse cx="60" cy="72" rx="4" ry="3" fill="#FFB6C1" />
      {/* Big smile */}
      <path d="M48 78 Q60 92 72 78" stroke="#2D2D2D" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {/* Whiskers */}
      <line x1="20" y1="65" x2="38" y2="68" stroke="#2D2D2D" strokeWidth="1.5" />
      <line x1="20" y1="72" x2="38" y2="72" stroke="#2D2D2D" strokeWidth="1.5" />
      <line x1="82" y1="68" x2="100" y2="65" stroke="#2D2D2D" strokeWidth="1.5" />
      <line x1="82" y1="72" x2="100" y2="72" stroke="#2D2D2D" strokeWidth="1.5" />
      {/* Blush */}
      <ellipse cx="35" cy="73" rx="8" ry="5" fill="#FFB6C1" opacity="0.6" />
      <ellipse cx="85" cy="73" rx="8" ry="5" fill="#FFB6C1" opacity="0.6" />
      {/* Hearts around */}
      <text x="10" y="30" fontSize="16">💕</text>
      <text x="95" y="25" fontSize="16">💖</text>
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

      {/* Floating hearts around the cat */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-2xl"
          initial={{
            x: 75,
            y: 75,
            opacity: 0,
            scale: 0,
          }}
          animate={{
            x: 75 + Math.cos((i * Math.PI) / 3) * 80,
            y: 75 + Math.sin((i * Math.PI) / 3) * 80 - 20,
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
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
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
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
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
