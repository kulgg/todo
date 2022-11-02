import "styles/globals.css";

export default function RootLayout({ children }: { children: JSX.Element }) {
  return (
    <html lang="en">
      <head />
      <body className="bg-stone-900 text-gray-200">{children}</body>
    </html>
  );
}
