import Navbar from "@/components/globals/navbar";
import Sidebar from "@/components/globals/sidebar";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/store/use-sidebar";

import { useRouter } from "next/router";
import { ReactNode, useEffect } from "react";
import React from "react";
import { useMediaQuery } from "usehooks-ts";
type Props = {
  children?: ReactNode;
};
const Layout = ({ children }: Props) => {
  const router = useRouter();

  const matches = useMediaQuery("(max-width: 1024px)");
  const { collapsed, onCollapse, onExpand } = useSidebar((state) => state);

  useEffect(() => {
    if (matches) {
      onCollapse();
    } else {
      onExpand();
    }
  }, [matches, onCollapse, onExpand]);

  const { pathname } = router;
  if (pathname === "/login" || pathname === "/register") {
    return (
      <>
        {children} <Toaster richColors toastOptions={{}} />
      </>
    );
  }

  return (
    <div
      className={cn(
        " h-full w-full transition-all duration-100 ease-in-out ",
        collapsed ? "pl-[52px]" : "pl-[192px]"
      )}
    >
      <Sidebar />
      <div className="flex flex-col  h-full">
        <Navbar />
        <main className="  gap-4 p-4 w-full h-full pr-10 ">
          {children}
          <Toaster />
        </main>
      </div>
    </div>
  );
};

export default Layout;
