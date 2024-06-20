import { Hint } from "@/components/hint";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/store/use-sidebar";
import { ArrowLeftFromLine, ArrowRightFromLine, Triangle } from "lucide-react";
import React from "react";

const Toggle = () => {
  const { collapsed, onCollapse, onExpand } = useSidebar((state) => state);
  const label = collapsed ? "Expand" : "Collapse";
  return (
    <div className="border-b p-2 h-[60px] border-gray-200 dark:border-neutral-800 ">
      {collapsed && (
        <div className="hidden lg:flex w-full items-center justify-center  ">
          <Hint label={label} side="right" asChild align="center">
            <Button variant="link" className="h-auto p-2" onClick={onExpand}>
              <ArrowRightFromLine className="h-4 w-4 " />
            </Button>
          </Hint>
        </div>
      )}
      {!collapsed && (
        <div className="  flex items-center w-full ">
          <Triangle className="size-5 fill-foreground ml-2" />
          <Hint label={label} side="right" asChild align="center">
            <Button
              variant="link"
              onClick={onCollapse}
              className="h-auto p-2 ml-auto"
            >
              <ArrowLeftFromLine className="h-4 w-4 " />
            </Button>
          </Hint>
        </div>
      )}
    </div>
  );
};

export default Toggle;
