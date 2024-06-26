import React, { useState } from "react";
import { SlidersHorizontal } from "lucide-react";

interface ForumFilterSidebarProps {
  onFilterChange: (filterOption: string) => void;
}

export const ForumFilterSidebar: React.FC<ForumFilterSidebarProps> = ({ onFilterChange }) => {
  const [filter, setFilter] = useState<string>("newest");

  const handleFilterChange = (filterOption: string) => {
    setFilter(filterOption);
    onFilterChange(filterOption);
  };

  return (
    <div className="w-62 fixed left-5 top-[8rem] space-y-3.5">
      <div className="relative w-full rounded-lg bg-gray-900 p-3">
        <div className="flex flex-col gap-1 p-3">
          <div className="flex items-center gap-2 border-b-2 border-yellow-500">
            <SlidersHorizontal size={20} strokeWidth={1.5} color="#cdb16e" />
            <h1 className="text-xl font-semibold text-yellow-500">Filter</h1>
          </div>
          <div className="flex flex-col gap-1 text-lg font-bold text-white">
            <a href="#" onClick={() => handleFilterChange("newest")}>
              <h3 className={`cursor-pointer ${filter === "newest" ? "text-yellow-500" : ""}`}>Terbaru dan Terkini</h3>
            </a>
            <a href="#" onClick={() => handleFilterChange("oldest")}>
              <h3 className={`cursor-pointer ${filter === "oldest" ? "text-yellow-500" : ""}`}>Terlama</h3>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
