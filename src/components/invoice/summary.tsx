import { cn } from "@/lib/utils";
import { useInvoiceStore } from "../../stores/useInvoiceStore";

export const InvoiceSummary = () => {
  const { getSubtotal, getTax, getTotal } = useInvoiceStore();

  const subtotal = getSubtotal();
  const tax = getTax(0); // 0% tax rate
  const total = getTotal(0);

  return (
    <div className="w-64 space-y-3">
      <SummaryItem label="Subtotal" value={subtotal} />
      <SummaryItem label="Tax (0%)" value={tax} />

      <div className="border-t border-neutral-200 dark:border-neutral-800" />

      <SummaryItem label="Total" value={total} />
    </div>
  );
};

interface SummaryItemProps {
  label: string;
  value: number;
}

const SummaryItem = ({ label, value }: SummaryItemProps) => {
  return (
    <div className="flex items-center justify-between">
      <p className="text-muted-foreground">{label}</p>
      <p
        className={cn(
          "text-foreground",
          label.toLowerCase() === "total" ? "text-[21px] font-medium" : "",
        )}
      >
        ${value.toFixed(2)}
      </p>
    </div>
  );
};
