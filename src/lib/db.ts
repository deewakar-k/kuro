import Dexie, { Table } from "dexie";
import { Invoice } from "./schema";

export class InvoiceDB extends Dexie {
  invoices!: Table<Invoice, string>;

  constructor() {
    super("InvoiceDB");

    this.version(1).stores({
      invoices: "id, issueNo, issueDate, dueDate",
    });
  }
}

export const db = new InvoiceDB();
