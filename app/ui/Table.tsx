import { EyeIcon, SquareArrowOutUpRight, Trash2 } from "lucide-react";

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
