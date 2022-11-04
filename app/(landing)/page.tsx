import RedLink from "@/components/ui/links/RedLink";

export default function Home() {
  return (
    <div className="">
      <div className="pt-32 px-5 mt-30 text-center">
        <h1 className="text-4xl text-center mx-5 tracking-wide font-medium">
          Organize your<br></br> work and life, finally.
        </h1>
        <div className="my-5"></div>
        <h2 className="tracking-wide text-lg text-center">
          Become focused, organized, and calm with ToDo. The world’s #1 task
          manager and to-do list app.
        </h2>
        <div className="my-8"></div>
        <RedLink text="Start for free" href="/app" />
      </div>
    </div>
  );
}
