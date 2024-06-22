import { useEffect, useState, PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/use-auth"; // Sesuaikan dengan path dari useAuth dan definisi User

type ProtectedRouteProps = PropsWithChildren;

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       // Jika currentUser masih kosong atau null, biarkan useSWR melakukan revalidasi
  //       if (!currentUser || currentUser === null) {
  //         await new Promise(resolve => {
  //           setTimeout(resolve, 1000); // Contoh: Menunggu 1 detik sebelum menentukan status loading
  //         });
  //       }
  //       setLoading(false); // Setelah menunggu, berhenti menampilkan loading state
  //     } catch (error) {
  //       console.error("Error fetching current user:", error);
  //       navigate("/login", { replace: true }); // Jika terjadi error, arahkan ke halaman login
  //     }
  //   };

  //   fetchData();
  // }, [currentUser, navigate]);

  useEffect(() => {
    if (!currentUser || currentUser === null) {
      navigate("/login", { replace: true });
    } else {
      setLoading(false);
    }
  }, [currentUser, navigate]);

  if (loading) return null; // Tampilkan loading state jika masih loading

  console.log("Sudah login - lolos");

  return children; // Render children jika proses sudah selesai
}
