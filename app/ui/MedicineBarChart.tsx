export default function MedicineBarChart() {
  const medicineBarData = [
    {
      id: 1,
      value: 80000,
      price: 5000,
      category: "chemical",
      img: "/med1.png",
    },
    {
      id: 2,
      value: 65000,
      price: 5000,
      category: "homopathy",
      img: "/med1.png",
    },
    { id: 3, value: 43000, price: 5000, category: "vitamin", img: "/med1.png" },
  ];
  return (
    <div className="flex flex-col mx-4 p-4 rounded-xl bg-white shadow-sm">
      <div className="flex justify-between items-center">
        <div className="font-semibold">Top Selling Medicine</div>
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
        <div className="flex flex-col gap-8">
          <div>100k</div>
          <div>80k</div>
          <div>60k</div>
          <div>40k</div>
          <div>20k</div>
          <div>10K</div>
          <div></div>
          <div></div>
        </div>
        <BarXAxis data={medicineBarData} />
      </div>
    </div>
  );
}

type BarData = {
  id: number;
  value: number;
  price: number;
  category: string;
  img: string;
};
interface BarXAxisProps {
  data: BarData[];
}

export function BarXAxis({ data }: BarXAxisProps) {
  return (
    <div id="bars" className="flex gap-2 flex-1 overflow-hidden">
      {data.map((item) => {
        return (
          <Bar
            key={item.id}
            id={item.id}
            value={item.value}
            price={item.price}
            category={item.category}
            img={item.img}
          />
        );
      })}
    </div>
  );
}

interface Barprops {
  id: number;
  value: number;
  price: number;
  category: string;
  img: string;
}

export function Bar({ id, value, price, category, img }: Barprops) {
  let percentage = (value / 100000) * 300;

  return (
    <div
      key={id}
      className="flex flex-col items-center gap-2 **:duration-200 **:ease-linear flex-1"
    >
      <div className="w-full h-[300px] rounded-full bg-neutral-100 flex flex-col justify-end overflow-hidden">
        <div
          className={`bg-primary-500 rounded-full flex flex-col items-center justify-start text-xs`}
          style={{ height: `${percentage}px` }}
        >
            <div></div>
        </div>
      </div>
      <div>{String(id).padStart(2, "0")}</div>
    </div>
  );
}
