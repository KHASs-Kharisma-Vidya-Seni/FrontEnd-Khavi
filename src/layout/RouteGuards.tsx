import { useEffect, useState, PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/use-auth"; // Sesuaikan dengan path dari useAuth dan definisi User

type ProtectedRouteProps = PropsWithChildren;

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

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
