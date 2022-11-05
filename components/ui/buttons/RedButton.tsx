import clsx from "clsx";

export interface ButtonProps {
  text: string;
  handleClick?: () => void;
  formId?: string;
  disabled?: boolean;
}

export default function RedButton({
  text,
  handleClick,
  formId,
  disabled,
}: ButtonProps) {
  return (
    <button
      className={clsx("bg-red-500 text-white px-3 py-[6px] rounded text-sm ", {
        "bg-opacity-60 opacity-60 cursor-not-allowed": disabled,
        "hover:bg-red-600 active:scale-97": !disabled,
      })}
      onClick={handleClick}
      form={formId}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
