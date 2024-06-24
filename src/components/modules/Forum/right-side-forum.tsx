import { useState } from "react";
import { CardForum } from "@/components/modules/Forum/card-forum";
import CreateForum from "./create-forum";

interface Forum {
  author: {
    email: string;
    photoURL: string;
    uid: string;
    username: string;
  };
  comments: Comment[];
  content: string;
  created_at: string;
  id_forum: string;
  id_tags: string | null;
  image: string;
  update_at: string;
}

interface Comment {
  id_comment: string;
  id_forum: string;
  comment_content: string;
  pinned: boolean;
  created_at: string;
  user: {
    email: string;
    photoURL: string;
    uid: string;
    username: string;
  };
}

export const RightSideForum = ({ posts }: { posts: Forum[] }) => {
  const [visibleComments, setVisibleComments] = useState<{ [key: string]: boolean }>({});

  const toggleComments = (postId: string) => {
    setVisibleComments(prev => ({ ...prev, [postId]: !prev[postId] }));
  };

  return (
    <div className="lg:flex lg:flex-col lg:gap-4">
      <CreateForum/>
      <div className="lg:flex lg:flex-col lg:gap-4">
        {posts.map(post => (
          <CardForum
            key={post.id_forum}
            profileImage={post.author.photoURL}
            name={post.author.username}
            text={post.content}
            image={post.image || ""}
            hashtags={[]}
            comments={post.comments.length}
            likes={0}
            showComments={!!visibleComments[post.id_forum]}
            toggleComments={() => toggleComments(post.id_forum)}
            commentData={post.comments} 
            created_at={post.created_at}          />
        ))}
      </div>
    </div>
  );
};
