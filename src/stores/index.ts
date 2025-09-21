export { useInvoiceStore } from './useInvoiceStore';
export type { InvoiceItem } from './useInvoiceStore';

// Usage example:
//
// import { useInvoiceStore } from '@/stores';
//
// const MyComponent = () => {
//   const { items, addItem, updateItem, getSubtotal } = useInvoiceStore();
//
//   const handleAddItem = () => {
//     addItem();
//   };
//
//   const handleUpdateDescription = (id: string, description: string) => {
//     updateItem(id, { description });
//   };
//
//   return (
//     <div>
//       <p>Subtotal: ${getSubtotal().toFixed(2)}</p>
//       <button onClick={handleAddItem}>Add Item</button>
//       {items.map(item => (
//         <div key={item.id}>
//           <input
//             value={item.description}
//             onChange={(e) => handleUpdateDescription(item.id, e.target.value)}
//           />
//           <p>Total: ${item.total.toFixed(2)}</p>
//         </div>
//       ))}
//     </div>
//   );
// };
