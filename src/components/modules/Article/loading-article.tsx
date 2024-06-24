import PacmanLoader from "react-spinners/PacmanLoader";

export default function LoadingArticle() {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
        <PacmanLoader color={"#d69c36"} loading={true} size={100} />
    </div>
  );
}
