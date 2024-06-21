import React, { useState } from "react";
import { ImagePlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/modules/Forum/Card";

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
  const [visibleComments, setVisibleComments] = useState<{
    [key: number]: boolean;
  }>({});

  const toggleComments = (postId: number) => {
    setVisibleComments(prev => ({ ...prev, [postId]: !prev[postId] }));
  };

  return (
    <div className="">
      <div className="inline-flex w-full justify-center">
        <div className="item-center flex h-[6.875rem] w-[47.5rem] justify-center gap-2.5 rounded-[0.625rem] bg-[#2E323A] pb-10 pt-5">
          <figure>
            <img src="/images/Ellipse-2.png" alt="" />
          </figure>
          <div className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Let's share what you think about hairstyles ..."
                className="h-[0.625rem] w-[36.25rem] rounded-[0.625rem] p-[1.1rem] focus:outline-none"
              />
            </div>
            <div>
              <a href="">
                <div className="flex gap-[0.38rem]">
                  <ImagePlus color="#cdb16e" />
                  <h1 className="font-medium text-white">Photo</h1>
                </div>
              </a>
            </div>
          </div>
          <div>
            <Button variant="post" size="post">
              Post
            </Button>
          </div>
        </div>
      </div>
      <div>
        {posts.map(post => (
          <Card
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
