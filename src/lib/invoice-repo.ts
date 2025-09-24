import { db } from "./db";
import { Invoice, invoiceSchema } from "./schema";

export const invoiceRepo = {
  async add(invoice: Invoice) {
    const parsed = invoiceSchema.parse(invoice);
    return db.invoices.add({
      ...parsed,
      id: crypto.randomUUID(),
    });
  },

  async all(): Promise<Invoice[]> {
    return db.invoices.toArray();
  },

  async getById(id: string): Promise<Invoice | undefined> {
    return db.invoices.get(id);
  },

  async update(id: string, data: Partial<Invoice>) {
    return db.invoices.update(id, data);
  },

  async remove(id: string) {
    return db.invoices.delete(id);
  },
};
