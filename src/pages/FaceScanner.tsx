import React from "react";
import AnimationPage from "@/components/AnimationPage";
import Scanner from "@/components/modules/scanner/scanner-analisis";

const FaceScanner: React.FC = () => {
  return (
    <AnimationPage>
      <div className="container mx-auto py-10">
        <Scanner />
      </div>
    </AnimationPage>
  );
};

export default FaceScanner;
