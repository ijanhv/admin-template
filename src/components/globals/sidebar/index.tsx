import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/store/use-sidebar";
import {
  Blocks,
  CreditCard,
  LayoutDashboard,
  LifeBuoy,
  Package,
  Plus,
  SquareUser,
  Truck,
  Users,
} from "lucide-react";

import SidebarItem from "./sidebar-item";
import Toggle from "./toggle";

const Sidebar = () => {
  const { collapsed } = useSidebar((state) => state);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const handleItemClick = (label: string) => {
    setExpandedItem(expandedItem === label ? null : label);
  };

  const sidebarItems = [
    {
      label: "Dashboard",
      icon: <LayoutDashboard className="size-5" />,
      href: "/",
      subItems: [],
    },
    {
      label: "Category",
      icon: <Blocks className="size-5" />,
      href: "/category",
      subItems: [],
    },
    {
      label: "Products",
      icon: <Package className="size-5" />,
      href: "/products",
      subItems: [
        {
          label: "Add Product",
          href: "/products/add",
          icon: <Plus className="size-5" />,
        },
      ],
    },
    {
      label: "Customers",
      href: "/customers",
      icon: <Users className="size-5" />,
      subItems: [],
    },
    {
      label: "Orders",
      href: "/orders",
      icon: <Package className="size-5" />,
      subItems: [],
    },
    {
      label: "Payments",
      href: "/payments",
      icon: <CreditCard className="size-5" />,
      subItems: [],
    },
    {
      label: "Shipment",
      href: "/shipment",
      icon: <Truck className="size-5" />,
      subItems: [],
    },
  ];

  return (
    <aside
    className={cn(
      "inset-y fixed left-0  z-20 flex h-full flex-col border-r border-gray-200 dark:border-neutral-800 transition-transform duration-300",
      collapsed ? "w-[60px]" : "w-48"
    )}
  >
    <Toggle />
    <nav className="grid pt-6 gap-4 p-3 justify-center lg:justify-start items-center w-full ">
      {sidebarItems.map((item, index) => (
        <SidebarItem
          key={index}
          item={item}
          isExpanded={expandedItem === item.label}
          onClick={() => handleItemClick(item.label)}
        />
      ))}
    </nav>
    <nav className="mt-auto grid gap-1 p-2">
      <SidebarItem
        item={{
          label: "Support",
          icon: <LifeBuoy />,
          href: "/support",
          subItems: [],
        }}
        isExpanded={expandedItem === "Support"}
        onClick={() => handleItemClick("Support")}
      />
      <SidebarItem
        item={{
          label: "Profile",
          icon: <SquareUser />,
          href: "/profile",
          subItems: [],
        }}
        isExpanded={expandedItem === "Profile"}
        onClick={() => handleItemClick("Profile")}
      />
    </nav>
  </aside>
  );
};

export default Sidebar;
