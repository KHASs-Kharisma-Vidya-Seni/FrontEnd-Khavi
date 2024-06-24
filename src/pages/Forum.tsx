import { SidebarForum } from "@/components/modules/Forum/side-bar-forum";
import { LeftSideForum } from "@/components/modules/Forum/left-forum-forum";
import { RightSideForum } from "@/components/modules/Forum/right-side-forum";

import { cn } from "@/lib/utils";
import { useScrollPosition } from "@/hooks/use-scroll-position";
import AnimationPage from "@/components/AnimationPage";

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
  const isScrolled = useScrollPosition();

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
    <AnimationPage>
      <div className="flex flex-col justify-center gap-2 bg-shark-900 p-0 xl:container lg:bg-white lg:bg-[url('/images/bgArtikel.png')] lg:pb-[30px] lg:pt-8">
        <div
          className={cn(
            "fixed left-0 flex h-screen w-12 justify-center border-r-[0.1875rem] border-t-[0.1875rem] border-shark-800 bg-shark-900 xl:hidden",
            isScrolled ? "top-0" : "top-24"
          )}
        >
          <div className="">
            <SidebarForum />
          </div>
        </div>
        <div className="">
          <div className="hidden xl:block">
            <LeftSideForum />
          </div>
          <div className="">
            <RightSideForum posts={posts} comments={comments} />
          </div>
        </div>
      </div>
    </AnimationPage>
  );
}
