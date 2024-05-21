import { cn } from "@/lib/utils";
import { convertToKebabCase } from "@/utility";
import { motion } from "framer-motion";

export const TrendingCard = ({
  title,
  imageSrc,
  description,
  date,
}: {
  imageSrc: string;
  title: string;
  description: string;
  date: string;
}) => {
  return (
    <div id="trending-1" className="relative h-full w-full overflow-hidden">
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
          whileHover={{ scale: 1.3, filter: "brightness(150%)" }}></motion.div>
      </div>
      <div className="absolute bottom-6 left-10 z-10 w-5/6">
        <div className="relative flex flex-col gap-2">
          <h1 className="w-5/6 text-4xl font-bold text-heading-article">
            {title}
          </h1>
          <div className="">
            <p className="text-wild-sand-200">{description}</p>
            <p className="text-wild-sand-200">{date}</p>
          </div>
          <a
            href={convertToKebabCase(`/article/${title}`)}
            className="absolute bottom-0 left-0 h-full w-full bg-transparent"></a>
        </div>
      </div>
    </div>
  );
};

export const ArticleTags = () => {
  const tags = ["All", "Hair", "Treatment", "Haircare"];
  return (
    <>
      {tags.map(tag => (
        <p
          className={cn(
            "text-xl",
            tag === "All" ? "font-bold text-black" : "font-normal text-gray-500"
          )}>
          {tag}
        </p>
      ))}
    </>
  );
};

export const ArticleCard = ({
  imageSrc,
  description,
  tags,
  title,
}: {
  imageSrc: string;
  title: string;
  description: string;
  tags: string[];
}) => {
  return (
    <article className="relative w-full max-w-full overflow-hidden rounded-md shadow-lg">
      <figure className="h-52 w-full">
        <img src={imageSrc} alt="" className="h-full w-full object-cover" />
      </figure>
      <div className="flex flex-col gap-2 px-5 py-5">
        <div className="flex gap-2">
          {tags.map(tag => (
            <p className="inline max-w-fit rounded-lg bg-red-400 px-3 py-1 text-sm text-white">
              {tag}
            </p>
          ))}
        </div>
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-lg text-wild-sand-500">{description}</p>
      </div>
      <a
        href={convertToKebabCase(`/article/${title}`)}
        className="absolute left-0 top-0 h-full w-full bg-transparent"></a>
    </article>
  );
};

{
  /* <div id="trending-1" className="relative h-full w-5/6">
              <div className="h-full w-full">
                <img
                  src={imageTrending1}
                  alt="hapy girl"
                  className="h-full w-full"
                />
                <div className="absolute inset-0 z-10 h-full w-full bg-gradient-to-b from-black/20 to-black/65"></div>
              </div>
              <div className="absolute bottom-6 left-10 z-10 w-5/6 ">
                <div className="flex flex-col gap-2">
                  <h1 className="w-4/6 text-4xl font-bold text-heading-article">
                    Merawat Bentuk Wajah Agar Simetris
                  </h1>
                  <p className="text-wild-sand-200">
                    Memiliki wajah simetris adalah dambaan banyak orang. Temukan
                    panduan lengkap untuk mendapatkan bentuk wajah yang ideal dan
                    proporsional.
                  </p>
                  <p className="text-wild-sand-200">11 Juni 2024</p>
                </div>
              </div>
            </div>
  
            <div id="trending-2" className="relative h-full w-5/6">
              <figure className="h-full w-full">
                <img
                  src={imageTrending2}
                  alt="man-glasss"
                  className="h-full w-full"
                />
                <div className="absolute inset-0 z-10 h-full w-full bg-gradient-to-b from-black/20 to-black/65"></div>
              </figure>
              <div className="absolute bottom-6 left-10 z-10 w-5/6 ">
                <div className="flex flex-col gap-2">
                  <h1 className="w-4/6 text-4xl font-bold text-heading-article">
                    Merawat Bentuk Wajah Agar Simetris
                  </h1>
                  <p className="text-wild-sand-200">
                    Memiliki wajah simetris adalah dambaan banyak orang. Temukan
                    panduan lengkap untuk mendapatkan bentuk wajah yang ideal dan
                    proporsional.
                  </p>
                  <p className="text-wild-sand-200">11 Juni 2024</p>
                </div>
              </div>
            </div> */
}
