import { Input } from "../ui/input";

export const InvoiceHeader = () => {
  return (
    <div>
      <Input
        defaultValue="Invoice"
        name="invoiceTitle"
        className="text-[21px] font-medium bg-transparent h-auto"
      />
    </div>
  );
};
