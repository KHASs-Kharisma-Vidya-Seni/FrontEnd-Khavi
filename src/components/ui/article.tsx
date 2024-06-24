import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useMemo } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const TrendingCard = ({
  title,
  imageSrc,
  description,
  date,
  slug,
}: {
  imageSrc: string;
  title: string;
  description: string;
  date: string;
  slug: string;
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/artikel/${slug}`);
  };

  return (
    <div id="trending-1" className="relative h-full w-full cursor-pointer overflow-hidden" onClick={handleClick}>
      <div className="relative h-full">
        <motion.div
          style={{
            backgroundImage: `linear-gradient(
              0deg,
              rgba(0, 0, 0, 1) 0%,
              rgba(0, 0, 0, 0.5830707282913166) 40%,
              rgba(0, 0, 0, 0) 100%
            ), url(${imageSrc})`,
          }}
          className="custom-image absolute inset-0 z-10 h-full w-full bg-gradient-to-b from-black/20 to-black/65"
          whileHover={{ scale: 1.3, filter: "brightness(150%)" }}
        ></motion.div>
      </div>
      <div className="absolute bottom-6 left-10 z-10 w-5/6">
        <div className="relative flex flex-col gap-2">
          <h1 className="w-5/6 text-2xl font-bold text-heading-article lg:text-4xl">{title}</h1>
          <div className="text-sm lg:text-base">
            <p className="text-wild-sand-200">{description}</p>
            <p className="text-wild-sand-200">{date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ArticleTags = () => {
  const tags = ["All", "Hair", "Face", "Treatment"];

  const { search } = useLocation();
  const queryParams = useMemo(() => new URLSearchParams(search), [search]);
  const activeTag = queryParams.get("tag") || "All";

  return (
    <>
      {tags.map((tag, i) => (
        <NavLink
          to={tag === "All" ? "/artikel" : `/artikel?tag=${tag}`}
          key={i}
          className={cn(
            "text-xl",
            activeTag === tag ? "font-bold text-black" : ""
          )}
        >
          {tag}
        </NavLink>
      ))}
    </>
  );
};

// className={`text-xl ${tag === "All" ? "font-bold text-black" : "text-gray-500"}`}

export const ArticleCard = ({
  imageurl,
  description,
  tags,
  title,
  slug,
}: {
  imageurl: string;
  title: string;
  description?: string;
  tags: string[];
  slug: string;
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/artikel/${slug}`);
  };

  return (
    <article
      className="relative w-full max-w-full cursor-pointer overflow-hidden rounded-md shadow-lg"
      onClick={handleClick}
    >
      <figure className="h-52 w-full">
        <img src={imageurl} alt="" className="h-full w-full object-cover" />
      </figure>
      <div className="flex flex-col gap-2 px-5 py-5">
        <div className="flex gap-2">
          {tags.map((tag, i) => (
            <p key={i} className="inline max-w-fit rounded-lg bg-red-400 px-3 py-1 text-sm text-white">
              {tag}
            </p>
          ))}
        </div>
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-lg text-wild-sand-500 truncate">{description}</p>
      </div>
    </article>
  );
};
