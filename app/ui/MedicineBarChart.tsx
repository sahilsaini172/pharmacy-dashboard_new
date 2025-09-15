import Image from "next/image";

export default function MedicineBarChart() {
  const medicineBarData = [
    {
      id: 1,
      name: "Paracetamol",
      description: "Fiver and pain",
      value: 80000,
      width: 2000,
      height: 2000,
      price: 5000,
      category: "chemical",
      img: "/medicine/peracetamol.png",
    },
    {
      id: 2,
      name: "Disprin",
      description: "Cure Headache",
      value: 65000,
      width: 1200,
      height: 1200,
      price: 5000,
      category: "homopathy",
      img: "/medicine/disprin.png",
    },
    {
      id: 3,
      name: "Luliconazonle",
      description: "Rashes",
      value: 43000,
      width: 1000,
      height: 687,
      price: 5000,
      category: "vitamin",
      img: "/medicine/luliconazole.png",
    },
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
  description: string;
  name: string;
  value: number;
  width: number;
  height: number;
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
            description={item.description}
            key={item.id}
            id={item.id}
            name={item.name}
            value={item.value}
            width={item.width}
            height={item.height}
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
  name: string;
  width: number;
  height: number;
  description: string;
  price: number;
  category: string;
  img: string;
}

export function Bar({
  id,
  value,
  name,
  description,
  width,
  height,
  price,
  category,
  img,
}: Barprops) {
  const percentage = (value / 100000) * 300;
  const color = () => {
    switch (category) {
      case "chemical":
        return "bg-black text-white";
      case "homopathy":
        return "bg-primary-500 text-secondary-500";
      case "vitamin":
        return "bg-orange-500 text-white";
      default:
        return "bg-secondary-500 text-white";
    }
  };
  return (
    <div
      key={id}
      className="flex flex-col items-center gap-2 **:duration-200 **:ease-linear flex-1 overflow-x-scroll max-w-[200px]"
    >
      <div className="w-full h-[300px] rounded-full bg-neutral-100 flex flex-col justify-end overflow-hidden">
        <div
          className={`${color()} rounded-full flex flex-col items-center justify-end text-xs overflow-hidden`}
          style={{ height: `${percentage}px` }}
        >
          <div className="flex flex-row-reverse justify-center items-center gap-2 -rotate-90 py-14 px-2">
            <div className="flex flex-col gap-2 text-nowrap">
              <p className="font-bold">{name}</p>
              <p>{description}</p>
            </div>
            <Image
              src={img}
              alt={name}
              width={width}
              height={height}
              className="size-4/5 object-cover aspect-square rounded-full"
            />
          </div>
        </div>
      </div>
      <div className="font-medium">{"$" + price.toLocaleString()}</div>
    </div>
  );
}
