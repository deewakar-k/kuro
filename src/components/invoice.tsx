"use client";

import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { ReactNode } from "react";

export const Invoice = () => {
  return (
    <Wrapper>
      <div></div>
    </Wrapper>
  );
};

const Wrapper = ({ children }: { children: ReactNode }) => {
  const { theme } = useTheme();
  return (
    <div className="relative">
      <div
        data-invoice-container
        className={cn(
          "w-[600px] h-[800px] shadow-xl relative z-50",
          theme === "light"
            ? "border border-neutral-300"
            : "border border-neutral-700",
        )}
        style={{
          backgroundColor: theme === "dark" ? "#121212" : "#f0f0f0",
        }}
      >
        <div className="h-full overflow-y-auto overscroll-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="p-8">{children}</div>
        </div>
      </div>

      <div
        className={cn(
          "absolute w-[600px] min-h-[800px] -z-1",
          theme === "light" ? "bg-neutral-300" : "bg-neutral-700",
        )}
        style={{
          top: "4px",
          left: "4px",
        }}
      />
    </div>
  );
};
