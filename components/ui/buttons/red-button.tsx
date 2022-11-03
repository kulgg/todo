export interface ButtonProps {
  text: string;
  handleClick: () => void;
}

export default function RedButton({ text, handleClick }: ButtonProps) {
  return (
    <button
      className="bg-red-500 text-white px-3 py-[6px] rounded text-sm hover:bg-red-600 active:scale-97"
      onClick={handleClick}
    >
      {text}
    </button>
  );
}
