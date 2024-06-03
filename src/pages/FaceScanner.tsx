import React, { useState } from "react";
import AnimationPage from "@/components/AnimationPage";
import { Star as StarIcon } from "lucide-react";
import { motion } from "framer-motion";

const HairStyleItem: React.FC<{
  imgSrc: string;
  altText: string;
  styleName: string;
}> = ({ imgSrc, altText, styleName }) => (
  <div className="inline-flex flex-col items-center justify-start">
    <img className="h-72 w-72 rounded-2xl" src={imgSrc} alt={altText} />
    <div className="inline-flex items-start justify-start gap-2.5">
      <div className="font-['Abhaya Libre'] mb-3 text-xl font-bold leading-9 text-gray-800 lg:mb-0 lg:pt-2 lg:text-3xl">
        {styleName}
      </div>
    </div>
  </div>
);

const Rekomendasi = [
  {
    imgSrc: "/images/analisis/mullet.png",
    altText: "Mullet with Low Taper",
    styleName: "Mullet with Low Taper",
  },
  {
    imgSrc: "/images/analisis/taper.png",
    altText: "Side Part",
    styleName: "Side Part",
  },
  {
    imgSrc: "/images/analisis/sling back.png",
    altText: "Sling Back",
    styleName: "Sling Back",
  },
  {
    imgSrc: "/images/analisis/high taper.png",
    altText: "High Taper",
    styleName: "High Taper",
  },
  {
    imgSrc: "/images/analisis/70 30.png",
    altText: "70/30",
    styleName: "70/30",
  },
  {
    imgSrc: "/images/analisis/3070.png",
    altText: "70/30",
    styleName: "70/30",
  },
];

