import AnimationPage from "@/components/AnimationPage";
import { Button } from "@/components/ui/button";

export default function ProfileSetting() {
  return (
    <AnimationPage>
      <DeleteAccount />
    </AnimationPage>
  );
}

function DeleteAccount() {
  return (
    <div className="flex h-[75vh] max-h-fit flex-col items-center justify-center gap-y-1">
      <h1 className="text-3xl font-bold">Hapus Akun</h1>
      <div className="w-3/6 text-center">
        <p className="text-gray-500">
          Apakah Anda yakin ingin menghapus akun Anda? Menghapus akun Anda akan menghapus semua konten di dalamnya.
        </p>
      </div>
      <Button variant="logout">Hapus Akun</Button>
    </div>
  );
}
