import React from "react";
import { Flame } from "lucide-react";

export const TagPopuler = ({ hashtags, posteds }: { hashtags: string[]; posteds: string[] }) => {
  const pairedTags = hashtags.map((tag, index) => ({
    hashtag: tag,
    posted: posteds[index],
  }));

  return (
    <div className="relative w-full rounded-[0.625rem] bg-shark-900 p-2.5">
      <div className="flex flex-col gap-1 p-2.5">
        <div className="flex w-fit gap-2 border-b-2 border-laser-300">
          <Flame color="#cdb16e" />
          <h1 className=" text-xl font-semibold text-laser-300">Tag Populer</h1>
        </div>
        <div className="">
          {pairedTags.map(({ hashtag, posted }, index) => (
            <div key={index}>
              <a href="">
                <h3 className="text-lg font-normal text-white">{hashtag}</h3>
              </a>
              <h3 className="text-xs font-normal text-[#9C9C9C]">{posted}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
