import Link from "next/link";
import React from "react";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-full">
      <div className="bg-neutral-800">
        <header className="mx-auto flex max-w-[1440px] items-center justify-between py-3">
          <div className="flex gap-10">
            <nav>
              <Link href="/" className="flex items-center space-x-2">
                <span className="font-bold">ToDo</span>
              </Link>
            </nav>
          </div>
          <div></div>
        </header>
      </div>
      <main className="container mx-auto">{children}</main>
    </div>
  );
}
