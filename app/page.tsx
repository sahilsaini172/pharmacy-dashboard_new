import BarChart from "./ui/BarChart";
import InfoCard from "./ui/InfoCard";
import MedicineBarChart from "./ui/MedicineBarChart";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col gap-4 py-4">
      <h1 className="text-lg font-semibold px-4">Overview</h1>
      <div className="flex items-center gap-2 overflow-x-scroll px-4 hide-scrollbar scroll-smooth">
        <InfoCard />
        <InfoCard />
        <InfoCard />
      </div>
      <BarChart />
      <MedicineBarChart/>
    </div>
  );
}
