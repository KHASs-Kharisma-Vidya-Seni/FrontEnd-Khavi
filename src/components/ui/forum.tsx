import {
  ChevronDown,
  Ellipsis,
  Heart,
  MessageCircle,
  Flame,
  Menu,
  Search,
  SlidersHorizontal,
  ImagePlus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { Drawer, DrawerContent, DrawerTrigger } from "./drawer";

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

export const Card = ({
  profileImage,
  name,
  text,
  image,
  hashtags,
  comments,
  likes,
  showComments,
  toggleComments,
  commentData,
}: {
  profileImage: string;
  name: string;
  text: string;
  image: string;
  hashtags: string[];
  comments: number;
  likes: number;
  showComments: boolean;
  toggleComments: () => void;
  commentData: {
    id: number;
    profileImage: string;
    name: string;
    comment: string;
    likes: number;
  }[];
}) => {
  return (
    <div className="mt-5 flex w-full flex-col items-center">
      <div className="item-center flex w-[47.5rem] flex-col rounded-[0.625rem] bg-[#2E323A] pb-5 pt-5">
        <div className="flex w-full justify-center gap-2.5">
          {/* Photo Profile */}
          <figure>
            <img src={profileImage} alt="Profile" />
          </figure>
          <div className="w-[39.2rem]">
            {/* Name */}
            <h1 className="mb-2.5 text-xl font-bold text-laser-300">{name}</h1>
            {/* Text */}
            <p className="text-wild-sand-50">{text}</p>
            {/* Photo */}
            {image && <img src={image} alt=" " className="mt-2.5" />}
            <div className="mt-2.5 w-fit rounded-[0.625rem] bg-laser-300 px-2.5">
              {/* Hashtags */}
              {hashtags.map((hashtag, index) => (
                <h5 key={index}>#{hashtag}</h5>
              ))}
            </div>
            <div className="mt-2.5 flex gap-1">
              <MessageCircle color="#cdb16e" />
              {/* Comment */}
              <h6 className="mr-4 text-white">{comments}</h6>
              <Heart color="#cdb16e" />
              {/* Like */}
              <h6 className="text-white">{likes}</h6>
            </div>
            <div className="mt-4 flex cursor-pointer gap-1" onClick={toggleComments}>
              <h6 className="text-white">Balasan</h6>
              <ChevronDown color="#ffffff" />
            </div>
            {showComments && (
              <div className="mt-4 space-y-2">
                {commentData.map(comment => (
                  <div key={comment.id} className="rounded-md p-2">
                    <div className="flex flex-col gap-2">
                      <div className="flex gap-2">
                        <figure>
                          <img src={comment.profileImage} alt="" className="h-8 w-8 rounded-full" />
                        </figure>
                        <div>
                          <h5 className="py-1 text-xl font-bold text-laser-300">{comment.name}</h5>
                        </div>
                      </div>

                      <div>
                        <p className="pl-10 text-sm text-wild-sand-50">{comment.comment}</p>
                      </div>
                    </div>
                    <div className="ml-10 mt-1 flex gap-1">
                      <Heart color="#cdb16e" />
                      <h6 className="text-white">{comment.likes}</h6>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <Ellipsis color="#f4f4f4" />
        </div>
      </div>
    </div>
  );
};

export function ResponsivePost() {
  return (
    <div className=" flex h-full gap-2 border-t-[0.1875rem] border-shark-800 bg-shark-900 p-2.5">
      <figure>
        <img src="/images/Ellipse-2.png" alt="" />
      </figure>
      <div className="flex flex-col gap-2">
        <input
          type="text"
          placeholder="Let's share what you think about hairstyles ..."
          className="w-52 truncate rounded py-1.5 pl-2.5 pr-3 text-[0.74rem] focus:outline-none"
        />
        <div className="flex gap-[0.38rem]">
          <ImagePlus color="#cdb16e" size={16} />
          <h1 className="text-xs font-medium text-white">Photo</h1>
        </div>
      </div>
      <Button variant="responsive_post" size="responsive_post">
        Post
      </Button>
    </div>
  );
}

export const ResponsiveCard = ({
  profileImage,
  name,
  text,
  image,
  hashtags,
  comments,
  likes,
  commentData,
}: {
  profileImage: string;
  name: string;
  text: string;
  image?: string;
  hashtags: string[];
  comments: number;
  likes: number;
  commentData: {
    id: number;
    postId: number;
    profileImage: string;
    name: string;
    comment: string;
    likes: number;
  }[];
}) => {
  const [showComments, setShowComments] = useState(false);

  const toggleComments = () => {
    setShowComments(!showComments);
  };

  return (
    <div className="flex h-full border-t-[0.1875rem] border-shark-800 bg-shark-900 p-2.5">
      <div className="flex justify-center gap-2.5">
        <figure>
          <img src={profileImage} alt="Profile" />
        </figure>
        <div className="">
          <div className="flex gap-6">
            <h1 className="mb-2.5 w-48 text-sm font-bold text-laser-300">{name}</h1>
            <Ellipsis color="#f4f4f4" />
          </div>
          <p className="w-64 text-xs text-wild-sand-50">{text}</p>
          {image && <img src={image} alt=" " className="mt-2.5 w-60" />}
          <div className="mt-2.5 w-fit rounded-[0.625rem] bg-laser-300 px-2.5">
            {hashtags.map((hashtag, index) => (
              <h5 key={index} className="text-xs">
                #{hashtag}
              </h5>
            ))}
          </div>
          <div className="mt-2.5 flex gap-1">
            <MessageCircle color="#cdb16e" size={16} />
            <h6 className="mr-4 text-xs text-white">{comments}</h6>
            <Heart color="#cdb16e" size={16} />
            <h6 className="text-xs text-white">{likes}</h6>
          </div>
          <div className="mt-4 flex cursor-pointer gap-1" onClick={toggleComments}>
            <h6 className="text-xs text-white">Balasan</h6>
            <ChevronDown color="#ffffff" size={16} />
          </div>
          {showComments && (
            <div className="mt-4 space-y-2">
              {commentData.map(comment => (
                <div key={comment.id} className="p-2">
                  <div className="flex flex-col">
                    <div className="flex gap-2">
                      <figure>
                        <img src={comment.profileImage} alt="" className="h-5 w-5" />
                      </figure>
                      <div>
                        <h5 className="py-1 text-sm font-bold text-laser-300">{comment.name}</h5>
                      </div>
                    </div>
                    <div>
                      <p className="pl-10 text-xs text-wild-sand-50">{comment.comment}</p>
                    </div>
                  </div>
                  <div className="ml-10 mt-1 flex gap-1">
                    <Heart color="#cdb16e" size={16} />
                    <h6 className="text-xs text-white">{comment.likes}</h6>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export function Sidebar() {
  const hashtags = ["#haircare", "#hair", "#twintail"];
  const posteds = ["1.067 diposting", "837 diposting", "504 diposting"];

  const pairedTags = hashtags.map((tag, index) => ({
    hashtag: tag,
    posted: posteds[index],
  }));

  return (
    <Drawer direction="left">
      <DrawerTrigger>
        <div className="mt-20 flex flex-col gap-8">
          <SlidersHorizontal color="#cdb16e" size={20} />
          <Flame color="#cdb16e" size={20} />
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
          <div>
            <div className="flex flex-col gap-1 p-2.5">
              <div className="flex w-fit gap-2 border-b-2 border-laser-300">
                <Flame color="#cdb16e" size={20} />
                <h1 className=" text-lg font-semibold text-laser-300">Tag Populer</h1>
              </div>
              <div className="">
                {pairedTags.map(({ hashtag, posted }, index) => (
                  <div key={index}>
                    <a href="">
                      <h3 className="text-md font-normal text-white">{hashtag}</h3>
                    </a>
                    <h3 className="text-xs font-normal text-[#9C9C9C]">{posted}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
