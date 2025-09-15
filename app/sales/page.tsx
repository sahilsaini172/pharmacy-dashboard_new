import BarChart from "../ui/BarChart";
import { SalesCard } from "../ui/Cards";
import OBTChart from "../ui/OBTChart";

export default function Sales() {
  return (
    <div className="min-h-screen flex flex-col gap-4 py-4">
      <h1 className="text-lg font-semibold px-4">Order List</h1>
      <div className="flex items-center gap-2 overflow-x-scroll px-4 hide-scrollbar scroll-smooth">
        <SalesCard/>
        <SalesCard/>
        <SalesCard/>
        <SalesCard/>
      </div>
      <BarChart/>
      <OBTChart/>
    </div>
  );
}
