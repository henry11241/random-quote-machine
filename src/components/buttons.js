import Link from 'next/link'
import TwitterIcon from '@/components/icons/twitterIcon'
import FacebookIcon from '@/components/icons/facebookIcon'

export default function Buttons({ color, onClick, quote }) {
  return (
    <div className="buttons flex flex-row gap-3">
      <Link
        href={`https://twitter.com/intent/tweet?text=${quote}&hashtags=quote`}
        title="Tweet this quote!"
        rel="noopener"
        target="_blank"
      >
        <div className="icon flex p-1.5 rounded bg-gray-700 text-white hover:opacity-75 transition-colors ease-in-out duration-[2000ms]">
          <TwitterIcon />
        </div>
      </Link>
      <Link
        href={`https://www.facebook.com/`}
        title="Share to facebook!"
        rel="noopener"
        target="_blank"
      >
        <div className="icon flex grow h-full w-10 px-2 py-1 justify-center rounded bg-gray-700 text-white hover:opacity-75 transition-colors ease-in-out duration-[2000ms]">
          <FacebookIcon />
        </div>
      </Link>
      <button
        className="pt-[8px] pb-[6px] px-[18px] rounded bg-gray-700 text-white ml-auto hover:opacity-75 transition-colors ease-in-out duration-[2000ms]"
        onClick={onClick}
        id="btn"
      >
        New quote
      </button>
      <style jsx>{`
        button {
          background-color: ${color};
        }
        .icon {
          background-color: ${color};
        }
      `}</style>
    </div>
  )
}
