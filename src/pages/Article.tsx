import React from 'react';
import { Link } from 'react-router-dom';
import Container from "@/components/Container";
import { ArticleCard, ArticleTags, TrendingCard } from "@/components/ui/article";
import useSWR from 'swr';
import axios from 'axios';
import { slugify } from '@/utils/slugify';

const fetcher = (url: string) => axios.get(url).then(res => res.data);

export default function Article() {
  const { data: dataArticle, error } = useSWR('http://localhost:3000/api/article', fetcher);
  const dataArticle = [
    {
      id: 1,
      slug: "rahasia-merawat-rambut-gimbal",
      imageSrc: "/images/arikel-1.png",
      title: "Rahasia Merawat Rambut Gimbal agar Tetap Sehat",
      description:
        "Metode efektif untuk merawat rambut gimbal agar tetap sehat dan terlihat menawan. Dari pemilihan produk perawatan yang tepat hingga teknik pencucian dan pemeliharaan sehari-hari",
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
  

  const dataTrending = [
    {
      id: 1,
      slug: "merawat-bentuk-wajah-agar-simetris",
      title: "Merawat Bentuk Wajah Agar Simetris",
      slug: "merawat-bentuk-wajah-agar-simetris",
      imageSrc: "/images/cewek-tranding-1.png",
      description:
        "Memiliki wajah simetris adalah dambaan banyak orang. Temukan panduan lengkap untuk mendapatkan bentuk wajah yang ideal dan proporsional.",
      date: "11 Juni 2024",
    },
    {
      id: 2,
      title: "Pesona Pria Gondrong , dimata Wanita",
      slug: "pesona-pria-gondrong-dimata-wanita",
      slug: "pesona-pria-gondrong-di-mata-wanita",
      title: "Pesona Pria Gondrong di Mata Wanita",
      imageSrc: "/images/cowo-trading-2-full.png",
      description:
        "Rambut gondrong pada pria memancarkan pesona yang unik dan tak terabaikan. Bagi banyak wanita, rambut panjang mencerminkan keberanian, kepercayaan diri, serta sisi kreatif dan bebas dari konvensi.",
      date: "11 Juni 2024",
    },
  ];
  

  if (error) return <div>Failed to load articles</div>;
  if (!dataArticle) return <div>Loading...</div>;

  return (
    <Container className="w-full pb-48">
      <div id="2" className="h-full w-full py-8">
        <div id="heading" className="pb-4">
          <h1 className="text-4xl font-bold">Trending</h1>
        </div>
        <div id="trending-main" className="flex h-[441px] w-full flex-col lg:flex-row">
          {dataTrending.map((trending, id) => (
            <TrendingCard {...trending} key={id} />
          ))}
        </div>
      </div>

      <div id="3">
        <div className="mb-4 flex gap-4">
          <ArticleTags />
        </div>
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {dataArticle.map((article: any) => (
            <Link to={`/artikel/${slugify(article.title)}`} key={article.id}>
              <ArticleCard {...article} />
            </Link>
          ))}
        </div>
      </div>
    </Container>
  );
}
