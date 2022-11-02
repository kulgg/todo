import Link from "next/link";
import React from "react";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-full">
      <header className="h-11 bg-neutral-800 flex flex-col justify-center">
        <div className="flex max-w-[1440px] justify-between px-1 md:px-4">
          <div className="flex gap-10">
            <nav>
              <Link href="/" className="flex items-center space-x-2">
                <span className="font-bold">ToDo</span>
              </Link>
            </nav>
          </div>
          <div></div>
        </div>
      </header>
      <main className="container mx-auto px-2">{children}</main>
    </div>
  );
}
