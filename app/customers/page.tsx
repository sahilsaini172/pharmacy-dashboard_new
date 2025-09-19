import { CustomerCard } from "../ui/Cards";
import { CustomerTable } from "../ui/Table";

export default function Customers() {
  return (
    <div className="min-h-screen flex flex-col gap-4 py-4">
      <h1 className="text-lg font-semibold px-4">Customer List</h1>
      <div className="flex items-center gap-2 overflow-x-scroll px-4 hide-scrollbar scroll-smooth">
        <CustomerCard/>
        <CustomerCard/>
        <CustomerCard/>
      </div>
      <CustomerTable/>
    </div>
  );
}
