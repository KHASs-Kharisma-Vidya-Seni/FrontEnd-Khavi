import { useState } from "react";
import axios from "axios";
import { cn } from "@/lib/utils";

interface ResultData {
  faceshape: string;
  faceshape_confidence: number;
  gender: string;
  gender_confidence: number;
  recommended_haircuts?: string[];
}

const ImageUpload = () => {
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
      setResultData(response.data);
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 401) {
        console.error("Error uploading file: ", error.response?.data?.error);
        const errorMessage = error.response?.data?.error || "Unknown error occurred";
        setErrorMessage(errorMessage);
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
    <div className="flex flex-col justify-center gap-10 gap-x-20 lg:flex-row lg:gap-y-0">
      <div>
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          className=" h-[300px] w-full  lg:w-[300px]"
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
              <label htmlFor="file-upload" className="flex h-full w-full items-center justify-center ">
                Drag & drop your image here, or click to select
              </label>
            </>
          )}
        </div>

        <input type="file" id="file-upload" onChange={handleFileChange} style={{ display: "none" }} />

        <div className="flex flex-col gap-2">
          <button
            onClick={handleUpload}
            disabled={uploading || !selectedFile}
            className={cn("w-full rounded-lg py-2 text-lg text-white", uploading ? "bg-[#CDB16E]/80 " : "bg-[#CDB16E]")}
          >
            {uploading ? "Uploading..." : "Upload"}
          </button>

          {selectedFile && (
            <button onClick={handleClearImage} className="w-full  rounded-lg bg-red-400 py-2 text-lg text-white">
              Clear Image
            </button>
          )}
        </div>

        {errorMessage && <p style={{ color: "red", marginBottom: "20px" }}>{errorMessage}</p>}
      </div>
      <div id="analysis" className="flex flex-col gap-y-8">
        <div>
          <h1 className="text-2xl font-bold sm:text-4xl">Hasil Analisa</h1>
          {resultsModel?.map((item, index) => (
            <Result key={index} resultHeading={item.resultHeading} resultValue={item.resultValue} />
          ))}
        </div>
        <div>
          <TreatmentDescription resultsModel={resultsModel} />
        </div>
      </div>
    </div>
  );
};

export default ImageUpload;

interface ResultProps {
  resultHeading: string;
  resultValue?: string;
  detailsInformation?: boolean;
}

const Result = ({ resultHeading, resultValue, detailsInformation = false }: ResultProps) => {
  return (
    <div>
      <h2 className="text-lg sm:text-xl">
        {resultHeading} : {detailsInformation ? null : <span>{resultValue ? resultValue : "-"}</span>}
      </h2>
      {detailsInformation && <p>{resultValue ? resultValue : "-"}</p>}
    </div>
  );
};

interface TreatmentDescriptionProps extends Omit<ResultProps, "detailsInformation"> {}

const TreatmentDescription = ({ resultsModel }: { resultsModel: TreatmentDescriptionProps[] }) => {
  console.log(resultsModel);
  return (
    <div>
      <h1 className="text-xl font-bold sm:text-2xl">Treatment Description</h1>
      <div>
        {resultsModel.map((item, index) => (
          <Result key={index} resultHeading={item.resultHeading} resultValue={item.resultValue} />
        ))}
      </div>
    </div>
  );
};
