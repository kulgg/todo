import React from "react";
import AppHeader from "./AppHeader";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-full">
      <AppHeader />
      <main className="container mx-auto px-2 md:px-0">{children}</main>
    </div>
  );
}
