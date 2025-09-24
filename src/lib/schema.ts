import z from "zod/v4";

export const invoiceItemSchema = z
  .object({
    id: z.string(),
    description: z.string().min(1, "description required"),
    quantity: z.number().min(1, "quantity must be at least 1"),
    price: z.number().min(0, "price must be positive"),
  })
  .transform((item) => ({
    ...item,
    total: item.quantity * item.price,
  }));

export type InvoiceItem = z.infer<typeof invoiceItemSchema>;

export const invoiceSchema = z
  .object({
    id: z.string(),
    issueNo: z.string().min(1, "issue number required"),
    issueDate: z.string().min(1, "issue date required"),
    dueDate: z.string().min(1, "due date required"),
    billedFrom: z.string().min(1, "billed from required"),
    billedTo: z.string().min(1, "billed to required"),
    items: z.array(invoiceItemSchema).min(1, "at least one item required"),
    taxRate: z.number().min(0).max(100),
    paymentDetails: z.string().optional(),
  })
  .transform((invoice) => {
    const subTotal = invoice.items.reduce((sum, i) => sum + i.total, 0);
    const taxAmount = (subTotal * invoice.taxRate) / 100;
    const grandTotal = subTotal + taxAmount;

    return {
      ...invoice,
      subTotal,
      taxAmount,
      grandTotal,
    };
  });

export type Invoice = z.infer<typeof invoiceSchema>;
