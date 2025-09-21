import { create } from "zustand";
import { devtools } from "zustand/middleware";

export interface InvoiceItem {
  id: string;
  description: string;
  quantity: number;
  price: number;
  total: number;
}

interface InvoiceStore {
  items: InvoiceItem[];
  addItem: () => void;
  removeItem: (id: string) => void;
  updateItem: (
    id: string,
    updates: Partial<Omit<InvoiceItem, "id" | "total">>,
  ) => void;
  getSubtotal: () => number;
  getTax: (taxRate?: number) => number;
  getTotal: (taxRate?: number) => number;
}

const createEmptyItem = (): InvoiceItem => ({
  id: crypto.randomUUID(),
  description: "",
  quantity: 1,
  price: 0,
  total: 0,
});

const calculateTotal = (quantity: number, price: number): number => {
  return Math.round(quantity * price * 100) / 100;
};

export const useInvoiceStore = create<InvoiceStore>()(
  devtools(
    (set, get) => ({
      items: [createEmptyItem()],

      addItem: () =>
        set((state) => ({
          items: [...state.items, createEmptyItem()],
        })),

      removeItem: (id: string) =>
        set((state) => ({
          items:
            state.items.length > 1
              ? state.items.filter((item) => item.id !== id)
              : state.items,
        })),

      updateItem: (
        id: string,
        updates: Partial<Omit<InvoiceItem, "id" | "total">>,
      ) =>
        set((state) => ({
          items: state.items.map((item) =>
            item.id === id
              ? {
                  ...item,
                  ...updates,
                  total: calculateTotal(
                    updates.quantity ?? item.quantity,
                    updates.price ?? item.price,
                  ),
                }
              : item,
          ),
        })),

      getSubtotal: () => {
        const { items } = get();
        return (
          Math.round(items.reduce((sum, item) => sum + item.total, 0) * 100) /
          100
        );
      },

      getTax: (taxRate = 0.1) => {
        const subtotal = get().getSubtotal();
        return Math.round(subtotal * taxRate * 100) / 100;
      },

      getTotal: (taxRate = 0.1) => {
        const subtotal = get().getSubtotal();
        const tax = get().getTax(taxRate);
        return Math.round((subtotal + tax) * 100) / 100;
      },
    }),
    {
      name: "invoice-store",
    },
  ),
);
