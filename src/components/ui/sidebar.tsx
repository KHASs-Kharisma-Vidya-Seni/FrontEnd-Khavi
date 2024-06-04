import { Flame, Menu, Search, SlidersHorizontal } from "lucide-react";
import React, { useState } from "react";
import { TagPopuler } from "./forum";

export default function Sidebar() {
  const [isContentVisible, setContentVisible] = useState(false);

  const tagData = [
    { hashtag: "#haircare", posted: "1.067 diposting" },
    { hashtag: "#hair", posted: "837 diposting" },
    { hashtag: "#twintail", posted: "504 diposting" },
  ];

  const content = (
    <>
      <div className="h-[37.5rem]">
        <div className="relative flex w-full">
          <input
            type="text"
            placeholder="Cari Topik..."
            className="w-full rounded-[0.625rem] border border-gray-300 py-1.5 pl-3 pr-10 focus:outline-none"
          />
          <button className="absolute inset-y-0 right-4 flex items-center pr-3">
            <Search color="#c7c7c7" />
          </button>
        </div>
        <div className="relative w-full">
          <div className="space-y-4 p-2.5">
            <div className="flex gap-2 border-b-2 border-laser-300">
              <SlidersHorizontal color="#cdb16e" />
              <h1 className="w-fit text-2xl font-semibold text-laser-300">
                Filter
              </h1>
            </div>
            <div className="text-xl font-extrabold text-white">
              <a href="" className="mt-4 block">
                <h3>Terbaru dan Terkini</h3>
              </a>
              <a href="" className="mt-4 block">
                <h3>Sedang Tren</h3>
              </a>
              <a href="" className="mt-4 block">
                <h3>Terlama</h3>
              </a>
            </div>
          </div>
        </div>
        <div>
          <TagPopuler
            hashtags={tagData.map(data => data.hashtag)}
            posteds={tagData.map(data => data.posted)}
          />
        </div>
      </div>
    </>
  );

  return (
    <div className="w-24">
      <div className="fixed h-[37.5rem] place-items-center bg-shark-900 p-8 transition">
        <div>
          <button onClick={() => setContentVisible(!isContentVisible)}>
            <Menu color="#cdb16e" />
          </button>
        </div>
        {isContentVisible ? (
          content
        ) : (
          <div className="mt-24 flex flex-col gap-8">
            <SlidersHorizontal color="#cdb16e" />
            <Flame color="#cdb16e" />
          </div>
        )}
      </div>
    </div>
  );
}
