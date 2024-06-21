import { useState } from "react";
import { ChevronDown, Ellipsis, MessageCircle } from "lucide-react";
import { Avatar, AvatarImage } from "../../ui/avatar";

export const ResponsiveCard = ({
  profileImage,
  name,
  text,
  image,
  hashtags,
  comments,
  // likes,
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
    <div className="h-full border-t-[0.1875rem] border-shark-800 bg-shark-900 px-10 pb-5">
      <div className="">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-x-3">
            <figure>
              <Avatar className="flex h-10 w-10">
                <AvatarImage className="object-cover" src={profileImage} />
              </Avatar>
            </figure>
            <h1 className="w-full text-lg font-bold text-laser-300">{name}</h1>
          </div>
          <div className="flex gap-6">
            <Ellipsis color="#f4f4f4" />
          </div>
        </div>
        <div className="">
          <p className="w-full text-lg text-wild-sand-50 xl:w-64 xl:text-xl">{text}</p>
          {image && <img src={image} alt=" " className="mt-2.5" />}
          <div className="mt-2.5 w-fit rounded-[0.625rem] bg-laser-300 px-2.5">
            {hashtags.map((hashtag, index) => (
              <h5 key={index} className="text-xs">
                #{hashtag}
              </h5>
            ))}
          </div>
          <div className="mt-2.5 flex gap-1">
            <MessageCircle color="#cdb16e" size={20} />
            <h6 className="mr-4 text-md text-white">{comments}</h6>
            {/* <Heart color="#cdb16e" size={16} />
            <h6 className="text-xs text-white">{likes}</h6> */}
          </div>
          <div className="mt-4 flex cursor-pointer items-center gap-1" onClick={toggleComments}>
            <h6 className="text-md text-white">Balasan</h6>
            <div className={`transition-transform duration-300 ${showComments ? "rotate-180" : ""}`}>
              <ChevronDown color="#ffffff" />
            </div>
          </div>
          {showComments && (
            <div className="mt-4 space-y-2">
              {commentData.map(comment => (
                <div key={comment.id} className="p-2">
                  <div className="flex flex-col">
                    <div className="flex gap-2">
                      {/* <figure>
                        <img src={comment.profileImage} alt="" className="h-5 w-5" />
                      </figure> */}
                      <figure>
                          <Avatar className="flex h-5 w-5">
                            <AvatarImage className="object-cover" src={comment.profileImage} />
                          </Avatar>
                        </figure>
                      <div>
                        <h5 className="py-1 text-md font-bold text-laser-300">{comment.name}</h5>
                      </div>
                    </div>
                    <div>
                      <p className="pl-10 text-sm text-wild-sand-50">{comment.comment}</p>
                    </div>
                  </div>
                  {/* <div className="ml-10 mt-1 flex gap-1">
                    <Heart color="#cdb16e" size={16} />
                    <h6 className="text-xs text-white">{comment.likes}</h6>
                  </div> */}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
