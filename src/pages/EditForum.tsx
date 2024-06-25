import Navbar from "@/components/Navbar";
import DeleteForum from "@/components/modules/Forum/delete-forum";
import UpdateForum from "@/components/modules/Forum/update-forum";
import { useAuth } from "@/hooks/use-auth";
import { useParams } from "react-router-dom";

export default function EditForum() {
  const { id } = useParams<{ id: string }>(); // Ensure id is of type string
  const { currentUser } = useAuth();

  if (!currentUser) {
    return (
      <div className="flex h-screen items-center justify-center text-gray-500">Please log in to update your forum.</div>
    );
  }

  if (!id) {
    return <div className="flex h-screen items-center justify-center text-gray-500">Forum ID is missing.</div>;
  }

  return (
    <>
      <Navbar />
      <div className="grid w-full gap-2 p-10 px-60">
        <h1 className="text-3xl font-bold">Edit Forum / {currentUser.username}</h1>
        <DeleteForum forumId={id} />
        <UpdateForum forumId={id} />
      </div>
    </>
  );
}
