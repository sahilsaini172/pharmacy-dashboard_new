import {
  ChevronLast,
  ChevronLeft,
  ChevronRight,
  EyeIcon,
  Plus,
  Search,
  Settings2,
  SquareArrowOutUpRight,
  Trash2,
} from "lucide-react";

export default function Table() {
  return (
    <div className="flex flex-col mx-4 p-4 rounded-xl bg-white shadow-sm overflow-hidden">
      <div className="flex justify-between items-center">
        <h2 className="font-semibold">Latest Orders</h2>
        <a href="">View All</a>
      </div>
      <div className="overflow-x-auto hide-scrollbar mt-2">
        <table className="min-w-max text-left">
          <thead className="rounded-lg">
            <tr>
              <th className="p-3">Order ID</th>
              <th className="p-3">Medicine Name</th>
              <th className="p-3">Price</th>
              <th className="p-3">Status</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3">#ORD567</td>
              <td className="p-3">Peracetamol</td>
              <td className="p-3">$18.00</td>
              <td className="p-3">Delivered</td>
              <td className="p-3 flex gap-2 items-center">
                <EyeIcon size={20} />
                <Trash2 size={20} />
                <SquareArrowOutUpRight size={20} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function ProductTable() {
  return (
    <div className="flex flex-col mx-4 p-4 rounded-xl bg-white shadow-sm overflow-hidden">
      <div className="flex items-center gap-2">
        <div className="flex flex-1 justify-between items-center border border-neutral-300 rounded-full">
          <input
            type="search"
            className="w-full h-max p-3 flex-1 focus:outline-0"
            placeholder="Search"
          />
          <div className="p-3 text-neutral-500">
            <Search size={24} />
          </div>
        </div>
        <div className="flex w-1/2 justify-between items-center">
          <div className="p-3 border border-neutral-300 rounded-full">
            <Search size={24} />
          </div>
          <div className="p-3 bg-primary-500 text-secondary-500 rounded-full">
            <Plus size={24} />
          </div>
          <div className="p-3 border border-neutral-300 rounded-full">
            <Settings2 size={24} />
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="flex flex-col mt-4 ">
          <tr className="flex gap-2 justify-between text-left font-medium w-max *:text-nowrap p-4 rounded-lg bg-tertiary-100 text-tertiary-500">
            <td className="w-[200px]">Product ID</td>
            <td className="w-[200px]">Product Name</td>
            <td className="w-[200px]">Quantity</td>
            <td className="w-[200px]">Price</td>
            <td className="w-[200px]">Expiry Date</td>
            <td className="w-[200px]">Status</td>
            <td className="w-[200px]">Action</td>
          </tr>
          <tr className="flex gap-2 justify-between text-left w-max *:text-nowrap p-4">
            <td className="w-[200px]">#001</td>
            <td className="w-[200px]">
              Paracetamol{" "}
              <span className="text-xs font-medium text-tertiary-400">
                500mg
              </span>
            </td>
            <td className="w-[200px]">120 Units</td>
            <td className="w-[200px]">$5.00</td>
            <td className="w-[200px]">15-03-2025</td>
            <td className="w-[200px]">
              <span className="inline-block bg-green-100 text-green-600 px-2 rounded-full">
                In stock
              </span>
            </td>
            <td className="flex w-[200px] gap-4 items-center">
              <EyeIcon size={24} />
              <Trash2 size={24} />
              <SquareArrowOutUpRight size={24} />
            </td>
          </tr>
        </table>
      </div>
      <div className="flex items-center gap-2 p-4">
        <div className="w-full flex h-8 p-2 bg-neutral-100 items-center justify-center text-center text-neutral-500 rounded-lg">
          <ChevronLeft size={20} />
        </div>
        <div className="w-full flex h-8 p-2 bg-secondary-500 items-center justify-center text-center text-white rounded-lg">
          1
        </div>
        <div className="w-full flex h-8 p-2 bg-secondary-100 items-center justify-center text-center text-secondary-500 rounded-lg">
          2
        </div>
        <div className="w-full flex h-8 p-2 bg-secondary-100 items-center justify-center text-center text-secondary-500 rounded-lg">
          3
        </div>
        <div className="w-full flex h-8 p-2 bg-secondary-100 items-center justify-center text-center text-secondary-500 rounded-lg">
          ...
        </div>
        <div className="w-full flex h-8 p-2 bg-secondary-100 items-center justify-center text-center text-secondary-500 rounded-lg">
          10
        </div>
        <div className="w-full flex h-8 p-2 bg-secondary-100 items-center justify-center text-center text-secondary-500 rounded-lg">
          <ChevronRight size={20} />
        </div>
      </div>
    </div>
  );
}

export function OrderTable() {
  return (
    <div className="flex flex-col mx-4 p-4 rounded-xl bg-white shadow-sm overflow-hidden">
      <div className="flex items-center gap-2">
        <div className="flex flex-1 justify-between items-center border border-neutral-300 rounded-full">
          <input
            type="search"
            className="w-full h-max p-3 flex-1 focus:outline-0"
            placeholder="Search"
          />
          <div className="p-3 text-neutral-500">
            <Search size={24} />
          </div>
        </div>
        <div className="flex w-1/2 justify-between items-center">
          <div className="p-3 border border-neutral-300 rounded-full">
            <Search size={24} />
          </div>
          <div className="p-3 bg-primary-500 text-secondary-500 rounded-full">
            <Plus size={24} />
          </div>
          <div className="p-3 border border-neutral-300 rounded-full">
            <Settings2 size={24} />
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="flex flex-col mt-4 ">
          <tr className="flex gap-2 justify-between text-left font-medium w-max *:text-nowrap p-4 rounded-lg bg-tertiary-100 text-tertiary-500">
            <td className="w-[200px]">Order ID</td>
            <td className="w-[200px]">Customer Name</td>
            <td className="w-[200px]">Product Ordered</td>
            <td className="w-[200px]">Totla Amount</td>
            <td className="w-[200px]">Payment Status</td>
            <td className="w-[200px]">Order Status</td>
            <td className="w-[200px]">Action</td>
          </tr>
          <tr className="flex gap-2 justify-between items-center text-left w-max *:text-nowrap p-4">
            <td className="w-[200px]">#ORD001</td>
            <td className="w-[200px]">John Doe</td>
            <td className="w-[200px]">
              Paracetamol(2)
              <br />
              Ibuprofen(1)
            </td>
            <td className="w-[200px]">$25.40</td>
            <td className="w-[200px]">
              <span className="inline-block bg-green-100 text-green-600 px-2 rounded-full">
                Paid
              </span>
            </td>
            <td className="w-[200px]">
              <span className="inline-block bg-green-100 text-green-600 px-2 rounded-full">
                Completed
              </span>
            </td>
            <td className="flex w-[200px] gap-4 items-center">
              <EyeIcon size={24} />
              <Trash2 size={24} />
              <SquareArrowOutUpRight size={24} />
            </td>
          </tr>
        </table>
      </div>
      <div className="flex items-center gap-2 p-4">
        <div className="w-full flex h-8 p-2 bg-neutral-100 items-center justify-center text-center text-neutral-500 rounded-lg">
          <ChevronLeft size={20} />
        </div>
        <div className="w-full flex h-8 p-2 bg-secondary-500 items-center justify-center text-center text-white rounded-lg">
          1
        </div>
        <div className="w-full flex h-8 p-2 bg-secondary-100 items-center justify-center text-center text-secondary-500 rounded-lg">
          2
        </div>
        <div className="w-full flex h-8 p-2 bg-secondary-100 items-center justify-center text-center text-secondary-500 rounded-lg">
          3
        </div>
        <div className="w-full flex h-8 p-2 bg-secondary-100 items-center justify-center text-center text-secondary-500 rounded-lg">
          ...
        </div>
        <div className="w-full flex h-8 p-2 bg-secondary-100 items-center justify-center text-center text-secondary-500 rounded-lg">
          10
        </div>
        <div className="w-full flex h-8 p-2 bg-secondary-100 items-center justify-center text-center text-secondary-500 rounded-lg">
          <ChevronRight size={20} />
        </div>
      </div>
    </div>
  );
}

export function RecentOrderTable() {
  return (
    <div className="flex flex-col mx-4 p-4 rounded-xl bg-white shadow-sm overflow-hidden">
      <div className="flex items-center gap-2">
        <div className="flex flex-1 justify-between items-center border border-neutral-300 rounded-full">
          <input
            type="search"
            className="w-full h-max p-3 flex-1 focus:outline-0"
            placeholder="Search"
          />
          <div className="p-3 text-neutral-500">
            <Search size={24} />
          </div>
        </div>
        <div className="flex w-1/2 justify-between items-center">
          <div className="p-3 border border-neutral-300 rounded-full">
            <Search size={24} />
          </div>
          <div className="p-3 bg-primary-500 text-secondary-500 rounded-full">
            <Plus size={24} />
          </div>
          <div className="p-3 border border-neutral-300 rounded-full">
            <Settings2 size={24} />
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="flex flex-col mt-4 ">
          <tr className="flex gap-2 justify-between text-left font-medium w-max *:text-nowrap p-4 rounded-lg bg-tertiary-100 text-tertiary-500">
            <td className="w-[200px]">Order ID</td>
            <td className="w-[200px]">Customer Name</td>
            <td className="w-[200px]">Product Ordered</td>
            <td className="w-[200px]">Totla Amount</td>
            <td className="w-[200px]">Payment Status</td>
            <td className="w-[200px]">Order Status</td>
            <td className="w-[200px]">Action</td>
          </tr>
          <tr className="flex gap-2 justify-between items-center text-left w-max *:text-nowrap p-4">
            <td className="w-[200px]">#ORD001</td>
            <td className="w-[200px]">John Doe</td>
            <td className="w-[200px]">
              Paracetamol(2)
              <br />
              Ibuprofen(1)
            </td>
            <td className="w-[200px]">$25.40</td>
            <td className="w-[200px]">
              <span className="inline-block bg-green-100 text-green-600 px-2 rounded-full">
                Paid
              </span>
            </td>
            <td className="w-[200px]">
              <span className="inline-block bg-green-100 text-green-600 px-2 rounded-full">
                Completed
              </span>
            </td>
            <td className="flex w-[200px] gap-4 items-center">
              <EyeIcon size={24} />
              <Trash2 size={24} />
              <SquareArrowOutUpRight size={24} />
            </td>
          </tr>
        </table>
      </div>
      <div className="flex items-center gap-2 p-4">
        <div className="w-full flex h-8 p-2 bg-neutral-100 items-center justify-center text-center text-neutral-500 rounded-lg">
          <ChevronLeft size={20} />
        </div>
        <div className="w-full flex h-8 p-2 bg-secondary-500 items-center justify-center text-center text-white rounded-lg">
          1
        </div>
        <div className="w-full flex h-8 p-2 bg-secondary-100 items-center justify-center text-center text-secondary-500 rounded-lg">
          2
        </div>
        <div className="w-full flex h-8 p-2 bg-secondary-100 items-center justify-center text-center text-secondary-500 rounded-lg">
          3
        </div>
        <div className="w-full flex h-8 p-2 bg-secondary-100 items-center justify-center text-center text-secondary-500 rounded-lg">
          ...
        </div>
        <div className="w-full flex h-8 p-2 bg-secondary-100 items-center justify-center text-center text-secondary-500 rounded-lg">
          10
        </div>
        <div className="w-full flex h-8 p-2 bg-secondary-100 items-center justify-center text-center text-secondary-500 rounded-lg">
          <ChevronRight size={20} />
        </div>
      </div>
    </div>
  );
}
