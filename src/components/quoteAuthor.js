export default function QuoteAuthor({ color, animate }) {
  return (
    <div
      className={`quote-author flex justify-end transition ease-in-out duration-[2000ms] ${
        animate ? 'fadeIn' : ''
      }`}
    >
      -
      <style jsx>{`
        .quote-author {
          color: ${color};
        }
      `}</style>
    </div>
  )
}
