export default function List() {
  return (
    <div className="flex flex-col mx-4 p-4 rounded-xl bg-white shadow-sm">
      <div className="flex justify-between items-center">
        <h2 className="font-semibold">Top Products</h2>
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
      <ul className="list-none marker:hidden flex flex-col gap-2 mt-4">
        <ListItem src="./medicine/disprin.png" />
        <ListItem src="./medicine/disprin.png" />
        <ListItem src="./medicine/disprin.png" />
      </ul>
    </div>
  );
}

interface ListItemProp {
  src: string;
}

export function ListItem({ src }: ListItemProp) {
  return (
    <li className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <img src={src} alt="" className="size-12 aspect-square" />
        <div className="flex flex-col font-medium">
          <p>Disprin</p>
          <p className="font-normal text-sm text-neutral-500">359 sold</p>
        </div>
      </div>
      <p className="font-medium">$356</p>
    </li>
  );
}
