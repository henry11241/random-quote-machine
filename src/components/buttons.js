export default function Buttons({color, onClick}) {
  return (
    <div className="buttons flex flex-row">
      <button
        className={`pt-[8px] pb-[6px] px-[18px] rounded bg-gray-700 text-white ml-auto hover:opacity-75 transition ease-in-out duration-[2000ms]`}
        onClick={onClick}
        id="btn"
      >
        New quote
      </button>
      <style jsx>{`
        button {
          background-color: ${color};
        }
      `}</style>
    </div>
  )
}
