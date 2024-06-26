import { SidebarForum } from "@/components/modules/Forum/side-bar-forum";
import { ForumFilterSidebar } from "@/components/modules/Forum/forum-filter-sidebar";

import { cn } from "@/lib/utils";
import { useScrollPosition } from "@/hooks/use-scroll-position";
import AnimationPage from "@/components/AnimationPage";

import axios from "axios";
import useSWR, { mutate } from "swr";
import { BASE_URL_API } from "@/utility/base-url";
import type { Forum } from "@/components/types/forum-types";
import ForumDataCard from "../components/modules/Forum/forum-data";
import CreateForum from "@/components/modules/Forum/create-forum";
import { HashLink } from "react-router-hash-link";
import { useState } from "react";
import ErrorMessage from "@/components/ErrorMessage";

interface ForumData {
  forums: Forum[];
}

const fetcher = async (url: string) => {
  return axios.get(url, { withCredentials: true }).then(res => res.data);
};

export default function Forum() {
  const isScrolled = useScrollPosition();
  const [filter, setFilter] = useState<string>("newest");

  const handleFilterChange = (filterOption: string) => {
    setFilter(filterOption);
  };

  const { data, error } = useSWR<ForumData>(`${BASE_URL_API}/forum?withUser=true`, fetcher);

  mutate(`${BASE_URL_API}/forum?withUser=true`);

  if (!data) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  if (error) {
    return <ErrorMessage message="Gagal mengambil data forum pengguna. Silakan coba lagi nanti" />;
  }

  return (
    <AnimationPage>
      <div className="relative flex flex-col justify-center gap-2 bg-shark-900 p-0 xl:container lg:bg-white lg:bg-[url('/images/bgArtikel.png')] lg:pb-[30px] lg:pt-8">
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
            <ForumFilterSidebar onFilterChange={handleFilterChange} />
          </div>
          <div className="flex flex-col items-center justify-center">
            <CreateForum />
            <ForumDataCard filter={filter} />
          </div>
        </div>
        <div className="fixed bottom-10 right-10 h-fit w-fit rounded-full bg-shark-700 p-2">
          <HashLink to="/forum#create-forum">
            <img width="30" height="30" src="/icon/forum-new.png" alt="create-new--v2" />
          </HashLink>
        </div>
      </div>
    </AnimationPage>
  );
}
