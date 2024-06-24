import { useLocation, useNavigate, useParams } from "react-router-dom";
import useSWR from "swr";
import axios from "axios";
import LoadingArticle from "@/components/modules/Article/loading-article";

interface Article {
  id: number;
  imageurl: string;
  title: string;
  description: string;
  content: string;
  tags: string[];
}

// Define a fetcher function to use with swr
const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const ArticleDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const location = useLocation();
  const navigate = useNavigate();

  if (location.pathname === "/artikel/undefined"){
    navigate(`/artikel`)
  }
  console.log(location.pathname);
  // Use SWR for data fetching
  const { data: article, error: fetchError, isLoading } = useSWR(`http://localhost:3000/api/article/${slug}` , fetcher);
  console.log(location);


  if (isLoading) {
    return <div><LoadingArticle/></div>;
  }

  if (fetchError ) {
    return <div>{"Article not found"}</div>;
  }



  return (
    <div className='bg-[url("/images/bgArtikel.png")]'>
      <div className="w-full px-12 py-10 md:px-14 lg:px-36 xl:px-96">
        <div>
          <h4 className="font-black text-gray-400">Artikel</h4>
          <h1 className="text-2xl font-bold md:text-3xl lg:text-4xl xl:text-5xl">{article?.title}</h1>
          <div className="my-3 w-fit rounded bg-laser-300">
            <p className="px-6 py-0.5 text-xs font-bold text-white md:text-sm lg:text-base">
              {article?.tags.join(", ")}
            </p>
          </div>
          <img src={article?.imageurl} alt={article?.title} className="w-full" />
        </div>
        <article className="prose prose-lg py-10 prose-h1:text-xl prose-h2:text-lg prose-p:text-base md:prose-h1:text-2xl md:prose-h2:text-xl lg:prose-h1:text-3xl lg:prose-h2:text-2xl lg:prose-p:text-base xl:prose-h1:text-4xl xl:prose-h2:text-3xl xl:prose-p:text-lg">
          <div
            dangerouslySetInnerHTML={{
              __html: article?.content,
            }}
          />
        </article>
      </div>
    </div>
  );
};

export default ArticleDetail;
