import * as React from "react";
import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "font-mono !border-0 !outline-0 focus:!outline-0 focus:!border-0 focus:!ring-0 focus-visible:!outline-0 focus-visible:!ring-0 !shadow-none focus:!shadow-none !ring-0 !ring-offset-0",
        className,
      )}
      autoComplete="off"
      {...props}
    />
  );
}

export { Input };
