import { Button } from "@/components/ui/button";
import { makeRequest } from "@/lib/axios";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export default function DeleteForum({ forumId }: { forumId: string }) {
  const navigate = useNavigate();
  const handleDelete = async () => {
    try {
      toast.promise(makeRequest.delete(`/forum/${forumId}`), {
        loading: "Deleting forum...",
        success: "Forum deleted successfully!",
        error: "Failed to delete forum.",
      });

      setTimeout(() => {
        navigate("/forum");
      }, 2000);
    } catch (error) {
      console.error("Error deleting forum:", error);
    }
  };

  return (
    <Button variant="logout" className="w-fit" onClick={handleDelete}>
      Delete Forum
    </Button>
  );
}
