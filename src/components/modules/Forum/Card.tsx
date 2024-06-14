// import React from "react";
import { AvatarImage } from "@/components/ui/avatar";
import { Avatar } from "@radix-ui/react-avatar";
import { ChevronDown, Ellipsis, MessageCircle } from "lucide-react";

export const Card = ({
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
    <div className="mt-5 flex w-full flex-col items-center">
      <div className="item-center flex w-[47.5rem] flex-col rounded-[0.625rem] bg-[#2E323A] pb-5 pt-5">
        <div className="flex w-full justify-center gap-2.5">
          {/* <figure>
            <img src={profileImage} alt="Profile" />
          </figure> */}
          <figure>
            <Avatar className="flex h-10 w-10">
              <AvatarImage className="object-cover" src={profileImage} />
            </Avatar>
          </figure>
          <div className="w-[39.2rem]">
            <h1 className="mb-2.5 text-xl font-bold text-laser-300">{name}</h1>
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
              {/* <Heart color="#cdb16e" />
              <h6 className="text-white">{likes}</h6> */}
            </div>
            <div className="mt-4 flex cursor-pointer gap-1" onClick={toggleComments}>
              <h6 className="text-white">Balasan</h6>
              <div className={`transition-transform duration-300 ${showComments ? "rotate-180" : ""}`}>
                <ChevronDown color="#ffffff" />
              </div>
            </div>
            {showComments && (
              <div className="mt-4 space-y-2">
                {commentData.map(comment => (
                  <div key={comment.id} className="rounded-md p-2">
                    <div className="flex flex-col gap-2">
                      <div className="flex gap-2">
                        {/* <figure>
                          <img src={comment.profileImage} alt="" className="h-8 w-8 rounded-full" />
                        </figure> */}
                        <figure>
                          <Avatar className="flex ">
                            <AvatarImage className="object-cover h-8 w-8" src={comment.profileImage} />
                          </Avatar>
                        </figure>
                        <div>
                          <h5 className="py-1 text-xl font-bold text-laser-300">{comment.name}</h5>
                        </div>
                      </div>
                      <div>
                        <p className="pl-10 text-sm text-wild-sand-50">{comment.comment}</p>
                      </div>
                    </div>
                    {/* <div className="ml-10 mt-1 flex gap-1">
                      <Heart color="#cdb16e" />
                      <h6 className="text-white">{comment.likes}</h6>
                    </div> */}
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
