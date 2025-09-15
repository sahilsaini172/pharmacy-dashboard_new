import { OrderCard } from "../ui/Cards";
import { OrderTable } from "../ui/Table";

export default function Orders() {
  return (
    <div className="min-h-screen flex flex-col gap-4 py-4">
      <h1 className="text-lg font-semibold px-4">Order List</h1>
      <div className="flex items-center gap-2 overflow-x-scroll px-4 hide-scrollbar scroll-smooth">
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
      </div>
      <OrderTable />
    </div>
  );
}
