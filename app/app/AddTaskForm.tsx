import GreyButton from "@/components/ui/buttons/GreyButton";
import RedButton from "@/components/ui/buttons/RedButton";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

export default function AddTaskForm({
  setIsVisible,
}: {
  setIsVisible: Dispatch<SetStateAction<boolean>>;
}) {
  const [inputIsFocued, setInputIsFocused] = useState(false);
  const onFocus = () => setInputIsFocused(true);
  const onBlur = () => setInputIsFocused(false);

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
      <div
        className={`w-full ${
          inputIsFocued ? "border-gray-600" : "border-gray-700"
        } border rounded-lg px-3 pt-2`}
      >
        <input
          id="task-input"
          type="text"
          className="bg-stone-900 w-full outline-0 hover:outline-0 active:outline-0 text-[15px] placeholder-zinc-500"
          placeholder="Task name"
          autoFocus
          autoComplete="off"
          onFocus={onFocus}
          onBlur={onBlur}
        />
        <label htmlFor="task-input" className="cursor-text">
          <div className="h-20"></div>
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
