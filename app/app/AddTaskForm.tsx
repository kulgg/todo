import GreyButton from "@/components/ui/buttons/GreyButton";
import RedButton from "@/components/ui/buttons/RedButton";
import clsx from "clsx";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

type FormData = {
  taskName: string;
};
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export default function AddTaskForm({
  setIsVisible,
}: {
  setIsVisible: Dispatch<SetStateAction<boolean>>;
}) {
  const [inputIsFocused, setInputIsFocused] = useState(false);
  const { register, reset, handleSubmit, formState } = useForm<FormData>();
  const { isSubmitting, errors, isValid } = formState;

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
    reset();
  });

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
      <form
        id="task-form"
        className={clsx("w-full border rounded-lg px-3 pt-2", {
          "border-gray-600": inputIsFocused,
          "border-gray-700": !inputIsFocused,
        })}
        onSubmit={onSubmit}
      >
        <input
          {...register("taskName", { required: true })}
          id="task-input"
          type="text"
          className="bg-stone-900 w-full outline-0 hover:outline-0 active:outline-0 text-[15px] placeholder-zinc-500"
          placeholder="Task name"
          autoFocus
          autoComplete="off"
          aria-invalid={errors.taskName ? "true" : "false"}
          onFocus={() => setInputIsFocused(true)}
          onBlur={() => setInputIsFocused(false)}
        />
        <label htmlFor="task-input" className="cursor-text">
          <div className="h-20"></div>
        </label>
      </form>
      {formState.errors.taskName?.message}
      <div className="my-2"></div>
      <div className="flex justify-end items-center gap-3">
        <GreyButton handleClick={() => setIsVisible(false)} text="Cancel" />
        <RedButton
          text="Add task"
          formId="task-form"
          disabled={isSubmitting || !isValid}
        />
      </div>
    </div>
  );
}
