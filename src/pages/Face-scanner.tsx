import React, { useState } from "react";
import AnimationPage from "@/components/AnimationPage";
import Foto from "../assets/img/foto.png";
import Bentukwajah from "../assets/img/bentuk-wajah.png";
import Warnarambut from "../assets/img/warna-rambut.png";
import Tulangpipi from "../assets/img/tulang-pipi.png";
import Senticon from "../assets/img/Sent.png";
import Star from "../assets/img/Fill Star.png";
import mulet from "../assets/img/mullet.png";
import taper from "../assets/img/taper.png";
import slingback from "../assets/img/sling back.png";
import hightaper from "../assets/img/high taper.png";
import midrange from "../assets/img/70 30.png";
import highrange from "../assets/img/3070.png";

const HairStyleItem: React.FC<{
  imgSrc: string;
  altText: string;
  styleName: string;
}> = ({ imgSrc, altText, styleName }) => (
  <div className="inline-flex flex-col items-center justify-start">
    <img className="h-72 w-72 rounded-2xl" src={imgSrc} alt={altText} />
    <div className="inline-flex items-start justify-start gap-2.5">
      <div className="font-['Abhaya Libre'] text-3xl font-bold leading-9 text-gray-800">
        {styleName}
      </div>
    </div>
  </div>
);

const hairStyles = [
  {
    imgSrc: mulet,
    altText: "Mullet with Low Taper",
    styleName: "Mullet with Low Taper",
  },
  { imgSrc: taper, altText: "Side Part", styleName: "Side Part" },
  { imgSrc: slingback, altText: "Sling Back", styleName: "Sling Back" },
  { imgSrc: hightaper, altText: "High Taper", styleName: "High Taper" },
  { imgSrc: midrange, altText: "70/30", styleName: "70/30" },
  { imgSrc: highrange, altText: "70/30", styleName: "70/30" },
];

