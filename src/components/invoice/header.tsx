import { useState, useEffect } from "react";
import { Input } from "../ui/input";

export const InvoiceHeader = () => {
  const [title, setTitle] = useState("Invoice");
  const [issueNo, setIssueNo] = useState("INV-001");
  const [issueDate, setIssueDate] = useState(() => {
    const today = new Date();
    return today.toLocaleDateString("en-GB");
  });

  const [dueDate, setDueDate] = useState("");

  useEffect(() => {
    if (issueDate) {
      try {
        const [day, month, year] = issueDate.split("/");
        const date = new Date(
          parseInt(year),
          parseInt(month) - 1,
          parseInt(day),
        );

        const dueDateObj = new Date(date);
        dueDateObj.setMonth(dueDateObj.getMonth() + 1);

        const calculatedDueDate = dueDateObj.toLocaleDateString("en-GB");
        setDueDate(calculatedDueDate);
      } catch (error) {
        setDueDate("");
      }
    }
  }, [issueDate]);

  const handleIssueDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIssueDate(e.target.value);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTitle(value === "" ? "Invoice" : value);
  };

  const handleIssueNoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setIssueNo(value === "" ? "INV-001" : value);
  };

  return (
    <div className="flex flex-col gap-3">
      <Input
        value={title}
        name="invoiceTitle"
        className="text-[21px] font-medium bg-transparent h-auto"
        onChange={handleTitleChange}
      />
      <div className="flex flex-col gap-1">
        <InputWithLabel
          label="Issue No."
          value={issueNo}
          name="issueNo"
          className="bg-transparent h-auto"
          onChange={handleIssueNoChange}
        />
        <InputWithLabel
          label="Issue Date"
          value={issueDate}
          name="issueDate"
          className="bg-transparent h-auto"
          onChange={handleIssueDateChange}
        />
        <InputWithLabel
          label="Due Date"
          value={dueDate}
          name="dueDate"
          className="bg-transparent h-auto"
        />
      </div>
    </div>
  );
};

function InputWithLabel({
  label,
  value,
  name,
  className,
  onChange,
}: {
  label: string;
  value: string;
  name: string;
  className: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="flex items-center justify-start gap-12">
      <label className="text-muted-foreground w-20 whitespace-nowrap">
        {label}
      </label>
      <Input
        value={value}
        name={name}
        className={className}
        onChange={onChange}
      />
    </div>
  );
}
