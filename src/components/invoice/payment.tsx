import { Textarea } from "../ui/textarea";

export const InvoicePaymentDetails = () => {
  return (
    <div className="flex flex-col">
      <label className="text-muted-foreground">Payment Details</label>
      <Textarea value="" minHeight={100} />
    </div>
  );
};
