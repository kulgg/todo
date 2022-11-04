import Link from "next/link";
import { LinkProps } from "./RedLink";

export default function GreyLink({ text, href }: LinkProps) {
  return (
    <Link href={href}>
      <span className="bg-zinc-800 px-[18px] py-[10px] rounded text-lg hover:bg-neutral-700 active:scale-97">
        {text}
      </span>
    </Link>
  );
}
