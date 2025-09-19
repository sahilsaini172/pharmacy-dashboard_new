import {
  CircleCheck,
  CircleDollarSign,
  EllipsisVertical,
  Package,
  Pill,
  TrendingUp,
  TriangleAlert,
  Users,
  X,
} from "lucide-react";

export default function Card() {
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

interface SmallCardProps {
  title: string;
  type: string;
  value: number;
}

export function SmallCard({ title, type = "", value }: SmallCardProps) {
  const getIconAndColor = () => {
    switch (type) {
      case "caution":
        return {
          bgColor: "bg-yellow-100",
          textColor: "text-yellow-500",
          Icon: TriangleAlert,
        };
      case "warning":
        return { bgColor: "bg-red-100", textColor: "text-red-500", Icon: X };
      default:
        return {
          bgColor: "bg-secondary-100",
          textColor: "text-secondary-500",
          Icon: Package,
        };
    }
  };
  const { bgColor, textColor, Icon } = getIconAndColor();

  return (
    <div className="flex items-center w-2/3 p-4 rounded-xl gap-1 justify-between bg-white">
      <div className="flex items-center gap-2">
        <div className={`${bgColor} p-2 rounded-full`}>
          <Icon className={textColor} />
        </div>
        <div className="flex flex-col">
          <p className="text-sm text-nowrap">{title}</p>
          <p className="text-xl font-semibold">{value.toLocaleString()}</p>
        </div>
      </div>
      <EllipsisVertical className="text-black" />
    </div>
  );
}

export function ProductCard() {
  return (
    <div className="flex flex-col w-2/3 rounded-xl bg-secondary-500 p-4 text-white">
      <div className="flex items-center justify-between mb-8 gap-8">
        <span className="flex gap-1 items-center text-sm">Antibiotics</span>
        <EllipsisVertical size={20} className="text-white" />
      </div>
      <div className="text-sm flex items-center justify-between">
        <p className="text-white text-2xl font-semibold">$12,400</p>
        <span className="flex items-center justify-center p-2 rounded-lg bg-primary-500">
          <Pill size={20} className="text-secondary-500" />
        </span>
      </div>
      <div className="flex items-center gap-1 mt-2 text-sm">
        <span className="flex gap-1 items-center text-secondary-500 text-sm px-2 bg-green-100 rounded-full">
          <TrendingUp size={16} /> +2%
        </span>
        <p className="text-nowrap">Since last week</p>
      </div>
    </div>
  );
}

export function OrderCard() {
  return (
    <div className="flex flex-col w-2/3 rounded-xl bg-secondary-500 p-4 text-white">
      <div className="flex items-center justify-between mb-8 gap-8">
        <span className="flex gap-1 items-center text-sm">Total Orders</span>
        <EllipsisVertical size={20} className="text-white" />
      </div>
      <div className="flex flex-col gap-1 text-sm">
        <p>Since last week</p>
        <div className="text-sm flex items-center justify-between gap-20">
          <p className="text-white text-2xl font-semibold ">2,430</p>
          <span className="flex gap-1 items-center text-secondary-500 text-sm px-2 bg-green-100 rounded-full">
            <TrendingUp size={16} /> +2.7%
          </span>
        </div>
        <p>Revenue Generated: $15,000</p>
      </div>
    </div>
  );
}

export function SalesCard() {
  return (
    <div className="flex flex-col w-2/3 rounded-xl bg-secondary-500 p-4 text-white">
      <div className="flex items-center justify-between mb-8 gap-8">
        <span className="flex gap-1 items-center text-sm">Antibiotics</span>
        <EllipsisVertical size={20} className="text-white" />
      </div>
      <div className="text-sm flex items-center justify-between">
        <p className="text-white text-2xl font-semibold">$122,400</p>
      </div>
      <div className="flex items-center gap-1 mt-2 text-sm mr-4">
        <span className="flex gap-1 items-center text-secondary-500 text-sm px-2 bg-green-100 rounded-full">
          <TrendingUp size={16} /> +2%
        </span>
        <p className="text-nowrap">Since last week</p>
      </div>
    </div>
  );
}

export function CustomerCard() {
  return (
    <div className="flex gap-4 w-fit items-center rounded-xl bg-secondary-500 p-4 text-white">
      <span className="flex items-center justify-center p-2 rounded-full bg-primary-500">
        <Users size={24} className="text-secondary-500" />
      </span>
      <div className="flex flex-1 flex-col ">
        <div className="flex items-center justify-between mb-8 gap-8">
          <span className="flex gap-1 items-center text-sm">Antibiotics</span>
          <EllipsisVertical size={20} className="text-white" />
        </div>
        <div className="text-sm flex items-center justify-between">
          <p className="text-white text-2xl font-semibold">$122,400</p>
        </div>
        <div className="flex items-center gap-1 mt-2 text-sm mr-4">
          <span className="flex gap-1 items-center text-secondary-500 text-sm px-2 bg-green-100 rounded-full">
            <TrendingUp size={16} /> +2%
          </span>
          <p className="text-nowrap">Since last week</p>
        </div>
      </div>
    </div>
  );
}

export function PaymentCard() {
  return (
    <div className="flex gap-4 w-fit items-center rounded-xl bg-white p-4 text-black">
      <span className="flex items-center justify-center p-2 rounded-full bg-green-100">
        <CircleCheck size={24} className="text-green-500" />
      </span>
      <div className="flex flex-1 flex-col ">
        <div className="flex items-center justify-between mb-8 gap-8">
          <span className="flex gap-1 items-center text-sm font-medium">
            Completed Payments
          </span>
          <EllipsisVertical size={20} />
        </div>
        <div className="text-sm flex-col flex">
          <p>Since last week</p>
          <p className="text-2xl font-semibold">122</p>
          <p>
            Revenue: <span className="font-semibold">$23,234</span>
          </p>
        </div>
      </div>
    </div>
  );
}
