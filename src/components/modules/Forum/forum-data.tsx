import React, { forwardRef, useRef, useState } from "react";
import axios from "axios";
import useSWR, { mutate } from "swr";
import moment from "moment";
import "moment-timezone";
import DOMPurify from "dompurify";
import { useForm, SubmitHandler, UseFormRegister } from "react-hook-form";
import { Link } from "react-router-dom";
import { BASE_URL_API } from "@/utility/base-url";
import { useAuth } from "@/hooks/use-auth";
import { makeRequest } from "@/lib/axios";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Ellipsis } from "lucide-react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Forum {
  forums: ForumData[];
}

interface ForumData {
  author: User;
  comments: Comment[];
  content: string;
  created_at: string;
  id_forum: string;
  id_tags: string | null;
  image: string;
  update_at: string;
}

interface User {
  email: string;
  photo_url: string;
  uid: string;
  username: string;
  location: string;
}

interface Comment {
  id_comment: string;
  id_forum: string;
  comment_content: string;
  pinned: boolean;
  created_at: string;
  user: User;
}

interface FormData {
  commentContent: { [key: string]: string }; // Use a dynamic key for comments
}

const fetcher = async (url: string) => {
  return axios.get(url, { withCredentials: true }).then(res => res.data);
};

interface ForumDataProps {
  filter: string;
}

const ForumDataCard: React.FC<ForumDataProps> = ({ filter }) => {
  const [showComment, setShowComment] = useState<boolean[]>([]);
  const [showCommentForm, setShowCommentForm] = useState<boolean[]>([]);
  const [isSubmitting, setIsSubmitting] = useState<{ [key: string]: boolean }>({});

  const nodeRef = useRef(null);

  const { register, handleSubmit, reset } = useForm<FormData>();
  const { currentUser } = useAuth();


  const { data, error } = useSWR<Forum>(`${BASE_URL_API}/forum?withUser=true`, fetcher);

  const forums = data?.forums || [];

  const sortedForums = forums.sort((a, b) => {
    if (filter === "newest") {
      return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
    } else {
      return new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
    }
  });

  if (!currentUser) {
    return <div>Please log in to view user forums.</div>;
  }

  if (!data) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <div>Failed to fetch user forums data. Please try again later.</div>;
  }

  const toggleComment = (index: number) => {
    setShowComment(prev => {
      const updated = [...prev];
      updated[index] = !updated[index];
      return updated;
    });

    setShowCommentForm(prev => {
      const updated = [...prev];
      updated[index] = false;
      return updated;
    });
  };

  const toggleCommentForm = (index: number) => {
    setShowCommentForm(prev => {
      const updated = [...prev];
      updated[index] = !updated[index];
      return updated;
    });
  };

  const handleCommentSubmit =
    (index: number): SubmitHandler<FormData> =>
    async formData => {
      try {
        setIsSubmitting(prev => ({ ...prev, [index]: true }));

        if (sortedForums[index]?.id_forum) {
          await makeRequest.post(`/forum/${sortedForums[index].id_forum}/comments`, {
            id_forum: sortedForums[index].id_forum,
            id_user: currentUser?.uid,
            comment_content: formData.commentContent[sortedForums[index].id_forum],
          });

          reset();
          mutate(`${BASE_URL_API}/forum?withUser=true`);
        } else {
          console.error("Invalid forum data or index");
        }
      } catch (error) {
        console.error("Failed to submit comment:", error);
      } finally {
        setIsSubmitting(prev => ({ ...prev, [index]: false }));
      }
    };

  const toggleCommentPin = async (commentId: string, userId: string) => {
    try {
      if (currentUser && currentUser.uid === userId) {
        await makeRequest.put(`/comment/${commentId}/pin`);
        mutate(`${BASE_URL_API}/forum?withUser=true`);
      } else {
        console.log("Unauthorized to pin or unpin this comment.");
      }
    } catch (error) {
      console.error("Failed to update comment pin status:", error);
    }
  };

  const calculateTimeAgo = (timestampUTC: string) => {
    return moment.utc(timestampUTC).local().fromNow();
  };

  return (
    <section className="item-center flex w-full flex-col justify-center border-t-[0.1875rem] py-5 pl-16 pr-6 lg:w-[47.5rem] lg:rounded-[0.625rem] lg:border-none lg:pl-0 lg:pr-0">
      {sortedForums.length === 0 && <h1>Nothing Here!!</h1>}
      <div className="grid grid-cols-1 gap-x-2 gap-y-4 md:grid-cols-2 lg:grid-cols-1">
        {sortedForums.map((forum, index) => (
          <ForumCard
            key={index}
            forum={forum}
            currentUser={currentUser}
            showComment={showComment[index]}
            showCommentForm={showCommentForm[index]}
            isSubmitting={isSubmitting[index]}
            toggleComment={() => toggleComment(index)}
            toggleCommentForm={() => toggleCommentForm(index)}
            handleSubmit={handleSubmit(handleCommentSubmit(index))}
            register={register}
            calculateTimeAgo={calculateTimeAgo}
            nodeRef={nodeRef}
            toggleCommentPin={toggleCommentPin}
          />
        ))}
      </div>
    </section>
  );
};

