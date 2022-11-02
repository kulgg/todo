"use client";
import { useState } from "react";
import AddTaskForm from "./AddTaskForm";

export default function TodoList() {
  const [isAddTaskFormVisible, setIsAddTaskFormVisible] = useState(false);

  return (
    <div>
      <div className="py-2 px-1">
        {isAddTaskFormVisible ? (
          <AddTaskForm />
        ) : (
          <button
            className="flex gap-3 items-center group"
            onClick={() => setIsAddTaskFormVisible(true)}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-red-500 group-hover:text-white group-hover:bg-red-500 rounded-lg"
            >
              <defs />
              <path d="M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z" />
              <path d="M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z" />
            </svg>

            <span className="text-gray-400 text-sm group-hover:text-red-500">
              Add task
            </span>
          </button>
        )}
      </div>
    </div>
  );
}
