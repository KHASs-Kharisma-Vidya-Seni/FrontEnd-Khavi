import Container from "@/components/Container";
import {
  ArticleCard,
  ArticleTags,
  TrendingCard,
} from "@/components/ui/article";

export default function Article() {
  const dataArticle = [
    {
      id: 1,
      imageSrc: "/images/arikel-1.png",
      title: "Rahasia Merawat Rambut Gimbal agar Tetap Sehat",
      description:
        "Metode efektif untuk merawat rambut gimbal agar tetap sehat dan terlihat menawan. Dari pemilihan produk perawatan yang tepat hingga teknik pencucian dan pemeliharaan sehari-hari",
      tags: ["Treatment", "Hair"],
    },
    {
      id: 2,
      imageSrc: "/images/arikel-2.png",
      title: "Inspirasi Gaya Rambut Pendek Wanita Manis dari Selebriti",
      description:
        "Temukan berbagai model rambut yang cocok untuk berbagai bentuk wajah dan gaya Pribadi.",
      tags: ["Treatment", "Hair"],
    },
    {
      id: 3,
      imageSrc: "/images/arikel-3.png",
      title: "4 Cara Mengetahui Bentuk Wajah, Ini Langkah Mudahnya",
      description:
        "Bingung menentukan bentuk wajahmu?Temukan cara mudah untuk mengetahui bentuk wajahmu dengan langkah-langkah yang simpel dan praktis.",
      tags: ["Treatment", "Hair"],
    },
    {
      id: 4,
      imageSrc: "/images/arikel-4.png",
      title: "Inspirasi Gaya Rambut Pria ala Nguyen",
      description:
        "Tentang keindahan dan keanggunan gaya rambut pria ala Nguyen, mengungkapkan rahasia di balik penampilan rambut yang elegan dan memikat.",
      tags: ["Treatment", "Hair"],
    },
    {
      id: 5,
      imageSrc: "/images/arikel-5.png",
      title: "Tren Gaya Rambut Pendek Pria: Tampil Tampan dan Modern",
      description:
        "Temukan berbagai model rambut yang cocok untuk berbagai bentuk wajah dan gaya Pribadi. Dapatkan tips dan trik untuk menata rambut pendek agar selalu terlihat rapi dan menarik.",
      tags: ["Treatment", "Hair"],
    },
    {
      id: 6,
      imageSrc: "/images/arikel-6.png",
      title: "4 Cara Mengetahui Bentuk Wajah, Ini Langkah Mudahnya",
      description:
        "Bingung menentukan bentuk wajahmu?Temukan cara mudah untuk mengetahui bentuk wajahmu dengan langkah-langkah yang simpel dan praktis.",
      tags: ["Treatment", "Hair"],
    },
  ];

  const dataTrending = [
    {
      id: 1,
      title: "Merawat Bentuk Wajah Agar Simetris",
      imageSrc: "/images/cewek-tranding-1.png",
      description:
        "Memiliki wajah simetris adalah dambaan banyak orang. Temukan panduan lengkap untuk mendapatkan bentuk wajah yang ideal dan proporsional.",
      date: "11 Juni 2024",
    },
    {
      id: 2,
      title: "Pesona Pria Gondrong , dimata Wanita",
      imageSrc: "/images/cowo-trading-2-full.png",
      description:
        "Rambut gondrong pada pria memancarkan pesona yang unik dan tak terabaikan. Bagi banyak wanita, rambut panjang mencerminkan keberanian, kepercayaan diri, serta sisi kreatif dan bebas dari konvensi.",
      date: "11 Juni 2024",
    },
  ];

  return (
    <Container className="w-full pb-48">
      <div id="1">
        <div className="relative rounded-lg border border-laser-500">
          <div className="p-5">
            <figure className="relative">
              <img
                src="/images/artikel-page-utama.png"
                alt=""
                className="h-full w-full overflow-hidden rounded-sm"
              />
              <div className="absolute inset-0 z-10 h-full w-full bg-gradient-to-b from-black/20 to-black/65"></div>
            </figure>
          </div>
          <div className="absolute bottom-20 right-32 z-20 text-heading-article ">
            <h1 className="text-5xl">Coba</h1>
            <h1 className="text-5xl">Fitur Baru Kami</h1>
            <h3 className="text-xl">Temukan Gaya Rambut Yang Sempurna</h3>
            <img src="./icon/btn-article-now.png" alt="" className="mt-4" />
          </div>
        </div>
      </div>

      <div id="2" className="h-full w-full py-8">
        <div id="heading" className="pb-4">
          <h1 className="text-4xl font-bold ">Trending</h1>
        </div>
        <div id="trending-main" className="flex h-[441px] w-full">
          {dataTrending.map((trending, id) => (
            <TrendingCard {...trending} key={id} />
          ))}
        </div>
      </div>

      <div id="3">
        <div className="mb-4 flex gap-4">
          <ArticleTags />
        </div>
        <div className="grid grid-cols-3 gap-5">
          {dataArticle.map(article => (
            <ArticleCard {...article} key={article.id} />
          ))}
        </div>
      </div>
    </Container>
  );
}
