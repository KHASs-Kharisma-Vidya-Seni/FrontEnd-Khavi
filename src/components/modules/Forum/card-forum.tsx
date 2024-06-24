import { AvatarImage } from "@/components/ui/avatar";
import { Avatar } from "@radix-ui/react-avatar";
import moment from "moment";
import { ChevronDown, Ellipsis, MessageCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/use-auth";

// interface Comment {
//   id_comment: string;
//   id_forum: string;
//   comment_content: string;
//   pinned: boolean;
//   created_at: string;
//   user?: {
//     email: string;
//     photo_url: string; // Ensure this property is defined
//     uid: string;
//     username: string;
//   };
// }

export const CardForum = ({
  profileImage,
  name,
  text,
  image,
  hashtags,
  comments,
  showComments,
  toggleComments,
  commentData,
  created_at,
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  commentData?: any[];
  created_at: string;
}) => {
  const { currentUser } = useAuth();
  return (
    <div className="flex w-full flex-col items-center">
      <div className="item-center flex w-full flex-col border-t-[0.1875rem] border-shark-800 bg-[#2E323A] py-5 pl-16 pr-6 lg:w-[47.5rem] lg:rounded-[0.625rem] lg:border-none lg:pl-0 lg:pr-0">
        <div className="flex items-center justify-between py-4 lg:px-10">
          <div className="flex items-center gap-x-3">
            <Avatar className="flex h-10 w-10">
              <AvatarImage className="rounded-full  object-cover" src={profileImage || ""} />
            </Avatar>
            <div className="flex gap-3">
              <h1 className="mb-2.5 text-xl font-bold text-laser-300">{name}</h1>
              <h1 className="text-ll mt-0.5 font-extralight text-gray-400">{moment(created_at).fromNow()}</h1>
            </div>
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
          {image && <img src={image} alt=" " className="mt-2.5" />}
          <div className="prose mt-3 prose-h1:text-wild-sand-50 prose-h2:text-wild-sand-50 prose-h3:text-wild-sand-50 prose-p:text-wild-sand-50 prose-blockquote:text-wild-sand-50 prose-strong:text-wild-sand-50">
            <div
              dangerouslySetInnerHTML={{
                __html: text,
              }}
            />
          </div>
          <div className="mt-2.5 w-fit rounded-[0.625rem] bg-laser-300 px-2.5">
            {hashtags?.map((hashtag, index) => <h5 key={index}>#{hashtag}</h5>)}
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
          {showComments && (
            <div className="mt-4 space-y-2">
              {commentData?.map(comment => (
                <div key={comment.id_comment} className="rounded-md p-2">
                  <div className="flex flex-col gap-2">
                    <div className="flex gap-2">
                      <div className="flex items-center gap-x-3">
                        <Avatar className="h-8 w-8 object-cover">
                          <AvatarImage className="h-8 w-8 rounded-full object-cover" src={comment?.user?.photo_url} />
                        </Avatar>
                        <h5 className="text-md py-1 font-black text-laser-300 lg:text-xl">{comment?.user?.username}</h5>
                      </div>
                    </div>
                    <div>
                      <p className="pl-10 text-sm font-normal text-wild-sand-50">{comment?.comment_content}</p>
                    </div>
                  </div>
                </div>
              ))}
              <div className="ml-2 flex w-full items-center justify-between gap-2">
                <div className="flex w-full items-center">
                  <Avatar>
                    <AvatarImage className="mr-4 h-8 w-8 rounded-full object-cover" src={currentUser?.photo_url} />
                  </Avatar>
                  <Input className="h-8 truncate bg-white text-sm" placeholder="Post Komentar Kamu" />
                </div>
                <Button className="text-md h-8 bg-laser-300 font-semibold hover:bg-laser-500">Post</Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
