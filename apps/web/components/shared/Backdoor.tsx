"use client";
import { useEffect } from "react";

const KONAMI = [
  "ArrowUp","ArrowUp","ArrowDown","ArrowDown",
  "ArrowLeft","ArrowRight","ArrowLeft","ArrowRight",
  "b","a",
];

export function Backdoor() {
  useEffect(() => {
    let i = 0;
    const handler = (e: KeyboardEvent) => {
      if (e.key === KONAMI[i]) {
        i++;
        if (i === KONAMI.length) {
          window.location.href = "https://ashclements.dev";
          i = 0;
        }
      } else {
        i = e.key === KONAMI[0] ? 1 : 0;
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);
  return null;
}
