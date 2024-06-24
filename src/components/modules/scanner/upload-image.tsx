import { useState } from "react";
import axios from "axios";
import { cn } from "@/lib/utils";
import { Toaster, toast } from "sonner";

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
    </>
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
      <h2 className="text-lg text-gray-400 sm:text-xl">
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
