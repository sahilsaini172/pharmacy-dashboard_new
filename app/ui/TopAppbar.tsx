"use client";

import {
  Bell,
  ChartSpline,
  ChevronDown,
  CircleDollarSign,
  GitCompareArrows,
  LayoutDashboard,
  Menu,
  Package,
  Settings,
  ShoppingCart,
  Users,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MouseEventHandler, useState } from "react";
export default function TopAppbar() {
  const [open, setOpen] = useState(false);

  function handleMenu() {
    setOpen(!open);
  }

  return (
    <div className="flex items-center justify-between bg-white p-2 shadow **:duration-200 **:ease-linear">
      {open ? (
        <MenuOpen onClick={handleMenu} />
      ) : (
        <Menu onClick={handleMenu} size={20} />
      )}
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

interface MenuOpenProp {
  onClick: MouseEventHandler;
}

function MenuOpen({ onClick }: MenuOpenProp) {
  const pathname = usePathname();
  const links = [
    { name: "Home", href: "/", icon: LayoutDashboard },
    { name: "Products", href: "/products", icon: Package },
    { name: "Orders", href: "/orders", icon: ShoppingCart },
    { name: "Sales", href: "/sales", icon: ChartSpline },
    { name: "Customers", href: "/customers", icon: Users },
    { name: "Payments", href: "/payments", icon: CircleDollarSign },
  ];
  return (
    <div className="relative">
      <X onClick={onClick} size={20} />
      <div className="absolute flex flex-col gap-1 p-2 my-2 w-[200px] border border-black/30 bg-white rounded-xl ">
        {links.map((link) => {
          const LinkIcon = link.icon;
          return (
            <Link
              onClick={onClick}
              key={link.name}
              href={link.href}
              className={`flex gap-2 items-center text-sm font-light py-2 px-2 rounded-lg ${
                pathname == link.href
                  ? "bg-primary-500 text-secondary-500 font-medium"
                  : "hover:bg-primary-100"
              }`}
            >
              <LinkIcon size={16} />
              <p>{link.name}</p>
            </Link>
          );
        })}
        <Link
          onClick={onClick}
          key="settings"
          href="/settings"
          className={`flex gap-2 items-center text-sm font-light py-2 px-2 rounded-lg mt-8 ${
            pathname == "/settings"
              ? "bg-primary-500 text-secondary-500 font-medium"
              : "hover:bg-primary-100"
          }`}
        >
          <Settings size={16} />
          <p>Settings</p>
        </Link>
      </div>
    </div>
  );
}
