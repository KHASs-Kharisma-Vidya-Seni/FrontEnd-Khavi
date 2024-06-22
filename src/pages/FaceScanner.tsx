import React from "react";
import AnimationPage from "@/components/AnimationPage";
import ImageUpload from "@/components/modules/scanner/upload-image";

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

const FaceScanner: React.FC = () => {
  return (
    <AnimationPage>
      <div className="container mx-auto py-10">
        <ImageUpload />

        <div>
          <div className="w-full"></div>
        </div>
      </div>
    </AnimationPage>
  );
};

export default FaceScanner;

const Result = ({
  resultHeading,
  resultValue,
  detailsInformation = false,
}: {
  resultHeading: string;
  resultValue?: string;
  detailsInformation?: boolean;
}) => {
  return (
    <div>
      <h2 className="text-xl">
        {resultHeading} : {detailsInformation ? null : <span>{resultValue ? resultValue : "-"}</span>}
      </h2>
      {detailsInformation && <p>{resultValue ? resultValue : "-"}</p>}
    </div>
  );
};

{
  /* <span className="my-6 block cursor-pointer rounded-md bg-[#CDB16E] px-4 py-2 text-center text-black hover:bg-[#CDB16E]/80">
                            UDrag & drop your image here, or click to select
                          </span> */
}
