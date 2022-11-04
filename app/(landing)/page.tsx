import RedLink from "@/components/ui/links/RedLink";

export default function Home() {
  return (
    <div className="">
      <div className="pt-32 px-5 text-center max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-[55px] text-center tracking-wide font-medium">
          Organize your<br></br> work and life, finally.
        </h1>
        <div className="my-5 lg:my-7"></div>
        <h2 className="tracking-wide text-lg lg:text-xl text-center max-w-md mx-auto">
          Become focused, organized, and calm with ToDo. The world’s #1 task
          manager and to-do list app.
        </h2>
        <div className="my-8 lg:my-11"></div>
        <RedLink text="Start for free" href="/app" />
      </div>
    </div>
  );
}
