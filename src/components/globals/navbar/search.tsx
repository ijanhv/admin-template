import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import React from "react";

const Search = () => {
  return (
    <div className="relative ml-auto flex-1 md:grow-0 ">
      <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        type="search"
        placeholder="Search..."
        className=" rounded-lg bg-background pl-8  w-[200px] lg:w-[336px]"
      />
    </div>
  );
};

export default Search;
