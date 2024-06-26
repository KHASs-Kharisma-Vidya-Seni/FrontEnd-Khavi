import { useAuth } from "@/hooks/use-auth";
import { PropsWithChildren, useEffect } from "react";
import { useNavigate } from "react-router-dom";

type RouteExistProps = PropsWithChildren;

export default function ProtectedExistUser({ children }: RouteExistProps) {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Jika currentUser ada (pengguna sudah login), arahkan mereka ke halaman lain
    if (currentUser) {
      return 
    }
  }, [currentUser, navigate]);

  return children;
}
