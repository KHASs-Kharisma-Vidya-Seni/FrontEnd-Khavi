import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ImagePlus, Search, SlidersHorizontal } from "lucide-react";
import { TagPopuler, Card, Sidebar, ResponsiveCard, ResponsivePost } from "@/components/ui/forum"; // pastikan path ini benar

interface TagData {
  hashtag: string;
  posted: string;
}

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

export default function Forum() {
  const tagData: TagData[] = [
    { hashtag: "#haircare", posted: "1.067 diposting" },
    { hashtag: "#hair", posted: "837 diposting" },
    { hashtag: "#twintail", posted: "504 diposting" },
  ];

  const posts: Post[] = [
    {
      id: 1,
      profileImage: "/images/Ellipse-2.png",
      name: "Khalisa",
      text: "Menemukan Bentuk Wajah yang Tepat untuk Khalisa: Tips dan Trik Halo semuanya! 🌸 Kali ini, kita akan membahas tentang bentuk wajah dan bagaimana mengenalinya dengan benar. Mengetahui bentuk wajah bisa membantu kita dalam memilih gaya rambut, kacamata, dan riasan yang paling sesuai. Ayo kita cari tahu bentuk wajah Khalisa dan tips-tips yang bisa diterapkan!",
      image: "",
      hashtags: ["haircare"],
      comments: 17,
      likes: 10,
    },
    {
      id: 2,
      profileImage: "/images/Ellipse-2.png",
      name: "Tok Dalang",
      text: "Gais aku kan udah masuk masa menopause jadi rambut udah mulai pada warna putih dan pada rontok, ada saran ga yaa pewarna sama penumbuh rambut tapi yang berbahan alami? Biar makin pede nihh",
      image: "",
      hashtags: ["hair"],
      comments: 2,
      likes: 10,
    },
    {
      id: 3,
      profileImage: "/images/Ellipse-2.png",
      name: "Ilham",
      text: "Pamer Mullet",
      image: "./images/Foto-1.png",
      hashtags: ["hair"],
      comments: 10,
      likes: 23,
    },
  ];

  const comments: Comment[] = [
    {
      id: 1,
      postId: 1,
      profileImage: "/images/Ellipse-2.png",
      name: "User1",
      comment: "This is a comment",
      likes: 5,
    },
    {
      id: 2,
      postId: 2,
      profileImage: "/images/Ellipse-2.png",
      name: "User2",
      comment: "This is another comment",
      likes: 2,
    },
    {
      id: 3,
      postId: 3,
      profileImage: "/images/Ellipse-2.png",
      name: "User3",
      comment: "potongannya jelek",
      likes: 1,
    },
    {
      id: 4,
      postId: 3,
      profileImage: "/images/Ellipse-2.png",
      name: "User4",
      comment: "anjayyyyy",
      likes: 0,
    },
  ];

  return (
    <div className="container flex flex flex-col justify-center gap-2 bg-shark-900 p-0 lg:container lg:bg-white lg:pb-[30px] lg:pt-8">
      <div className="fixed left-0 top-24 block flex h-screen w-12 justify-center border-r-[0.1875rem] border-t-[0.1875rem] border-shark-800 bg-shark-900 lg:hidden">
        <div>
          <Sidebar />
        </div>
      </div>
      <div className="ml-12 block h-full w-full lg:hidden">
        <ResponsivePost />
        {posts.map((post: Post) => (
          <ResponsiveCard
            key={post.id}
            {...post}
            commentData={comments.filter(comment => comment.postId === post.id)}
          />
        ))}
      </div>
      <div className="hidden lg:block">
        <LeftBar tagData={tagData} />
        <div className="ml-36">
          <RightBar posts={posts} comments={comments} />
        </div>
      </div>
    </div>
  );
}

const LeftBar = ({ tagData }: { tagData: TagData[] }) => (
  <div className="w-62 static fixed left-24 top-[8rem] space-y-3.5">
    <div className="relative w-full rounded-[0.625rem] bg-shark-900 p-5">
      <input
        type="text"
        placeholder="Cari Topik..."
        className="w-full rounded-[0.625rem] border border-gray-300 py-1.5 pl-3 pr-10 focus:outline-none"
      />
      <button className="absolute inset-y-0 right-4 flex items-center pr-3">
        <Search color="#c7c7c7" />
      </button>
    </div>
    <div className="relative w-full rounded-[0.625rem] bg-shark-900 p-2.5">
      <div className="flex flex-col gap-1 p-2.5">
        <div className="flex w-fit gap-2 border-b-2 border-laser-300">
          <SlidersHorizontal color="#cdb16e" />
          <h1 className="text-xl font-semibold text-laser-300">Filter</h1>
        </div>
        <div className="flex flex-col gap-1 text-lg font-extrabold text-white">
          <a href="">
            <h3>Terbaru dan Terkini</h3>
          </a>
          <a href="">
            <h3>Sedang Tren</h3>
          </a>
          <a href="">
            <h3>Terlama</h3>
          </a>
        </div>
      </div>
    </div>
    <div>
      <TagPopuler
        hashtags={tagData.map((data: TagData) => data.hashtag)}
        posteds={tagData.map((data: TagData) => data.posted)}
      />
    </div>
  </div>
);

const RightBar = ({ posts, comments }: { posts: Post[]; comments: Comment[] }) => {
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
  );
};
