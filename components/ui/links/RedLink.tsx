import Link from "next/link";

export interface LinkProps {
  text: string;
  href: string;
}

export default function RedLink({ text, href }: LinkProps) {
  return (
    <Link href={href}>
      <span className="bg-red-500 text-white px-[18px] py-[10px] rounded-lg text-md hover:bg-red-600 active:scale-97">
        {text}
      </span>
    </Link>
  );
}
