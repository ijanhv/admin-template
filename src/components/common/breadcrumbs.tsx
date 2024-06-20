import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Breadcrumbs = ({ title }: { title: string }) => {
  const router = useRouter();
  const { pathname } = router;

  const paths = pathname.split("/").filter((path) => path !== "");

  return (
    <div className="flex  items-center flex-wrap text-base">
      <Link
        href="/"
        className="text-foreground/50 capitalize hover:text-foreground transition-colors duration-300"
      >
        Home
      </Link>
      {paths.map((path, index) => (
        <span key={index} className="flex ">
          <span className="mx-1  text-foreground/50">
            <ChevronRight />
          </span>
          <Link
            href={`/${paths.slice(0, index + 1).join("/")}`}
            className=" text-foreground/50 capitalize hover:text-foreground transition-colors duration-300"
          >
            {index === paths.length - 1 ? title : path}
          </Link>
        </span>
      ))}
    </div>
  );
};

export default Breadcrumbs;
