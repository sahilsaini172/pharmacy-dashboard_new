"use client";

const cells = [
  { id: 1, day: "Fri", time: "11am", value: 2000 },
  { id: 2, day: "Tue", time: "1pm", value: 0 },
  { id: 3, day: "Sun", time: "9am", value: 3000 },
  { id: 4, day: "Wed", time: "12pm", value: 1000 },
  { id: 5, day: "Mon", time: "2pm", value: 500 },
  { id: 6, day: "Thu", time: "10am", value: 1000 },
  { id: 7, day: "Sat", time: "9am", value: 0 },
  { id: 8, day: "Fri", time: "2pm", value: 500 },
  { id: 9, day: "Wed", time: "1pm", value: 2000 },
  { id: 10, day: "Tue", time: "12pm", value: 3000 },
  { id: 11, day: "Sun", time: "10am", value: 0 },
  { id: 12, day: "Mon", time: "11am", value: 500 },
  { id: 13, day: "Thu", time: "1pm", value: 2000 },
  { id: 14, day: "Sat", time: "12pm", value: 1000 },
  { id: 15, day: "Fri", time: "9am", value: 3000 },
  { id: 16, day: "Wed", time: "2pm", value: 0 },
  { id: 17, day: "Mon", time: "10am", value: 2000 },
  { id: 18, day: "Sun", time: "1pm", value: 500 },
  { id: 19, day: "Tue", time: "11am", value: 1000 },
  { id: 20, day: "Thu", time: "9am", value: 3000 },
  { id: 21, day: "Sat", time: "10am", value: 0 },
  { id: 22, day: "Fri", time: "1pm", value: 2000 },
  { id: 23, day: "Wed", time: "11am", value: 500 },
  { id: 24, day: "Mon", time: "12pm", value: 0 },
  { id: 25, day: "Sun", time: "2pm", value: 3000 },
  { id: 26, day: "Tue", time: "9am", value: 1000 },
  { id: 27, day: "Thu", time: "2pm", value: 500 },
  { id: 28, day: "Sat", time: "1pm", value: 2000 },
  { id: 29, day: "Fri", time: "10am", value: 0 },
  { id: 30, day: "Wed", time: "9am", value: 1000 },
  { id: 31, day: "Mon", time: "1pm", value: 500 },
  { id: 32, day: "Sun", time: "12pm", value: 3000 },
  { id: 33, day: "Tue", time: "2pm", value: 0 },
  { id: 34, day: "Thu", time: "11am", value: 2000 },
  { id: 35, day: "Sat", time: "2pm", value: 1000 },
  { id: 36, day: "Fri", time: "12pm", value: 500 },
  { id: 37, day: "Wed", time: "10am", value: 0 },
  { id: 38, day: "Mon", time: "9am", value: 3000 },
  { id: 39, day: "Sun", time: "11am", value: 2000 },
  { id: 40, day: "Tue", time: "1pm", value: 0 },
  { id: 41, day: "Thu", time: "12pm", value: 500 },
  { id: 42, day: "Sat", time: "9am", value: 2000 },
  { id: 43, day: "Fri", time: "11am", value: 0 },
  { id: 44, day: "Wed", time: "12pm", value: 1000 },
  { id: 45, day: "Mon", time: "2pm", value: 3000 },
  { id: 46, day: "Sun", time: "10am", value: 500 },
  { id: 47, day: "Tue", time: "9am", value: 0 },
  { id: 48, day: "Thu", time: "1pm", value: 2000 },
  { id: 49, day: "Sat", time: "10am", value: 1000 },
];

const matrix = [];
for (let i = 0; i < 7; i++) {
  matrix.push(cells.slice(i * 7, i * 7 + 7));
}

console.log(matrix);

interface CellDataProp {
  id: number;
  day: string;
  time: string;
  value: number;
}

export default function OBTChart() {
  return (
    <div className="flex flex-col mx-4 p-4 rounded-xl bg-white shadow-sm">
      <div className="flex justify-between items-center">
        <h2 className="font-semibold">Orders By Time</h2>
      </div>
      <div className="flex items-center justify-between mt-4 text-sm text-neutral-500">
        <div className="flex items-center gap-1">
          <span className="size-4 rounded-full bg-tertiary-100"></span>500&gt;
        </div>
        <div className="flex items-center gap-1">
          <span className="size-4 rounded-full bg-tertiary-300"></span>1,000&gt;
        </div>
        <div className="flex items-center gap-1">
          <span className="size-4 rounded-full bg-tertiary-500"></span>2,000&gt;
        </div>
        <div className="flex items-center gap-1">
          <span className="size-4 rounded-full bg-tertiary-700"></span>3,000&gt;
        </div>
      </div>
      <div className="flex gap-4 text-sm text-neutral-500 mt-4">
        <div className="flex flex-col gap-4 *:w-[50px]">
          <span>09 am</span>
          <span>10 am</span>
          <span>11 am</span>
          <span>12 pm</span>
          <span>01 pm</span>
          <span>02 pm</span>
          <span>03 pm</span>
          <span></span>
        </div>
        <div className="flex flex-1 flex-col gap-1">
          <div
            className={`grid h-full grid-cols-7 grid-rows-7 *:rounded-lg gap-1`}
          >
            <div className="bg-neutral-100"></div>
            <div className="bg-neutral-100"></div>
            <div className="bg-neutral-100"></div>
            <div className="bg-neutral-100"></div>
            <div className="bg-neutral-100"></div>
            <div className="bg-neutral-100"></div>
            <div className="bg-neutral-100"></div>
            <div className="bg-neutral-100"></div>
            <div className="bg-neutral-100"></div>
            <div className="bg-neutral-100"></div>
            <div className="bg-neutral-100"></div>
            <div className="bg-neutral-100"></div>
            <div className="bg-neutral-100"></div>
            <div className="bg-neutral-100"></div>
            <div className="bg-neutral-100"></div>
            <div className="bg-neutral-100"></div>
            <div className="bg-neutral-100"></div>
            <div className="bg-neutral-100"></div>
            <div className="bg-neutral-100"></div>
            <div className="bg-neutral-100"></div>
            <div className="bg-neutral-100"></div>
            <div className="bg-neutral-100"></div>
            <div className="bg-neutral-100"></div>
            <div className="bg-neutral-100"></div>
            <div className="bg-neutral-100"></div>
            <div className="bg-neutral-100"></div>
            <div className="bg-neutral-100"></div>
            <div className="bg-neutral-100"></div>
            <div className="bg-neutral-100"></div>
            <div className="bg-neutral-100"></div>
            <div className="bg-neutral-100"></div>
            <div className="bg-neutral-100"></div>
            <div className="bg-neutral-100"></div>
            <div className="bg-neutral-100"></div>
            <div className="bg-neutral-100"></div>
            <div className="bg-neutral-100"></div>
            <div className="bg-neutral-100"></div>
            <div className="bg-neutral-100"></div>
            <div className="bg-neutral-100"></div>
            <div className="bg-neutral-100"></div>
            <div className="bg-neutral-100"></div>
            <div className="bg-neutral-100"></div>
            <div className="bg-neutral-100"></div>
            <div className="bg-neutral-100"></div>
            <div className="bg-neutral-100"></div>
            <div className="bg-neutral-100"></div>
            <div className="bg-neutral-100"></div>
            <div className="bg-neutral-100"></div>
            <div className="bg-neutral-100"></div>
          </div>
          <div className="flex justify-between items-center">
            <span>Sat</span>
            <span>Sun</span>
            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span>Fri</span>
          </div>
        </div>
      </div>
    </div>
  );
}
