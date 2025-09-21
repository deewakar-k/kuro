import * as React from "react";
import { cn } from "@/lib/utils";

function Input({
  className,
  type,
  onChange,
  value,
  ...props
}: React.ComponentProps<"input">) {
  const [isFocused, setIsFocused] = React.useState(false);

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    if (props.onFocus) {
      props.onFocus(e);
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    if (props.onBlur) {
      props.onBlur(e);
    }
  };

  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      data-slot="input"
      className={cn(
        "font-mono !border-0 !outline-0 focus:!outline-0 focus:!border-0 focus:!ring-0 focus-visible:!outline-0 focus-visible:!ring-0 !shadow-none focus:!shadow-none !ring-0 !ring-offset-0 transition-colors [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [-moz-appearance:textfield]",
        (!value || value === "") &&
          !isFocused &&
          "bg-[repeating-linear-gradient(-60deg,#DBDBDB,#DBDBDB_1px,transparent_1px,transparent_5px)] dark:bg-[repeating-linear-gradient(-60deg,#2C2C2C,#2C2C2C_1px,transparent_1px,transparent_5px)]",
        className,
      )}
      autoComplete="off"
      {...props}
    />
  );
}

export { Input };
