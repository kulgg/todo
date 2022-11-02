import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <main className="">
        <Link href="/app" className="flex items-center space-x-2">
          <span className="font-bold text-4xl">App</span>
        </Link>
      </main>
    </div>
  );
}
