"use client";
import { useState } from "react";

export default function BarChart() {
  const barData = [
    { id: 1, value: 23000 },
    { id: 2, value: 18000 },
    { id: 3, value: 21400 },
    { id: 4, value: 14004 },
    { id: 5, value: 22124 },
    { id: 6, value: 16982 },
    { id: 7, value: 23233 },
    { id: 8, value: 23912 },
    { id: 9, value: 11092 },
    { id: 10, value: 9823 },
    { id: 11, value: 8783 },
    { id: 12, value: 24372 },
  ];

  return (
    <div className="flex flex-col mx-4 p-4 rounded-xl bg-white shadow-sm">
      <div className="flex justify-between items-center">
        <h2 className="font-semibold">Sales Analytics</h2>
        <select
          name=""
          id=""
          className="text-sm p-1 rounded-lg border border-neutral-300"
        >
          <option value="this month" disabled>
            This Month
          </option>
          <option value="this month">This Week</option>
        </select>
      </div>
      <div className="flex mt-4 text-sm gap-4">
        <div className="flex flex-col gap-6">
          <div>25k</div>
          <div>20k</div>
          <div>15k</div>
          <div>20k</div>
          <div>5k</div>
          <div></div>
          <div></div>
        </div>
        <BarXAxis data={barData} />
      </div>
    </div>
  );
}
type BarData = { id: number; value: number };
interface BarXAxisProps {
  data: BarData[];
}

export function BarXAxis({ data }: BarXAxisProps) {
  return (
    <div id="bars" className="flex gap-2 overflow-x-scroll overflow-visible">
      {data.map((item) => {
        return <Bar key={item.id} id={item.id} value={item.value} />;
      })}
    </div>
  );
}

interface Barprops {
  id: number;
  value: number;
}

export function Bar({ id, value }: Barprops) {
  const [isHovered, setIsHovered] = useState(false);
  let percentage = (value / 25000) * 200;
  return (
    <div
      key={id}
      className="flex flex-col items-center gap-2 **:duration-200 **:ease-linear "
    >
      <div className="w-[50px] h-[200px] rounded-full bg-neutral-100 flex flex-col justify-end">
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`${
            isHovered ? "bg-primary-500" : "bg-secondary-500"
          } rounded-full flex flex-col items-center justify-start text-xs`}
          style={{ height: `${percentage}px` }}
        >
          {isHovered && (
            <span className="relative top-1/2 bottom-1/2 font-semibold text-secondary-500">
              {"$" + value.toLocaleString()}
            </span>
          )}
        </div>
      </div>
      <div>{String(id).padStart(2, "0")}</div>
    </div>
  );
}
