import { Button } from "@/components/ui/button";
import { ImagePlus, Search } from "lucide-react";
import { TagPopuler, Card } from "@/components/ui/forum.tsx";

export default function Forum() {
  const tagData = [
    { hashtag: "#haircare", posted: "1.067 diposting" },
    { hashtag: "#hair", posted: "837 diposting" },
    { hashtag: "#twintail", posted: "504 diposting" },
    { hashtag: "#wavy", posted: "2.654 diposting" },
  ];

  const posts = [
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
      text: "Gais aku kan udah masuk  masa menopause jadi rambut udah mulai pada warna putih dan pada rontok, ada saran ga yaa pewarna sama penumbuh rambut tapi yang berbahan alami? Biar  makin pede nihh",
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

  return (
    <div style={{ paddingBottom: "30px" }} className="container flex gap-2 pt-8 sm:container">
      <div className="w-62 static left-24 top-[8rem] space-y-3.5">
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
          <div className="space-y-4 p-2.5">
            <div>
              <h1 className="w-fit border-b-2 border-laser-300 text-2xl font-semibold text-laser-300">Filter</h1>
            </div>
            <div className="text-xl font-extrabold text-white">
              <a href="" className="mt-4 block">
                <h3>Terbaru dan Terkini</h3>
              </a>
              <a href="" className="mt-4 block">
                <h3>Sedang Tren</h3>
              </a>
              <a href="" className="mt-4 block">
                <h3>Terlama</h3>
              </a>
            </div>
          </div>
        </div>
        <div>
          <TagPopuler hashtags={tagData.map(data => data.hashtag)} posteds={tagData.map(data => data.posted)} />
        </div>
      </div>

      <div>
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
        {posts.map((post, id) => (
          <Card key={id} {...post} />
        ))}
      </div>
    </div>
  );
}
