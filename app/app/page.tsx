import TodoList from "./TodoList";

export default function App() {
  return (
    <div>
      <div className="my-9"></div>
      <div className="flex gap-2 items-center">
        <h2 className="text-xl font-semibold">Today</h2>
        <div className="mt-[3px]">
          <span className="text-[12px] text-neutral-500">
            {new Date().toLocaleString("en-us", {
              weekday: "short",
              month: "short",
              day: "numeric",
            })}
          </span>
        </div>
      </div>
      <div className="my-14"></div>
      <hr className="border-stone-700 border-t-[1px]" />
      <TodoList />
    </div>
  );
}
