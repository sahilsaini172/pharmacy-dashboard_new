import { ProductCard, SmallCard } from "../ui/Cards";
import { ProductTable } from "../ui/Table";

export default function Products() {
  return (
    <div className="min-h-screen flex flex-col gap-4 py-4">
      <h1 className="text-lg font-semibold px-4">Product List</h1>
      <div className="flex items-center gap-2 overflow-x-scroll px-4 hide-scrollbar scroll-smooth">
        <SmallCard title="Total Products" value={20432} type="" />
        <SmallCard title="Low Stock Items" value={130} type="caution" />
        <SmallCard title="Out of Stock" value={89} type="warning" />
      </div>
      <div className="flex items-center px-4 overflow-x-scroll gap-2 hide-scrollbar">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <div>
        <ProductTable />
      </div>
    </div>
  );
}
