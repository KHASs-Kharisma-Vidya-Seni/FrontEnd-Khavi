import { SidebarForum } from "@/components/modules/Forum/side-bar-forum";
import { LeftSideForum } from "@/components/modules/Forum/left-forum-forum";
import { RightSideForum } from "@/components/modules/Forum/right-side-forum";

import { cn } from "@/lib/utils";
import { useScrollPosition } from "@/hooks/use-scroll-position";
import AnimationPage from "@/components/AnimationPage";

import axios from "axios";
import useSWR from "swr";
import { BASE_URL_API } from "@/utility/base-url";
import type { Forum } from "@/components/types/forum-types";

  interface ForumData {
    forums: Forum[];
  }

const fetcher = async (url: string) => {
  return axios.get(url, { withCredentials: true }).then((res) => res.data);
};

export default function Forum() {
  const isScrolled = useScrollPosition();

  const { data, error } = useSWR<ForumData>(`${BASE_URL_API}/forum?withUser=true`, fetcher);

  if (!data) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  if (error) {
    return <div>Gagal mengambil data forum pengguna. Silakan coba lagi nanti.</div>;
  }

  return (
    <AnimationPage>
      <div className="flex flex-col justify-center gap-2 bg-shark-900 p-0 xl:container lg:bg-white lg:bg-[url('/images/bgArtikel.png')] lg:pb-[30px] lg:pt-8">
        <div
          className={cn(
            "fixed left-0 flex h-screen w-12 justify-center border-r-[0.1875rem] border-t-[0.1875rem] border-shark-800 bg-shark-900 xl:hidden",
            isScrolled ? "top-0" : "top-24"
          )}
        >
          <div className="">
            <SidebarForum />
          </div>
        </div>
        <div className="">
          <div className="hidden xl:block">
            <LeftSideForum />
          </div>
          <div className="">
            <RightSideForum posts={data.forums} />
          </div>
        </div>
      </div>
    </AnimationPage>
  );
}
