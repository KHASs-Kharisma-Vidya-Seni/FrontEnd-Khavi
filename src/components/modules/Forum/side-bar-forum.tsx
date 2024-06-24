// import React from "react";
import { SlidersHorizontal, Search } from "lucide-react";
import { Drawer, DrawerContent, DrawerTrigger } from "../../ui/drawer";

import { cn } from "@/lib/utils";
import { useScrollPosition } from "@/hooks/use-scroll-position";

export function SidebarForum() {
  
  const isScrolled = useScrollPosition();
  return (
    <Drawer direction="left">
      <DrawerTrigger>
        <div className={cn(
          "flex flex-col gap-8",
          isScrolled ? "mt-44" : "mt-20"
        )}>
          <SlidersHorizontal color="#cdb16e" size={20} />
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <div className="flex flex-col gap-4 py-24 pl-4 pr-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Cari Topik..."
              className="w-full rounded-[0.625rem] border border-gray-300 py-1.5 pl-3 pr-10 text-sm focus:outline-none"
            />
            <button className="absolute inset-y-0 right-0 flex items-center pr-3">
              <Search color="#c7c7c7" size={20} />
            </button>
          </div>
          <div>
            <div className="flex flex-col gap-1 p-2.5">
              <div className="flex w-fit gap-2 border-b-2 border-laser-300">
                <SlidersHorizontal color="#cdb16e" size={20} />
                <h1 className="text-lg font-semibold text-laser-300">Filter</h1>
              </div>
              <div className="text-md flex flex-col gap-1 font-extrabold text-white">
                <a href="">
                  <h3>Terbaru dan Terkini</h3>
                </a>
                <a href="">
                  <h3>Sedang Tren</h3>
                </a>
                <a href="">
                  <h3>Terlama</h3>
                </a>
              </div>
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
