// import React from "react";
import { AvatarImage } from "@/components/ui/avatar";
import { Avatar } from "@radix-ui/react-avatar";
import { ChevronDown, Ellipsis, MessageCircle } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";
import CommentForum from "@/components/modules/Forum/comment-forum";

export const CardForum = ({
  profileImage,
  name,
  text,
  image,
  hashtags,
  comments,
  // likes,
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
    <div className="flex w-full flex-col items-center">
      <div className="item-center flex w-full flex-col border-t-[0.1875rem] border-shark-800 bg-[#2E323A] py-5 pl-16 pr-6 lg:w-[47.5rem] lg:rounded-[0.625rem] lg:border-none lg:pl-0 lg:pr-0">
        <div className="flex items-center justify-between py-4 lg:px-10">
          <div className="flex items-center gap-x-3">
            <Avatar className="flex h-10 w-10">
              <AvatarImage className="object-cover" src={profileImage} />
            </Avatar>
            <h1 className="mb-2.5 text-xl font-bold text-laser-300">{name}</h1>
          </div>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Ellipsis color="#f4f4f4" size={24} />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white">
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link to="/forum/:id/edit">Edit</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="pl-14 pr-2 lg:pl-24 lg:pr-16">
          <p className="text-wild-sand-50">{text}</p>
          {image && <img src={image} alt=" " className="mt-2.5" />}
          <div className="mt-2.5 w-fit rounded-[0.625rem] bg-laser-300 px-2.5">
            {hashtags.map((hashtag, index) => (
              <h5 key={index}>#{hashtag}</h5>
            ))}
          </div>
          <div className="mt-2.5 flex gap-1">
            <MessageCircle color="#cdb16e" />
            <h6 className="mr-4 text-white">{comments}</h6>
          </div>
          <div className="mt-4 flex cursor-pointer gap-1" onClick={toggleComments}>
            <h6 className="text-white">Balasan</h6>
            <div className={`transition-transform duration-300 ${showComments ? "rotate-180" : ""}`}>
              <ChevronDown color="#ffffff" />
            </div>
          </div>
          {showComments && <CommentForum commentData={commentData} />}
        </div>
      </div>
    </div>
  );
};
