"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "font-mono focus-visible:outline-none resize-none w-52 min-h-[100px] text-[11px]",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
