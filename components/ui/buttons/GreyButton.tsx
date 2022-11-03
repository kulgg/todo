import { ButtonProps } from "./RedButton";

export default function GreyButton({ text, handleClick }: ButtonProps) {
  return (
    <button
      className="bg-zinc-800 px-3 py-[6px] rounded text-sm hover:bg-neutral-700 active:scale-97"
      onClick={handleClick}
    >
      {text}
    </button>
  );
}
