import Plus from "../icons/plus";
import SquareMinus from "../icons/square-minus";
import SquarePlus from "../icons/square-plus";

import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { useInvoiceStore } from "../../stores/useInvoiceStore";
import Xmark from "../icons/xmarks";

export const InvoiceItems = () => {
  const { items, addItem, removeItem, updateItem } = useInvoiceStore();

  const handleDescriptionChange = (
    itemId: string,
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    updateItem(itemId, { description: event.target.value });
  };

  const handleQuantityChange = (
    itemId: string,
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const value = parseInt(event.target.value) || 0;
    updateItem(itemId, { quantity: value });
  };

  const handlePriceChange = (
    itemId: string,
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const value = parseFloat(event.target.value) || 0;
    updateItem(itemId, { price: value });
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-[1.5fr_15%_15%_15%] gap-4 items-end mb-2">
        <span className="min-w-10 font-mono outline-none truncate">
          Description
        </span>
        <span className="min-w-10 font-mono outline-none truncate text-center">
          Quantity
        </span>
        <span className="min-w-10 font-mono outline-none truncate">Price</span>
        <span className="min-w-10 font-mono outline-none text-right truncate">
          Total
        </span>
      </div>

      <ul className="!m-0">
        {items.map((item) => (
          <li
            key={item.id}
            className="grid grid-cols-[1.5fr_15%_15%_15%] gap-4 items-start relative group mb-2 w-full"
          >
            <div className="relative">
              <div className="text-primary invoice-editor w-full min-h-6">
                <Textarea
                  value={item.description}
                  onChange={(e) => handleDescriptionChange(item.id, e)}
                  rows={1}
                />
              </div>
            </div>

            <div className="relative">
              <div className="group flex items-stretch">
                <button
                  aria-label="Decrease"
                  className="flex items-center pr-[.325em]"
                  onClick={() => {
                    const newValue = Math.max(1, item.quantity - 1);
                    updateItem(item.id, { quantity: newValue });
                  }}
                  type="button"
                  tabIndex={-1}
                >
                  <SquareMinus />
                </button>
                <div className="relative grid items-center justify-items-center text-center">
                  <Input
                    className="flex w-full max-w-full text-center"
                    min="1"
                    max="Infinity"
                    step="0.01"
                    inputMode="decimal"
                    type="number"
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(item.id, e)}
                  />
                </div>
                <button
                  aria-label="Increase"
                  className="flex items-center pl-[.325em]"
                  onClick={() => {
                    const newValue = item.quantity + 1;
                    updateItem(item.id, { quantity: newValue });
                  }}
                  type="button"
                  tabIndex={-1}
                >
                  <SquarePlus />
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="relative font-mono">
                <Input
                  className="flex w-full max-w-full text-center"
                  type="text"
                  value={item.price === 0 ? "" : item.price.toString()}
                  inputMode="numeric"
                  onChange={(e) => handlePriceChange(item.id, e)}
                />
              </div>
            </div>

            <div className="text-right">
              <span className="text-xs text-primary font-mono">
                ${item.total.toFixed(2)}
              </span>
            </div>

            {items.length > 1 && (
              <button
                className="inline-flex items-center justify-center text-sm font-medium focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 px-4 py-2 absolute -right-9 -top-[10px] opacity-0 group-hover:opacity-100 transition-opacity hover:bg-transparent text-[#878787]"
                type="button"
                onClick={() => removeItem(item.id)}
              >
                <Xmark />
              </button>
            )}
          </li>
        ))}
      </ul>

      <button
        type="button"
        className="flex items-center gap-2 text-muted-foreground hover:text-foreground cursor-pointer"
        onClick={addItem}
      >
        <Plus />
        <span>Add</span>
      </button>
    </div>
  );
};
