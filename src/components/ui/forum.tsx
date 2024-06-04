import {
  ChevronDown,
  Ellipsis,
  Flame,
  Heart,
  MessageCircle,
} from "lucide-react";

export const TagPopuler = ({
  hashtags,
  posteds,
}: {
  hashtags: string[];
  posteds: string[];
}) => {
  const pairedTags = hashtags.map((tag, index) => ({
    hashtag: tag,
    posted: posteds[index],
  }));

  return (
    <div className="relative w-full rounded-[0.625rem] bg-shark-900 p-2.5">
      <div className="space-y-4 p-2.5">
        <div className="flex gap-1 border-b-2 border-laser-300">
          <Flame color="#cdb16e" />
          <h1 className="w-fit text-2xl font-semibold text-laser-300">
            Tag Populer
          </h1>
        </div>
        <div className="">
          {pairedTags.map(({ hashtag, posted }, index) => (
            <div key={index}>
              <a href="" className="mt-4 block">
                <h3 className="text-xl font-normal text-white">{hashtag}</h3>
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
            <div
              className="mt-4 flex cursor-pointer gap-1"
              onClick={toggleComments}>
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
                          <img
                            src={comment.profileImage}
                            alt=""
                            className="h-8 w-8 rounded-full"
                          />
                        </figure>
                        <div>
                          <h5 className="py-1 text-xl font-bold text-laser-300">
                            {comment.name}
                          </h5>
                        </div>
                      </div>

                      <div>
                        <p className="pl-10 text-sm text-wild-sand-50">
                          {comment.comment}
                        </p>
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
