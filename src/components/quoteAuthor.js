import { Satisfy } from 'next/font/google'

const satisfy = Satisfy({ weight: '400', subsets: ['latin'] })

export default function QuoteAuthor({ color }) {
  return (
    <div
      className={`quote-author flex justify-end transition ease-in-out duration-[2000ms]`}
    >
      -
      <span
        id="quote-author"
        className={`text-l before:ml-1 ${satisfy.className}`}
      ></span>
      <style jsx>{`
        .quote-author {
          color: ${color};
        }
      `}</style>
    </div>
  )
}
