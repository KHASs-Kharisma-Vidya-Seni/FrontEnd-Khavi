// comment-forum.tsx

import React from "react";
import { AvatarImage } from "@/components/ui/avatar";
import { Avatar } from "@radix-ui/react-avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface CommentData {
  id: number;
  profileImage: string;
  name: string;
  comment: string;
  likes: number;
}

interface CommentForumProps {
  commentData: CommentData[];
}

const CommentForum: React.FC<CommentForumProps> = ({ commentData }) => {
  return (
    <div className="mt-4 space-y-2">
      {commentData.map(comment => (
        <div key={comment.id} className="rounded-md p-2">
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <div className="flex items-center gap-x-3">
                <Avatar className="h-8 w-8 object-cover">
                  <AvatarImage className="h-8 w-8 object-cover" src={comment.profileImage} />
                </Avatar>
                <h5 className="text-md py-1 font-black text-laser-300 lg:text-xl">{comment.name}</h5>
              </div>
            </div>
            <div>
              <p className="pl-10 text-sm font-normal text-wild-sand-50">{comment.comment}</p>
            </div>
          </div>
        </div>
      ))}
      <div className="ml-2 flex w-full items-center justify-between gap-2">
        <div className="flex w-full items-center">
          <Avatar>
            <AvatarImage className="mr-4 h-8 w-8 object-cover" src="/images/Ellipse-2.png" />
          </Avatar>
          <Input className="h-8 truncate bg-white text-sm" placeholder="Post Komentar Kamu" />
        </div>
        <Button className="text-md h-8 bg-laser-300 font-semibold hover:bg-laser-500">Post</Button>
      </div>
    </div>
  );
};

export default CommentForum;
