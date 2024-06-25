import { useState } from "react";
import CreateForum from "./create-forum";
import { CardForum } from "./card-forum";

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

export const RightSideForum = ({ posts, comments }: { posts: Post[]; comments: Comment[] }) => {

  const [visibleComments, setVisibleComments] = useState<{ [key: number]: boolean }>({});

  const toggleComments = (postId: number) => {
    setVisibleComments(prev => ({ ...prev, [postId]: !prev[postId] }));
  };

  return (
    <div className="lg:flex lg:flex-col lg:gap-4">
      <CreateForum/>
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