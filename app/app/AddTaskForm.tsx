import { Dispatch, SetStateAction, useEffect } from "react";

export default function AddTaskForm({
  setIsVisible,
}: {
  setIsVisible: Dispatch<SetStateAction<boolean>>;
}) {
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      switch (event.key) {
        case "Escape":
          setIsVisible(false);
          break;
      }
    }
    const keydownEventListener = addEventListener("keydown", handleKeyDown);
    return () => {
      removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div>
      <div className="w-full border-gray-600 border rounded-lg p-2">
        <input
          id="task-input"
          type="text"
          className="bg-stone-900 w-full outline-0 hover:outline-0 active:outline-0 text-sm"
          placeholder="Task name"
          autoFocus
          autoComplete="off"
        />
        <label htmlFor="task-input" className="cursor-text">
          <div className="h-16"></div>
        </label>
      </div>
      <div className="my-2"></div>
      <div className="flex justify-end items-center gap-3">
        <button
          className="bg-stone-800 px-3 py-[6px] rounded text-sm hover:bg-stone-700"
          onClick={() => setIsVisible(false)}
        >
          Cancel
        </button>
        <button className="bg-red-500 text-white px-3 py-[6px] rounded text-sm hover:bg-red-600">
          Add task
        </button>
      </div>
    </div>
  );
}
