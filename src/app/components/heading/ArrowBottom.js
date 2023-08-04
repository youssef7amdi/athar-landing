import Link from "next/link";

function ArrowBottom() {
  return (
    <div className="absolute z-10 inset-x-1/2 bottom-6 cursor-pointer hover:text-sky-500 animate-bounce text-white transition duration-300">
      <Link href="#offer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={3}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </Link>
    </div>
  );
}

export default ArrowBottom;
