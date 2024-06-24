import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

interface Article {
  id: number;
  imageurl: string;
  title: string;
  description: string;
  content: string;
  tags: string[];
}

const DetailArticle: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [article, setArticle] = React.useState<Article | null>(null);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/article/${slug}`);
        setArticle(response.data);
      } catch (error) {
        setError("Article not found");
      }
    };

    fetchArticle();
  }, [slug]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div className='bg-[url("/images/bgArtikel.png")]'>
      <div className="w-full px-12 py-10 md:px-14 lg:px-36 xl:px-96">
        <div>
          <h4 className="font-black text-gray-400">Artikel</h4>
          <h1 className="text-2xl font-bold md:text-3xl lg:text-4xl xl:text-5xl">{article.title}</h1>
          <div className="my-3 w-fit bg-laser-300 rounded">
            <p className="px-6 py-0.5 font-bold text-white lg:text-base md:text-sm text-xs">{article.tags.join(", ")}</p>
          </div>
          <img src={article.imageurl} alt={article.title} className="w-full" />
        </div>
        <article className="lg:prose-p:text-base prose-p:text-base prose prose-lg py-10 prose-h1:text-xl prose-h2:text-lg md:prose-h1:text-2xl md:prose-h2:text-xl lg:prose-h1:text-3xl lg:prose-h2:text-2xl xl:prose-h1:text-4xl xl:prose-h2:text-3xl xl:prose-p:text-lg">
          <div
            dangerouslySetInnerHTML={{
              __html: article.content,
            }}
          />
        </article>
      </div>
    </div>
  );
};

export default DetailArticle;
