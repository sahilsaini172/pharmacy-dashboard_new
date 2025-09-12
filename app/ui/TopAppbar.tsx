import { ArrowBigDown, Bell, ChevronDown, Menu } from "lucide-react";
import Image from "next/image";
export default function TopAppbar() {
  return (
    <div className="flex items-center justify-between bg-white p-2 shadow">
      <Menu size={20} />
      <div className="flex items-center gap-2">
        <span className="p-2 size-10 flex items-center justify-center rounded-full border border-neutral-300">
          <Bell size={20} />
        </span>
        <div className="flex items-center gap-2 ">
          <Image
            src="/profile.png"
            width={580}
            height={800}
            alt="profile_pic"
            className="aspect-square object-cover size-10 rounded-full"
          />
          <ChevronDown size={16} />
        </div>
      </div>
    </div>
  );
}
