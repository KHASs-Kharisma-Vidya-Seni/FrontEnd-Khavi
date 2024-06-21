import React from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { TagPopuler } from "@/components/modules/Forum/TagPopuler";

interface TagData {
  hashtag: string;
  posted: string;
}

export const LeftBar = ({ tagData }: { tagData: TagData[] }) => (
  <div className="w-62 static fixed left-24 top-[8rem] space-y-3.5">
    <div className="relative w-full rounded-[0.625rem] bg-shark-900 p-5">
      <input
        type="text"
        placeholder="Cari Topik..."
        className="w-full rounded-[0.625rem] border border-gray-300 py-1.5 pl-3 pr-10 focus:outline-none"
      />
      <button className="absolute inset-y-0 right-4 flex items-center pr-3">
        <Search color="#c7c7c7" />
      </button>
    </div>
    <div className="relative w-full rounded-[0.625rem] bg-shark-900 p-2.5">
      <div className="flex flex-col gap-1 p-2.5">
        <div className="flex w-fit gap-2 border-b-2 border-laser-300">
          <SlidersHorizontal color="#cdb16e" />
          <h1 className="text-xl font-semibold text-laser-300">Filter</h1>
        </div>
        <div className="flex flex-col gap-1 text-lg font-extrabold text-white">
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
    <div>
      <TagPopuler
        hashtags={tagData.map((data: TagData) => data.hashtag)}
        posteds={tagData.map((data: TagData) => data.posted)}
      />
    </div>
  </div>
);
