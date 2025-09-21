import { useState } from "react";
import { Textarea } from "../ui/textarea";

export const InvoiceParties = () => {
  const [billedFrom, setBilledFrom] = useState("");
  const [billedTo, setBilledTo] = useState("");

  const handleFromChanged = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBilledFrom(e.target.value);
  };

  const handleToChanged = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBilledTo(e.target.value);
  };

  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex flex-col gap-1">
        <label className="text-muted-foreground">From</label>
        <Textarea
          value={billedFrom}
          onChange={handleFromChanged}
          minHeight={100}
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-muted-foreground">To</label>
        <Textarea value={billedTo} onChange={handleToChanged} minHeight={100} />
      </div>
    </div>
  );
};
