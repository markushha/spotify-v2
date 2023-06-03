"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import SidebarItem from "./SidebarItem";
import Box from "./Box";

interface ISidebarProps {
  children: React.ReactNode;
}

function Sidebar({ children }: ISidebarProps) {
  const pathname = usePathname();

  const routes = useMemo(
    () => [
      {
        icon: HiHome,
        label: "Home",
        href: "/",
        active: pathname !== "/search",
      },
      {
        icon: BiSearch,
        label: "Search",
        href: "/search",
        active: pathname === "/search",
      },
    ],
    [pathname]
  );

  return (
    <div className="flex h-full">
      <div className="hidden md:flex flex-col gap-y-2 bg-black h-full w-[300px] p-2">
        <Box>
          <div
            className="
              flex
              flex-col
              gap-y-4
              px-5
              px-4
            "
          >
            {routes.map((route) => (
              <SidebarItem 
                key={route.label}
                {...route}
              />
            ))}
          </div>
        </Box>
        <Box className="overflow-y-auto h-full">
          Song Library
        </Box>
      </div>
    </div>
  );
}

export default Sidebar;
