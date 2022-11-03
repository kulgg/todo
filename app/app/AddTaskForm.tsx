import GreyButton from "@/components/ui/buttons/grey-button";
import RedButton from "@/components/ui/buttons/red-button";
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
        <GreyButton handleClick={() => setIsVisible(false)} text="Cancel" />
        <RedButton
          text="Add task"
          handleClick={() => {
            const a = 2;
          }}
        />
      </div>
    </div>
  );
}
