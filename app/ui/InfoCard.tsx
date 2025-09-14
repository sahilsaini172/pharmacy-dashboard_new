import {
  CircleDollarSign,
  EllipsisVertical,
  TrendingUp,
} from "lucide-react";

export default function InfoCard() {
  return (
    <div className="flex flex-col w-1/2 rounded-xl bg-secondary-500 p-4">
      <div className="flex items-center justify-between mb-8 gap-8">
        <span className="flex items-center justify-center p-2 rounded-lg bg-primary-500">
          <CircleDollarSign size={20} className="text-secondary-500" />
        </span>
        <div className="flex items-center gap-2 text-tertiary-500">
          <span className="flex gap-1 items-center text-sm px-2 bg-green-100 rounded-full">
            <TrendingUp size={16} /> +2%
          </span>
          <EllipsisVertical size={20} className="text-white" />
        </div>
      </div>
      <div className="text-sm">
        <p className="text-white">Total Profit</p>
        <p className="text-white text-2xl font-semibold">$12,400</p>
        <p className="text-white">Since last week</p>
      </div>
    </div>
  );
}
