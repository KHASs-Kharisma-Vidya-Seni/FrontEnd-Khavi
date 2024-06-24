import useSWR from "swr";
import axios from "axios";

import { Link } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";

import { ArticleCard, ArticleTags, TrendingCard } from "@/components/ui/article";
import { slugify } from "@/utils/slugify";

import Container from "@/components/Container";
import AnimationPage from "@/components/AnimationPage";

const fetcher = (url: string) => axios.get(url).then(res => res.data);

export default function Article() {
  const { data: dataArticle, error } = useSWR("http://localhost:3000/api/article", fetcher);
  const dataTrending = [
    {
      id: 1,
      slug: "merawat-bentuk-wajah-agar-simetris",
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

  const location = useLocation();

  // Memoize searchParams using useMemo
  const searchParams = useMemo(() => new URLSearchParams(location.search), [location.search]);
  const initialTag = searchParams.get("tag");

  const [tag, setTag] = useState(initialTag);

  // Menggunakan useEffect untuk memantau perubahan pada query parameter 'tag'
  useEffect(() => {
    const newTag = searchParams.get("tag");
    setTag(newTag);
  }, [location.search, searchParams]);

  // Filter dataArticle berdasarkan nilai tag yang didapat dari query parameter
  const filteredArticles = tag ? dataArticle.filter(article => article.tags.includes(tag)) : dataArticle;

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
          {filteredArticles.map((article: any, id: number) => (
            <Link key={id} to={`/artikel/${slugify(article.title)}`} >
              <ArticleCard {...article} />
            </Link>
          ))}
        </div>
      </div>
    </Container>
  );
}