interface ForumCardProps {
  forum: ForumData;
  currentUser: User;
  showComment: boolean;
  showCommentForm: boolean;
  isSubmitting: boolean;
  toggleComment: () => void;
  toggleCommentForm: () => void;
  handleSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>;
  register: UseFormRegister<FormData>; // Type corrected here
  calculateTimeAgo: (timestamp: string) => string;
  nodeRef: React.RefObject<HTMLDivElement>;
  toggleCommentPin: (commentId: string, userId: string) => void;
}

const ForumCard: React.FC<ForumCardProps> = ({
  forum,
  currentUser,
  showComment,
  showCommentForm,
  isSubmitting,
  toggleComment,
  toggleCommentForm,
  handleSubmit,
  register,
  calculateTimeAgo,
  nodeRef,
  toggleCommentPin,
}) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(prevShowMore => !prevShowMore);
  };
  const sanitizedContent = DOMPurify.sanitize(forum.content);
  return (
    <div className="flex h-fit w-full flex-col rounded-xl border  border-shark-800 bg-[#2E323A] shadow-sm ">
      <div className="p-4 md:p-5">
        <div className="flex items-center justify-between pb-5">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src={forum.author.photo_url} alt={forum.author.username} />
            </Avatar>
            <div>
              <h3 className="text-xl font-bold text-white">{forum.author.username}</h3>
              <div className="flex items-center space-x-2 text-gray-500 ">
                <p>{forum.author.location}</p>,<p className="text-sm ">{calculateTimeAgo(forum.created_at)}</p>
              </div>
            </div>
          </div>
          {currentUser.uid === forum.author.uid && (
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Ellipsis color="#f4f4f4" size={24} />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white">
                <DropdownMenuSeparator />
                <Link to={`/forum/${forum.id_forum}/edit`} className=" hover:text-blue-400 ">
                  <DropdownMenuItem className="cursor-pointer">Edit</DropdownMenuItem>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
        <img
          className=" h-full w-full rounded-t-xl object-contain md:h-[400px]"
          style={{
            objectPosition: "top center",
          }}
          src={forum.image}
          alt={forum.id_forum}
        />
        <div
          className={cn(
            "prose prose-h1:my-5 prose-h1:text-white prose-p:m-1 prose-p:text-white",
            showMore ? " " : "prose-p:truncate"
          )}
          dangerouslySetInnerHTML={{ __html: sanitizedContent }}
        />

        <div className="flex justify-end space-x-5">
          <button onClick={toggleShowMore} className="text-blue-500 hover:underline focus:outline-none">
            {showMore ? "Sembunyikan" : "Lihat Selengkapnya"}
          </button>
          <button onClick={toggleCommentForm} className="text-blue-500 hover:underline focus:outline-none">
            {showCommentForm ? "Hide Comment" : "Add Comment"}
          </button>
          <button onClick={toggleComment} className="mr-2 text-gray-500 hover:text-blue-500 focus:outline-none">
            {showComment ? "Hide Comments" : "View Comments"}
          </button>
        </div>
        {showCommentForm && (
          <>
            <div className="pt-5">
              <h3 className=" text-xl font-semibold text-wild-sand-400">Add Comment</h3>
            </div>
            <form onSubmit={handleSubmit}>
              <textarea
                {...register(`commentContent.${forum.id_forum}` as const)}
                className="mt-2 h-20 w-full resize-none rounded-md border px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Tulis komentar..."
                required
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-2 w-full rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none"
              >
                {isSubmitting ? "Mengirim..." : "Kirim"}
              </button>
            </form>
          </>
        )}
        {showComment && (
          <CommentList
            ref={nodeRef}
            comments={forum.comments}
            currentUser={currentUser}
            forumAuthorUid={forum.author.uid}
            toggleCommentPin={toggleCommentPin}
          />
        )}
      </div>
    </div>
  );
};

interface CommentListProps {
  comments: Comment[];
  currentUser?: User;
  forumAuthorUid?: string;
  toggleCommentPin?: (commentId: string, userId: string) => void;
}

const CommentList = forwardRef<HTMLDivElement, CommentListProps>(({ comments }, ref) => {
  moment.tz.setDefault("Asia/Jakarta");

  const sortedComments = [...comments].sort((a, b) => {
    if (a.pinned !== b.pinned) return a.pinned ? -1 : 1;
    return new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
  });

  return (
    <div ref={ref} className="comment-list">
      {sortedComments.map((comment, index) => (
        <div key={index} className="mt-4 border-t pt-4">
          <div className="flex items-center justify-between gap-3 pb-2">
            <div className="flex items-center gap-x-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src={comment.user.photo_url} />
                <AvatarFallback>{comment.user.username.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-xl font-bold text-white">{comment.user.username}</h3>
                <p className=" text-gray-500 ">
                  {comment.user.location}, {moment(comment.created_at).fromNow()}
                </p>
              </div>
            </div>
          </div>
          <p className="text-lg text-gray-300">{comment.comment_content}</p>
        </div>
      ))}
    </div>
  );
});

const LoadingSpinner: React.FC = () => (
  <div className="loading-container">
    <div className="loading-spinner"></div>
  </div>
);

export default ForumDataCard;
