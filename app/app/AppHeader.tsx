import Link from "next/link";

export default function AppHeader() {
  return (
    <header className="h-11 bg-neutral-800 flex flex-col justify-center">
      <div className="flex max-w-[1440px] justify-between px-1 md:px-4">
        <div className="flex gap-1 items-center">
          <div className="ml-1 p-1 hover:bg-neutral-600 rounded-sm cursor-pointer">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 24 24"
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="none"
                strokeWidth={1.3}
                d="M2,19 L22,19 M2,5 L22,5 M2,12 L22,12"
              />
            </svg>
          </div>
          <div className="p-1 hover:bg-neutral-600 rounded-sm cursor-pointer">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 16 16"
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.36 1.37l6.36 5.8-.71.71L13 6.964v6.526l-.5.5h-3l-.5-.5v-3.5H7v3.5l-.5.5h-3l-.5-.5V6.972L2 7.88l-.71-.71 6.35-5.8h.72zM4 6.063v6.927h2v-3.5l.5-.5h3l.5.5v3.5h2V6.057L8 2.43 4 6.063z"
              />
            </svg>
          </div>
        </div>
        <div></div>
      </div>
    </header>
  );
}
