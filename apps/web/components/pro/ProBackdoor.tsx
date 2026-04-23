"use client";

import { useEffect, useRef } from "react";

const SEQUENCE = "badash";

export function ProBackdoor() {
  const bufferRef = useRef("");

  useEffect(() => {
    console.log(
      "%c// there's another side to this story",
      "color:#00ff41;font-family:monospace;font-size:12px;"
    );

    function handleKey(e: KeyboardEvent) {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      bufferRef.current = (bufferRef.current + e.key.toLowerCase()).slice(-SEQUENCE.length);
      if (bufferRef.current === SEQUENCE) {
        bufferRef.current = "";
        window.location.href = "https://badash99.dev";
      }
    }

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return null;
}
