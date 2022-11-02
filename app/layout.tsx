import React from "react";
import "styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="bg-stone-900 text-gray-200 min-h-screen">
        {children}
      </body>
    </html>
  );
}
