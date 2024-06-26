import { SlidersHorizontal } from "lucide-react";
import { Drawer, DrawerContent, DrawerTrigger } from "../../ui/drawer";

import { cn } from "@/lib/utils";
import { useScrollPosition } from "@/hooks/use-scroll-position";
import { ForumFilterSidebar } from "./forum-filter-sidebar";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function SidebarForum({ onFilterChange }: { onFilterChange: any }) {
  const isScrolled = useScrollPosition();
  return (
    <Drawer direction="left">
      <DrawerTrigger>
        <div className={cn("flex flex-col gap-8", isScrolled ? "mt-44" : "mt-20")}>
          <SlidersHorizontal color="#cdb16e" size={20} />
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <div className="flex flex-col gap-4 py-24 pl-4 pr-8">
          <ForumFilterSidebar onFilterChange={onFilterChange} />
        </div>
      </DrawerContent>
    </Drawer>
  );
}
