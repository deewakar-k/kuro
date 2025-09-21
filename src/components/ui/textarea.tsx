"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({
  className,
  onChange,
  value = "",
  minHeight = 24,
  ...props
}: React.ComponentProps<"textarea"> & { minHeight?: number }) {
  const textareaRef = React.useRef<HTMLTextAreaElement>(null);
  const [isFocused, setIsFocused] = React.useState(false);

  const adjustHeight = React.useCallback(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${Math.max(textarea.scrollHeight, minHeight)}px`;
    }
  }, [minHeight]);

  React.useLayoutEffect(() => {
    adjustHeight();
  });

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    adjustHeight();
    if (onChange) {
      onChange(e);
    }
  };

  const handleFocus = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    setIsFocused(true);
    if (props.onFocus) {
      props.onFocus(e);
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    setIsFocused(false);
    if (props.onBlur) {
      props.onBlur(e);
    }
  };

  return (
    <textarea
      ref={textareaRef}
      value={value}
      onChange={handleChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      data-slot="textarea"
      className={cn(
        "font-mono !border-0 !outline-0 focus:!outline-0 focus:!border-0 focus:!ring-0 focus-visible:!outline-0 focus-visible:!ring-0 !shadow-none focus:!shadow-none !ring-0 !ring-offset-0 resize-none w-52",
        !value &&
          !isFocused &&
          "bg-[repeating-linear-gradient(-60deg,#DBDBDB,#DBDBDB_1px,transparent_1px,transparent_5px)] dark:bg-[repeating-linear-gradient(-60deg,#2C2C2C,#2C2C2C_1px,transparent_1px,transparent_5px)]",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
