import React from "react";
import { useParams } from "react-router-dom";

// Definisikan tipe Article
interface Article {
  id: number;
  slug: string;
  imageSrc: string;
  title: string;
  description: string;
  tags: string[];
}

// Data artikel harus diimpor atau didefinisikan
const dataArticle: Article[] = [
  {
    id: 1,
    slug: "rahasia-merawat-rambut-gimbal",
    imageSrc: "/images/arikel-1.png",
    title: "Rahasia Merawat Rambut Gimbal agar Tetap Sehat",
    description:
      "Mungkin, gak semua orang suka melihat tampilan rambut gimbal. Akan tetapi, untuk sebagian orang, rambut dengan model seperti itu memancarkan keindahan dan keunikan tersendiri di pandangan. Lantas, gimana cara merawat rambut gimbal yang benar? Mari simak rangkuman informasinya berikut ini.",
    tags: ["Treatment", "Hair"],
  },
  {
    id: 2,
    slug: "inspirasi-gaya-rambut-pendek-wanita-manis",
    imageSrc: "/images/arikel-2.png",
    title: "Inspirasi Gaya Rambut Pendek Wanita Manis dari Selebriti",
    description: "Temukan berbagai model rambut yang cocok untuk berbagai bentuk wajah dan gaya Pribadi.",
    tags: ["Treatment", "Hair"],
  },
  {
    id: 3,
    slug: "cara-mengetahui-bentuk-wajah",
    imageSrc: "/images/arikel-3.png",
    title: "4 Cara Mengetahui Bentuk Wajah, Ini Langkah Mudahnya",
    description:
      "Bingung menentukan bentuk wajahmu? Temukan cara mudah untuk mengetahui bentuk wajahmu dengan langkah-langkah yang simpel dan praktis.",
    tags: ["Treatment", "Hair"],
  },
  {
    id: 4,
    slug: "inspirasi-gaya-rambut-pria-ala-nguyen",
    imageSrc: "/images/arikel-4.png",
    title: "Inspirasi Gaya Rambut Pria ala Nguyen",
    description:
      "Tentang keindahan dan keanggunan gaya rambut pria ala Nguyen, mengungkapkan rahasia di balik penampilan rambut yang elegan dan memikat.",
    tags: ["Treatment", "Hair"],
  },
  {
    id: 5,
    slug: "tren-gaya-rambut-pendek-pria",
    imageSrc: "/images/arikel-5.png",
    title: "Tren Gaya Rambut Pendek Pria: Tampil Tampan dan Modern",
    description:
      "Temukan berbagai model rambut yang cocok untuk berbagai bentuk wajah dan gaya Pribadi. Dapatkan tips dan trik untuk menata rambut pendek agar selalu terlihat rapi dan menarik.",
    tags: ["Treatment", "Hair"],
  },
  {
    id: 6,
    slug: "cara-mengetahui-bentuk-wajah",
    imageSrc: "/images/arikel-6.png",
    title: "4 Cara Mengetahui Bentuk Wajah, Ini Langkah Mudahnya",
    description:
      "Bingung menentukan bentuk wajahmu? Temukan cara mudah untuk mengetahui bentuk wajahmu dengan langkah-langkah yang simpel dan praktis.",
    tags: ["Treatment", "Hair"],
  },
];

const DetailArticle: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [article, setArticle] = React.useState<Article | null>(null);

  React.useEffect(() => {
    const fetchedArticle = dataArticle.find(article => article.slug === slug) || null;
    setArticle(fetchedArticle);
  }, [slug]);

  if (!article) {
    return <div>Not Found</div>;
  }

  return (
    <div className='bg-[url("/images/bgArtikel.png")]'>
      <div className="w-full xl:px-60 lg:px-36 md:px-14 px-9  py-10">
        <div>
          <h4 className="font-black">Artikel</h4>
          <h1 className="text-center xl:text-6xl lg:text-4xl md:text-3xl text-2xl font-bold">{article.title}</h1>
          <p className="py-6 font-bold text-[#837F7F]">{article.tags.join(", ")}</p>
          <img src={article.imageSrc} alt={article.title} className="w-full" />
        </div>
        <article className="prose prose-lg min-w-fit">
          <div
            dangerouslySetInnerHTML={{
              __html: `
            <p>${article.description}</p>`,
            }}
          />
        </article>
      </div>
    </div>
  );
};

export default DetailArticle;
