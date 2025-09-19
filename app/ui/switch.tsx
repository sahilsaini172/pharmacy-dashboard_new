"use client";
import { useState } from "react";

export default function Switch() {
  const [on, setOn] = useState(false);
  function handleToggle() {
    setOn(!on);
  }
  return (
    <div
      onClick={handleToggle}
      className={`w-15 h-8 rounded-full items-center flex ${
        on ? "p-1 bg-neutral-200" : "p-2 bg-tertiary-400"
      } duration-200 ease-linear`}
    >
      <div
        className={`relative size-6 bg-white z-10 rounded-full ${
          on ? "translate-x-0 shadow-sm" : "translate-x-full "
        } duration-200 ease-linear`}
      ></div>
    </div>
  );
}
