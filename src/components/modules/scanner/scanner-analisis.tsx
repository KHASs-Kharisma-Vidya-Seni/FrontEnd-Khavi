import { useState } from "react";
import axios from "axios";
import { cn } from "@/lib/utils";
import { Toaster, toast } from "sonner";
import recomendedRambut from "../../../data/database_gaya_rambut.json";

interface ResultData {
  faceshape: string;
  faceshape_confidence: number;
  gender: string;
  gender_confidence: number;
  recommended_haircuts?: string[];
}

export default function Scanner() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [resultData, setResultData] = useState<ResultData | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const file = e.target.files[0];
    setSelectedFile(file);
    setPreviewImage(URL.createObjectURL(file));
    setResultData(null);
    setErrorMessage(null);
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      setUploading(true);
      const response = await axios.post<ResultData>(
        "https://khass.1i5ielfomcbk.us-south.codeengine.appdomain.cloud/hasil",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Upload success!", response.data);

      toast.success("Successfully scanned your face!!");

      setResultData(response.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Error uploading file: ", error.response?.data?.error);
        const errorMessage = error.response?.data?.error || "Unknown error occurred";
        toast.error(errorMessage);
      }
    } finally {
      setUploading(false);
    }
  };

  const handleClearImage = () => {
    setSelectedFile(null);
    setPreviewImage(null);
    setResultData(null);
    setErrorMessage(null);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (!e.dataTransfer.files) return;
    const file = e.dataTransfer.files[0];
    setSelectedFile(file);
    setPreviewImage(URL.createObjectURL(file));
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const resultsModel = [
    {
      resultHeading: "Bentuk Wajah",
      resultValue: resultData?.faceshape,
    },
    {
      resultHeading: "Gender",
      resultValue: resultData?.gender,
    },
  ];

  return (
    <>
      <Toaster richColors />
      <div className="flex flex-col justify-center gap-10 gap-x-20 lg:flex-row lg:gap-y-0">
        <div className="w-full xl:w-3/6">
          <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            className="h-[300px] w-full"
            style={{
              border: "2px dashed #ccc",
              padding: "20px",
              textAlign: "center",
              cursor: "pointer",
              marginBottom: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {previewImage ? (
              <img
                src={previewImage}
                alt="Preview"
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  marginBottom: "10px",
                  objectFit: "cover",
                }}
              />
            ) : (
              <>
                <label
                  htmlFor="file-upload"
                  className="flex h-full w-full cursor-pointer items-center justify-center text-gray-500 hover:text-gray-800"
                >
                  Unggah atau seret foto Anda di sini untuk memindai bentuk wajah Anda
                </label>
              </>
            )}
          </div>

          <input type="file" id="file-upload" onChange={handleFileChange} style={{ display: "none" }} />

          <div className="flex flex-col gap-2">
            <button
              onClick={handleUpload}
              disabled={uploading || !selectedFile}
              className={cn(
                "w-full cursor-pointer rounded-lg py-2 text-lg text-white hover:bg-[#CDB16E]/90",
                uploading ? "bg-[#CDB16E]/80 " : "bg-[#CDB16E]"
              )}
            >
              {uploading ? "Scanning..." : "Scan Face"}
            </button>

            {selectedFile && (
              <button onClick={handleClearImage} className="w-full  rounded-lg bg-red-400 py-2 text-lg text-white">
                Clear Image
              </button>
            )}
          </div>

          {errorMessage && <p style={{ color: "red", marginBottom: "20px" }}>{errorMessage}</p>}
        </div>
        <div id="analysis" className="flex w-full flex-col gap-y-8 xl:w-3/6">
          <div>
            <h1 className="text-2xl font-bold sm:text-5xl">Hasil Analisa</h1>
            <div className="">
              {resultsModel?.map((item, index) => (
                <Result key={index} resultHeading={item.resultHeading} resultValue={item.resultValue} />
              ))}
            </div>
          </div>
          <div>
            <TreatmentDescription resultFace={resultData?.faceshape || ""} />
          </div>
        </div>
      </div>
      {resultData && (
        <div className="flex flex-col items-center justify-center py-10">
          <h1 className="text-4xl font-bold">Hair Recomended</h1>
          <HairStyleList resultHair={resultData.faceshape} resultGender={resultData.gender} />
        </div>
      )}
    </>
  );
}

interface ResultProps {
  resultHeading: string;
  resultValue?: string;
  detailsInformation?: boolean;
}

const Result = ({ resultHeading, resultValue, detailsInformation = false }: ResultProps) => {
  return (
    <div>
      <h2 className="text-lg font-bold text-shark-600 sm:text-xl">
        {resultHeading} : {detailsInformation ? null : <span>{resultValue ? resultValue : "-"}</span>}
      </h2>
      {detailsInformation && <p>{resultValue ? resultValue : "-"}</p>}
    </div>
  );
};

// interface TreatmentDescriptionProps extends Omit<ResultProps, "detailsInformation"> {}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TreatmentDescription = ({ resultFace }: { resultFace: string }) => {
  const resultRecommendedHair = recomendedRambut.filter(item => item.shape_face === resultFace.toLowerCase());
  const shape_face_description =
    resultRecommendedHair.length > 0 ? resultRecommendedHair[0].shape_face_description : "";

  return (
    <div className="">
      <h1 className="text-xl font-bold sm:text-3xl">Treatment Description</h1>
      <div className="py-2">
        <div className="mb-2 flex flex-col gap-y-4">
          <div>
            <h2 className="text-lg font-bold text-shark-800 sm:text-xl">
              Bentuk Wajah : {resultFace ? resultFace : "-"}
            </h2>
            <p className="text-lg leading-relaxed text-shark-500">{shape_face_description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const HairStyleList = ({ resultHair, resultGender }: { resultHair: string; resultGender: string }) => {
  const resultRecommendedHair = recomendedRambut.filter(item => item.shape_face === resultHair.toLowerCase());

  function mapGender(gender: string) {
    if (gender.toLowerCase() === "male") {
      return "cowo";
    } else if (gender.toLowerCase() === "female") {
      return "cewe";
    }
  }

  function capitalizeWords(str: string): string {
    const words = str.split("_").map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());

    return words.join(" ");
  }

  console.log(resultGender);

  const debug = resultRecommendedHair.map(i => {
    console.log(i.gender);
  });

  console.log(debug);

  return (
    <div className="py-10">
      {resultRecommendedHair.map(hair => (
        <>
          {hair.gender === mapGender(resultGender) &&
            hair.recommended_hair.map(item => (
              <div className="flex flex-col items-center">
                <h2 className="self-baseline pt-10 text-3xl font-bold text-shark-800 sm:text-4xl">
                  {capitalizeWords(item.hair_recomend)}
                </h2>
                <p className="w-full lg:w-5/6 self-baseline text-xl  leading-relaxed text-shark-500">{item.deskripsi}</p>
                <div className="flex flex-col space-x-2 py-2 lg:flex-row">
                  {item?.foto.map(foto => <img src={foto} alt="" className="w-full object-cover lg:w-[250px] " />)}
                </div>
              </div>
            ))}
        </>
      ))}
    </div>
  );
};
