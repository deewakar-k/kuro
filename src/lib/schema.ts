import z from "zod/v4";

export const invoiceItemSchema = z.object({
  id: z.string(),
  description: z.string().min(1, "description required"),
  quantity: z.number().min(1, "quantity must be at least 1"),
  price: z.number().min(0, "price must be positive"),
  total: z.number().readonly(),
});

export const invoiceSchema = z.object({
  issueNo: z.string().min(1, "issue number required"),
  issueDate: z.string().min(1, "issue date required"),
  dueDate: z.string().min(1, "due date required"),
  billedFrom: z.string().min(1, "billed from required"),
  billedTo: z.string().min(1, "billed to required"),
  items: z.array(invoiceItemSchema).min(1, "at least one item required"),
  taxRate: z.number().min(0).max(100),
  paymentDetails: z.string().optional(),
});