const FaceScanner: React.FC = () => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [analysisResults, setAnalysisResults] = useState({
    "Bentuk Wajah": "",
    "Warna Rambut": "",
    "Tulang Pipi": "",
  });
  const [showRecommendations, setShowRecommendations] = useState(false);
  const [uploadCount, setUploadCount] = useState(0);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result as string);
        // contoh hasil scan
        setAnalysisResults({
          "Bentuk Wajah": "Oval",
          "Warna Rambut": "Hitam",
          "Tulang Pipi": "Tinggi",
        });
        setShowRecommendations(true);
        setUploadCount(prevCount => prevCount + 1);
      };
      reader.readAsDataURL(file);
    }
  };

  const analysisItems = [
    { name: "Bentuk Wajah", img: "/images/analisis/bentuk-wajah.png" },
    { name: "Warna Rambut", img: "/images/analisis/warna-rambut.png" },
    { name: "Tulang Pipi", img: "/images/analisis/tulang-pipi.png" },
  ];

  const Foto = {
    img: "/images/analisis/foto.png",
    maxWidth: "100%",
    maxHeight: "100%",
  };

  const SentIcon = { img: "/images/analisis/Sent.png" };

  const Star: React.FC<{
    index: number;
    active: boolean;
    handleClick: (index: number) => void;
  }> = ({ index, active, handleClick }) => (
    <div
      className="cursor-pointer"
      onClick={() => handleClick(index)}
      style={{ marginRight: "5px" }}>
      <StarIcon color={active ? "#FFC107" : "#e6e6e6"} size={30} />
    </div>
  );

  const StarRating: React.FC<{
    rating: number;
    setRating: React.Dispatch<React.SetStateAction<number>>;
  }> = ({ rating, setRating }) => (
    <div className="stars flex flex-row">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          index={index + 0}
          active={index < rating}
          handleClick={index => setRating(index + 1)}
        />
      ))}
    </div>
  );

  const [rating, setRating] = useState(0);

  return (
    <AnimationPage>
      <div className="">
        <div className="my-5 flex justify-center">
          <div className="mr-[133px] flex h-auto w-auto flex-col items-center justify-start pt-5">
            <div className="analysisresult w-96 flex-shrink-0 flex-grow justify-center gap-12 lg:flex">
              <div
                className=" foto mt-1 flex h-[500px] w-[515px] flex-col items-center justify-center gap-5 rounded-md lg:h-[600px]"
                style={{
                  backgroundImage: `url(${uploadedImage || Foto.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}>
                <div className="frameimg flex h-96 w-96 flex-col items-center justify-end gap-5 rounded pb-12">
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    id="imageUpload"
                    onChange={handleImageUpload}
                  />
                  <label
                    htmlFor="imageUpload"
                    className={`postbutton flex h-12 cursor-pointer items-center justify-center gap-2.5 rounded-lg border border-gray-800 bg-laser-300 p-2.5 ${
                      uploadedImage
                        ? "mb-[-100px] lg:mb-[-225px]"
                        : "mb-[-100px]"
                    }`}>
                    <span className="cobascan text-lg font-bold leading-relaxed text-slate-900 lg:text-xl">
                      {uploadedImage ? "Scan Ulang" : "Coba Scan"}
                    </span>
                  </label>
                </div>
              </div>
              <div className="frame102 flex flex-col items-start justify-start gap-12">
                <motion.div
                  key={`analysis-${uploadCount}`}
                  className="analysisresult flex flex-col items-start justify-center gap-5"
                  initial={{
                    y: 100,
                    opacity: 0,
                  }}
                  animate={{
                    y: 0,

                    opacity: 1,
                  }}
                  transition={{
                    delay: 0.2,
                  }}>
                  <div className="analysis mt-7 w-80 items-center justify-start gap-2.5 lg:mt-0 lg:flex">
                    <h1 className="hasilanalisis mb-[-10px] text-3xl font-black leading-10 text-gray-800 lg:text-4xl">
                      Hasil Analisis
                    </h1>
                  </div>
                  <div className="result flex flex-col items-start justify-center">
                    {analysisItems.map(item => (
                      <div
                        key={item.name}
                        className="flex w-full items-center justify-start gap-5">
                        <div className="flex items-center gap-2.5">
                          <div className="w-48 text-xl font-bold leading-loose text-gray-800 lg:text-2xl">
                            {item.name}
                          </div>
                          <div className="text-2xl font-bold leading-loose text-gray-800">
                            :
                          </div>
                        </div>
                        <div className="text-xl font-bold leading-loose text-gray-800 lg:text-2xl">
                          {analysisResults[item.name]}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
                <motion.div
                  key={`tips-${uploadCount}`}
                  className="frame103 mr-[-80px] flex flex-col items-start justify-start gap-1"
                  initial={{
                    y: 100,
                    opacity: 0,
                  }}
                  animate={{
                    y: 0,

                    opacity: 1,
                  }}
                  transition={{
                    delay: 0.5,
                  }}>
                  <div className="treatment mt-[-30px] flex items-center justify-center gap-2.5 py-2.5 lg:mt-0">
                    <h2 className="text-3xl font-bold leading-9 text-gray-800 lg:text-4xl">
                      Treatment <span className="text-laser-300">Tips</span>
                    </h2>
                  </div>
                  <div className="frame107 flex flex-col items-start justify-start gap-5">
                    {analysisItems.map((item, index) => (
                      <div
                        key={index}
                        className="face flex items-start justify-start gap-12 border-b border-laser-300 pb-2.5">
                        <img
                          src={item.img}
                          alt={item.name}
                          className="opa-0 h-20 rounded-md bg-laser-300 object-cover lg:h-[100px] lg:w-[100px]"
                        />
                        <div className="frame106 flex flex-col items-start justify-start gap-2.5">
                          <div className="frame104 mt-[-8px] flex items-center justify-start gap-2.5 lg:mt-[-6px]">
                            <div className="ml-[-30px] w-[126px] lg:ml-[-25px] lg:w-[160px]">
                              <h3 className="overflow-hidden text-xl font-bold leading-9 text-gray-800 lg:text-2xl">
                                {item.name}
                              </h3>
                            </div>
                            <h3 className="mt-[-100px]font-bold overflow-hidden text-xl leading-9 text-gray-800 lg:mt-0 lg:text-3xl">
                              :
                            </h3>
                            <h3 className="overflow-hidden text-xl font-bold leading-9 text-gray-800 lg:pl-3 lg:text-2xl">
                              {analysisResults[item.name]}
                            </h3>
                          </div>
                          {uploadedImage && (
                            <div className="deskripsi flex w-96 items-center justify-start gap-2.5">
                              <p
                                className="ml-[-30px] mt-[-10px] text-xs font-normal leading-normal text-gray-800 lg:ml-[-23px] lg:mt-[-10px] lg:text-base"
                                style={{ maxWidth: "100%" }}>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Eum ducimus cupiditate
                                molestiae atque. Placeat ipsa dolorem quaerat,
                                consectetur voluptas accusamus fugiat aperiam
                                libero doloribus iure animi optio ducimus?
                                Maxime, beatae?
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {showRecommendations && (
          <>
            <motion.div
              key={`recommendations-${uploadCount}`}
              className="part2 ml-[63px] mt-20 inline-flex flex-col items-center gap-16"
              initial={{
                y: 100,
                opacity: 0,
              }}
              animate={{
                y: 0,

                opacity: 1,
              }}
              transition={{
                delay: 0.8,
              }}>
              <div className="rekomen mr-14 mt-[-50px] inline-flex items-center justify-start gap-2.5 lg:mr-0 lg:mt-0">
                <div className="rekomendasigayarambut font-['Abhaya Libre'] text-3xl font-extrabold  text-gray-800 lg:text-5xl">
                  Rekomendasi Gaya Rambut
                </div>
              </div>
              <div className="photo flex flex-col items-start justify-start gap-10">
                <div className="baris1 ml-[95px] mt-[-20px] items-start justify-center gap-12 lg:ml-0 lg:mt-0 lg:inline-flex">
                  {Rekomendasi.slice(0, 3).map((style, index) => (
                    <HairStyleItem
                      key={index}
                      imgSrc={style.imgSrc}
                      altText={style.altText}
                      styleName={style.styleName}
                    />
                  ))}
                </div>
                <div className="baris2 ml-[95px] mt-[-35px] items-start justify-center gap-12 lg:ml-0 lg:mt-0 lg:inline-flex">
                  {Rekomendasi.slice(3).map((style, index) => (
                    <HairStyleItem
                      key={index}
                      imgSrc={style.imgSrc}
                      altText={style.altText}
                      styleName={style.styleName}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
            <motion.div
              key={`reviews-${uploadCount}`}
              className="ulasanbox mb-5 ml-16 mt-9 h-[270px] w-[480px] flex-col rounded-lg bg-zinc-100 lg:h-[313px] lg:w-[960px]"
              initial={{
                y: 100,
                opacity: 0,
              }}
              animate={{
                y: 0,

                opacity: 1,
              }}
              transition={{
                delay: 1,
              }}>
              <div className="ulasanhead items-center justify-center gap-2.5 self-stretch rounded-tl-lg rounded-tr-lg bg-gray-800 p-2.5">
                <div className="ulasantext font-['Abhaya Libre'] text-center text-2xl font-extrabold text-zinc-100 lg:text-4xl">
                  Ulasan
                </div>
              </div>
              <div className="frame14445 mt-5 flex h-52 flex-col items-center justify-start gap-5 self-stretch px-5">
                <StarRating rating={rating} setRating={setRating} />
                <div className="frame14442 flex h-32 flex-col items-center justify-between self-stretch rounded-lg border border-black p-2.5 lg:h-40">
                  <div className="frame14444 inline-flex items-center justify-start gap-2.5 self-stretch">
                    <textarea
                      placeholder="Berikan penilainmu terhadap web ini..."
                      className="font-['Abhaya Libre'] h-20 border-none bg-transparent text-xs font-normal text-black outline-none lg:h-28"
                      style={{
                        width: "100%",
                        padding: "0.5rem",
                        resize: "none",
                      }}
                    />
                  </div>
                  <div className="frame14446 mt-[-30px] inline-flex  items-center justify-end gap-2.5 self-stretch lg:mt-0">
                    <button>
                      <img className="sent h-6 w-6" src={SentIcon.img} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </div>
    </AnimationPage>
  );
};

export default FaceScanner;
