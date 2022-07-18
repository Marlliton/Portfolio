import React from "react";
import { useEffect } from "react";
import { useState } from "react";

interface TypeWriterProps {
  text: string;
  timer?: number;
  hideCursor?: boolean;
  delay?: number;
}

export function TypeWriter(props: TypeWriterProps) {
  const [text, setText] = useState<string>("");
  const [showCursor, setShowCursor] = useState(false);

  const typeWriter = (text: string, i = 0) => {
    if (i < text.length) {
      setShowCursor(true);
      setText(text.slice(0, i + 1));

      setTimeout(() => typeWriter(text, i + 1), props.timer ?? 100);
    } else if (i >= text.length && props.hideCursor) {
      setShowCursor(false);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      typeWriter(props.text);
    }, props.delay?? 1000);
  }, []);

  return (
    <>
      {text}{" "}
      {showCursor && (
        <span className="animate-fade-in-down text-2xl font-extrabold">|</span>
      )}
    </>
  );
}
