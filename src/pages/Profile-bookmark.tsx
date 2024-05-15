import AnimationPage from "@/components/AnimationPage";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import digiImage from "../assets/Luigi-Gigi-DallIgna.jpg";

export default function ProfileBookmark() {
  return (
    <AnimationPage>
      <h1 className="text-3xl font-bold">Bookmarks</h1>
      <Tread />
      <Tread />
    </AnimationPage>
  );
}

const Tread = () => {
  return (
    <div id="tread" className="my-5 rounded-lg bg-slate-100 px-5 py-5">
      <div className="flex items-center gap-x-2">
        <Avatar className="h-8 w-8">
          <AvatarImage className="object-cover" src={digiImage} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <h2 className="text-xl">Yamada San</h2>
      </div>
      <p className="text-gray-500">
        Pertama nih aku spilll, kamu harus tauu ini coyyyy!!!!
      </p>
      <div id="tags" className="flex gap-2">
        <Button>#hair</Button>
        <Button>#hair</Button>
      </div>
    </div>
  );
};
