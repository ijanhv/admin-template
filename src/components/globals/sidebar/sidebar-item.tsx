import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Hint } from "@/components/hint";
import { useSidebar } from "@/store/use-sidebar";
import { usePathname } from "next/navigation";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

interface SidebarItemProps {
  item: { label: string; icon: React.ReactNode; href: string; subItems: any[] };
  isExpanded: boolean;
  onClick: () => void;
}

const SidebarItem = ({ item, isExpanded, onClick }: SidebarItemProps) => {
  const pathname = usePathname();
  const { collapsed } = useSidebar((state) => state);

  return (
    <div>
      <div onClick={onClick} className="cursor-pointer">
        <Link href={item.href}>
          {collapsed ? (
            <Hint label={item.label} asChild align="start" side="right">
              <div
                className={cn(
                  "rounded-full flex items-center justify-center h-8 w-8",
                  pathname === item.href && "bg-primary text-background"
                )}
              >
                {item.icon}
              </div>
            </Hint>
          ) : (
            <div className="w-full gap-x-4 flex items-center gapx-2">
              <div
                className={cn(
                  "rounded-full flex items-center justify-center h-8 w-8",
                  pathname === item.href && "bg-primary text-background"
                )}
              >
                {item.icon}
              </div>
              {!collapsed && (
                <p
                  className={cn(
                    "text-sm font-semibold",
                    pathname === item.href && "text-primary"
                  )}
                >
                  {item.label}
                </p>
              )}
            </div>
          )}
        </Link>
      </div>
      <Collapsible open={isExpanded} onOpenChange={onClick}>
        <CollapsibleTrigger asChild>
          <div className="flex items-center justify-between w-full cursor-pointer">
            <span></span>
          </div>
        </CollapsibleTrigger>
        <CollapsibleContent>
          {!collapsed && item.subItems.length > 0 && (
            <div className="ml-3 mt-2 flex flex-col gap-y-3 border-l-2 border-gray-300 dark:border-gray-600 pl-5">
              {item.subItems.map((subItem, index) => (
                <Link key={index} href={subItem.href}>
                  <div
                    className={cn(
                      "flex items-center gap-x-2",
                      pathname === subItem.href && "text-primary"
                    )}
                  >
                    <div
                      className={cn(
                        "rounded-full flex items-center justify-center h-7 w-7",
                        pathname === subItem.href &&
                          "bg-primary text-background"
                      )}
                    >
                      {subItem.icon}
                    </div>
                    <p className="text-sm">{subItem.label}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default SidebarItem;