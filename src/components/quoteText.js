'use client'

export default function QuoteText({ color }) {
  return (
    <div
      className={`quote-text max-h-[200px] flex justify-center transition ease-in-out duration-[2000ms]`}
    >
      <p className="text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          className="quote w-7 relative -top-2 inline fill-gray-700 transition ease-in-out duration-[2000ms]"
        >
          <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" />
        </svg>
        <span
          id="quote"
          className="before:ml-3 text-2xl transition ease-in-out duration-[2000ms]"
        ></span>
      </p>
      <style jsx>{`
        svg {
          fill: ${color};
        }
        #quote {
          color: ${color};
        }
      `}</style>
    </div>
  )
}
