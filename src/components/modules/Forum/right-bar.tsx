import React, { useState, useEffect, useRef } from "react";
import { ImagePlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CardForum } from "@/components/modules/Forum/card-forum";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";

interface Post {
  id: number;
  profileImage: string;
  name: string;
  text: string;
  image?: string;
  hashtags: string[];
  comments: number;
  likes: number;
}

interface Comment {
  id: number;
  postId: number;
  profileImage: string;
  name: string;
  comment: string;
  likes: number;
}

export const RightBar = ({ posts, comments }: { posts: Post[]; comments: Comment[] }) => {
  const profileImage: string = "/images/Ellipse-2.png";
  const [text, setText] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [text]);

  const [iconSize, setIconSize] = useState(20);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIconSize(28);
      } else {
        setIconSize(20);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [visibleComments, setVisibleComments] = useState<{ [key: number]: boolean }>({});

  const toggleComments = (postId: number) => {
    setVisibleComments(prev => ({ ...prev, [postId]: !prev[postId] }));
  };

  return (
    <div className="lg:flex lg:flex-col lg:gap-4">
      <div className="inline-flex w-full justify-center">
        <div className="lg:item-center w-full truncate border-t-[0.1875rem] border-shark-800 py-6 pl-16 pr-4 lg:w-[47.5rem] lg:justify-center lg:gap-2.5 lg:rounded-[0.625rem] lg:border-none lg:bg-[#2E323A] lg:px-0 xl:flex xl:px-0">
          <div className="flex w-full gap-2 px-0 lg:px-10">
            <div>
              <Avatar className="flex h-10 w-10">
                <AvatarImage className="object-cover" src={profileImage} />
              </Avatar>
            </div>
            <div className="flex-grow">
              <div className="flex flex-col gap-4">
                <textarea
                  ref={textareaRef}
                  value={text}
                  onChange={handleChange}
                  placeholder="Let's share what you think about hairstyles ..."
                  className="w-full resize-none rounded-lg lg:p-0 p-2 lg:px-4 lg:pt-4 text-sm lg:text-lg focus:outline-none"
                ></textarea>
                <a href="#">
                  <div className="flex items-center gap-[0.38rem]">
                    <ImagePlus color="#cdb16e" size={iconSize}/>
                    <h1 className="font-bold text-white lg:text-lg text-sm">Photo</h1>
                  </div>
                </a>
              </div>
            </div>
            <div className="flex items-start">
              <Button variant="post" size="post">
                Post
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:flex lg:flex-col lg:gap-4">
        {posts.map(post => (
          <CardForum
            key={post.id}
            profileImage={post.profileImage}
            name={post.name}
            text={post.text}
            image={post.image || ""}
            hashtags={post.hashtags}
            comments={post.comments}
            likes={post.likes}
            showComments={!!visibleComments[post.id]}
            toggleComments={() => toggleComments(post.id)}
            commentData={comments.filter(comment => comment.postId === post.id)}
          />
        ))}
      </div>
    </div>
  );
};
