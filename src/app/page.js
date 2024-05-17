'use client'

import Buttons from '@/components/buttons'
import QuoteAuthor from '@/components/quoteAuthor'
import QuoteText from '@/components/quoteText'
import { useEffect, useState } from 'react'

export default function Home() {
  const [color, setColor] = useState('#374151')
  const [quote, setQuote] = useState("")
  
  const calcLuminance = (hex) => {
    const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    const colors = [parseInt(m[1], 16), parseInt(m[2], 16), parseInt(m[3], 16)]
    const [r, g, b] = colors.map((c) => {
      const r = c / 255.0
      if (r <= 0.03928) {
        return r / 12.92
      } else {
        return Math.pow((r + 0.055) / 1.055, 2.4)
      }
    })
    return 0.2126 * r + 0.7152 * g + 0.0722 * b
  }

  const handleClick = () => {
    let letters = '0123456789ABCDEF'
    let color = '#'
    do {
      color = '#'
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
      }
    } while (calcLuminance(color) >= 0.179)
    setColor(color)
    fadeIn()
    getRandomQuote()
  }

  const fadeIn = () => {
    const quoteText = document.querySelector('.quote-text')
    const quoteAuthor = document.querySelector('.quote-author')
    quoteText.classList.remove('fadeIn')
    quoteAuthor.classList.remove('fadeIn')
    requestAnimationFrame((time) => {
      requestAnimationFrame((time) => {
        quoteText.classList.add('fadeIn')
        quoteAuthor.classList.add('fadeIn')
      })
    })
  }

  const getRandomQuote = async () => {
    try {
      const res = await fetch('https://api.quotable.io/quotes/random')
      const [data] = await res.json()
      const quote = document.getElementById('quote')
      const quoteAuthor = document.getElementById('quote-author')
      const { content, author } = data
      quote.innerText = content
      quoteAuthor.innerText = author
      setQuote(`"${content}" ${author}`)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fadeIn()
    getRandomQuote()
  }, [])

  return (
    <main
      className={`flex flex-col min-h-screen items-center justify-center bg-gray-700 transition ease-in-out duration-[2000ms]`}
    >
      <div className="flex flex-col card bg-white min-h-[300px] w-[550px] px-[40px] py-[50px] rounded justify-between gap-8">
        <QuoteText color={color} />
        <QuoteAuthor color={color} />
        <Buttons color={color} onClick={handleClick} quote={quote} />
      </div>
      <style jsx>{`
        main {
          background-color: ${color};
        }
      `}</style>
    </main>
  )
}
