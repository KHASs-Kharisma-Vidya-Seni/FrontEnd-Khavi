import AnimationPage from "@/components/AnimationPage";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/use-auth";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, Toaster } from "sonner";

export default function ProfileSetting() {
  return (
    <AnimationPage>
      <Toaster />
      <DeleteAccount />
    </AnimationPage>
  );
}

function DeleteAccount() {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const handleDeleteAccount = () => {
    toast.promise(
      axios.delete(`http://localhost:3000/api/users/${currentUser?.uid}/delete`, {
        withCredentials: true,
      }),
      {
        loading: "Deleting account...",
        success: () => {
          return "Account deleted successfully!";
        },
        error: "Failed to delete account.",
      }
    );
    
    navigate("/login");
  };

  return (
    <div className="flex h-[75vh] max-h-fit flex-col items-center justify-center gap-y-1">
      <h1 className="text-3xl font-bold">Hapus Akun</h1>
      <div className="w-3/6 text-center">
        <p className="text-gray-500">
          Apakah Anda yakin ingin menghapus akun Anda? Menghapus akun Anda akan menghapus semua konten di dalamnya.
        </p>
      </div>
      <Button variant="logout" onClick={handleDeleteAccount}>
        Hapus Akun
      </Button>
    </div>
  );
}
