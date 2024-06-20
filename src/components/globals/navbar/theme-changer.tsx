import React from "react";
import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";

const ThemeChanger = () => {
  const { setTheme, theme } = useTheme();
  return (
    <>
      <div className="sticky bottom-0 flex flex-col p-2 px-4 py-4 mt-2 md:hidden lg:flex lg:flex-col">
        <Switch
          className=""
          checked={theme === "dark"}
          onCheckedChange={(checked) => {
            setTheme(checked ? "dark" : "light");
          }}
        />
      </div>
    </>
  );
};

export default ThemeChanger;
