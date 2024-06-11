import { useAuth } from "@/hooks/use-auth";
import { PropsWithChildren, useEffect } from "react";
import { useNavigate } from "react-router-dom";

type ProtectedRouteProps = PropsWithChildren;

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser || currentUser === null) {
      navigate("/login", { replace: true });
    }
  }, [currentUser, navigate]);

  if (!currentUser) return null;

  return children;
}
