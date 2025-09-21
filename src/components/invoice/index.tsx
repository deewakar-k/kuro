"use client";

import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { ReactNode, useEffect, useState } from "react";
import { InvoiceHeader } from "./header";
import { InvoiceParties } from "./parties";
import { InvoiceItems } from "./items";
import { InvoiceSummary } from "./summary";
import { InvoicePaymentDetails } from "./payment";

export const Invoice = () => {
  return (
    <Wrapper>
      <div className="flex flex-col gap-6">
        <InvoiceHeader />
        <InvoiceParties />
        <InvoiceItems />
        <div className="flex justify-end">
          <InvoiceSummary />
        </div>
        <InvoicePaymentDetails />
      </div>
    </Wrapper>
  );
};

const Wrapper = ({ children }: { children: ReactNode }) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

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
