import GreyLink from "@/components/ui/links/GreyLink";
import RedLink from "@/components/ui/links/RedLink";
import Link from "next/link";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <header className="h-12 md:h-16 px-4 flex flex-row items-center justify-between max-w-6xl mx-auto">
        <Link href="/">
          <svg
            stroke="currentColor"
            fill="currentColor"
            className="text-red-500 w-8 h-8"
            strokeWidth={0}
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z" />
          </svg>
        </Link>
        <div className="md:flex hidden items-center gap-3">
          <GreyLink href="/app" text="Log in" />
          <RedLink href="/app" text="Start for free" />
        </div>
        <div className="px-4 py-4 block md:hidden">
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth={2}
            className="w-6 h-6"
            strokeLinecap="round"
            strokeLinejoin="round"
            xmlns="http://www.w3.org/2000/svg"
          >
            <desc />
            <path stroke="none" fill="none" />
            <line x1={0} y1={10} x2={30} y2={10} />
            <line x1={0} y1={17} x2={30} y2={17} />
          </svg>
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
}