const FaceScanner: React.FC = () => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [analysisResults, setAnalysisResults] = useState({
    "Bentuk Wajah": "",
    "Warna Rambut": "",
    "Tulang Pipi": "",
  });
  const [showRecommendations, setShowRecommendations] = useState(false);

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
      };
      reader.readAsDataURL(file);
    }
  };

  const analysisItems = [
    { name: "Bentuk Wajah", img: Bentukwajah },
    { name: "Warna Rambut", img: Warnarambut },
    { name: "Tulang Pipi", img: Tulangpipi },
  ];

  return (
    <AnimationPage>
      <div className="">
        <div className="my-5 flex justify-center">
          <div className="mr-[200px] flex h-auto w-96 flex-col items-center justify-start pt-5">
            <div className="AnalysisResult flex w-96 flex-shrink-0 flex-grow justify-center gap-12">
              <div
                className="Foto mt-[85px] flex h-[600px] flex-col items-center justify-center gap-5 rounded-md bg-slate-400"
                style={{
                  backgroundImage: `url(${uploadedImage || Foto})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}>
                <div className="Frameimg mt-[300px] flex h-96 w-96 flex-col items-center justify-end gap-5 rounded pb-12">
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    id="imageUpload"
                    onChange={handleImageUpload}
                  />
                  <label
                    htmlFor="imageUpload"
                    className="PostBtn flex h-12 cursor-pointer items-center justify-center gap-2.5 rounded-lg border border-gray-800 bg-laser-300 p-2.5">
                    <span className="CobaScan text-xl font-bold leading-relaxed text-zinc-100">
                      Coba Scan
                    </span>
                  </label>
                </div>
              </div>
              <div className="Frame102 flex flex-col items-start justify-start gap-12">
                <div className="AnalysisResult flex flex-col items-start justify-center gap-5">
                  <div className="Analysis flex w-80 items-center justify-start gap-2.5">
                    <h1 className="HasilAnalisis mb-[-10px] text-4xl font-black leading-10 text-gray-800">
                      Hasil Analisis
                    </h1>
                  </div>
                  <div className="Result flex flex-col items-start justify-center">
                    {analysisItems.map(item => (
                      <div
                        key={item.name}
                        className="flex w-full items-center justify-start gap-5">
                        <div className="text-2xl font-bold leading-loose text-gray-800">
                          {item.name}
                        </div>
                        <div className="flex h-8 items-center">
                          <div className="w-5 text-center text-2xl font-bold leading-loose text-gray-800">
                            :
                          </div>
                          <div className="text-2xl font-bold leading-loose text-gray-800">
                            {analysisResults[item.name]}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="Frame103 mr-[-80px] flex flex-col items-start justify-start  gap-1">
                  <div className="Treatment flex items-center justify-center gap-2.5 py-2.5">
                    <h2 className="text-3xl font-bold leading-9 text-gray-800">
                      Treatment <span className="text-laser-300">Tips</span>
                    </h2>
                  </div>
                  <div className="Frame107 flex flex-col items-start justify-start gap-5">
                    {analysisItems.map((item, index) => (
                      <div
                        key={index}
                        className="Face flex items-start justify-start gap-12 border-b border-laser-300 pb-2.5">
                        <img
                          src={item.img}
                          alt={item.name}
                          className="opa h-36 w-36 rounded-md bg-laser-300 object-cover"
                        />
                        <div className="Frame106 flex flex-col items-start justify-start gap-2.5">
                          <div className="Frame104 flex items-center justify-start gap-2.5">
                            <h3 className="overflow-hidden text-3xl font-bold leading-9 text-gray-800">
                              {item.name} : {analysisResults[item.name]}
                            </h3>
                          </div>
                          {uploadedImage && (
                            <div className="deskripsi flex w-96 items-center justify-start gap-2.5">
                              <p
                                className="text-base font-normal leading-normal text-gray-800"
                                style={{ maxWidth: "100%" }}>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Eum ducimus cupiditate
                                molestiae atque. Placeat ipsa dolorem quaerat,
                                consectetur voluptas accusamus fugiat aperiam
                                libero doloribus iure animi optio ducimus?
                                Maxime, beatae? {item.name.toLowerCase()}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {showRecommendations && (
          <>
            <div className="Part2 ml-[65px] mt-20 inline-flex flex-col items-center gap-16">
              <div className="Rekomen inline-flex items-center justify-start gap-2.5">
                <div className="RekomendasiGayaRambut font-['DM Serif Text'] text-5xl font-normal text-gray-800">
                  Rekomendasi Gaya Rambut
                </div>
              </div>
              <div className="Photo flex flex-col items-start justify-start gap-10">
                <div className="Baris1 inline-flex items-start justify-center gap-12">
                  {hairStyles.slice(0, 3).map((style, index) => (
                    <HairStyleItem
                      key={index}
                      imgSrc={style.imgSrc}
                      altText={style.altText}
                      styleName={style.styleName}
                    />
                  ))}
                </div>
                <div className="Baris2 inline-flex items-start justify-center gap-12">
                  {hairStyles.slice(3).map((style, index) => (
                    <HairStyleItem
                      key={index}
                      imgSrc={style.imgSrc}
                      altText={style.altText}
                      styleName={style.styleName}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="Ulasan mb-5 ml-16 mt-9 h-[313px] w-[960px] flex-col rounded-lg bg-zinc-100">
              <div className="Ulasan items-center justify-center gap-2.5 self-stretch rounded-tl-lg rounded-tr-lg bg-gray-800 p-2.5">
                <div className="Ulasan font-['Abhaya Libre ExtraBold'] text-center text-4xl font-extrabold text-zinc-100">
                  Ulasan
                </div>
              </div>
              <div className="Frame14445 mt-5 flex h-52 flex-col items-center justify-start gap-5 self-stretch px-5">
                <div className="Stars inline-flex items-center justify-center gap-1.5">
                  <img className="FillStar h-6 w-6" src={Star} />
                  <img className="FillStar h-6 w-6" src={Star} />
                  <img className="FillStar h-6 w-6" src={Star} />
                  <img className="FillStar h-6 w-6" src={Star} />
                  <img className="FillStar h-6 w-6" src={Star} />
                </div>
                <div className="Frame14442 flex h-40 flex-col items-center justify-between self-stretch rounded-lg border border-black p-2.5">
                  <div className="Frame14444 inline-flex items-center justify-start gap-2.5 self-stretch">
                    <input
                      type="text"
                      placeholder="Berikan penilainmu terhadap web ini..."
                      className="font-['Abhaya Libre'] border-none text-xs font-normal text-black outline-none"
                      style={{ width: "100%", padding: "0.5rem" }}
                    />
                  </div>
                  <div className="Frame14446 inline-flex items-center justify-end gap-2.5 self-stretch">
                    <button>
                      <img className="Sent h-6 w-6" src={Senticon} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </AnimationPage>
  );
};

export default FaceScanner;
