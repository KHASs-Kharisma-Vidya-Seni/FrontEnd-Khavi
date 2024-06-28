import React from "react";
import AnimationPage from "@/components/AnimationPage";
import Scanner from "@/components/modules/scanner/scanner-analisis";
import { useAuth } from "@/hooks/use-auth";

const FaceScanner: React.FC = () => {
  const { currentUser } = useAuth();

  if(!currentUser || currentUser === null) {
    return <div className="flex h-screen w-screen items-center justify-center">Please login use Face Scanner</div>
  }
  return (
    <AnimationPage>
      <div className="container mx-auto py-10">
        <Scanner />
      </div>
    </AnimationPage>
  );
};

export default FaceScanner;
