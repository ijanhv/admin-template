import React from "react";
import ThemeChanger from "./theme-changer";

import User from "./user";
import Search from "./search";
const Navbar = () => {
  return (
    <header className="sticky top-0 z-10 flex h-[60px] justify-between w-full items-center gap-1 border-b border-gray-200 dark:border-neutral-800 bg-background px-4">
      <Search />

      <div className="w-full flex items-center justify-end gap-2">
        <ThemeChanger />
        <User />
      </div>
    </header>
  );
};

export default Navbar;
