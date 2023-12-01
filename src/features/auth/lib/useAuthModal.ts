import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";

export const useAuthModal = () => {
  const [params] = useSearchParams();
  const isLoginModal = useMemo(() => params.get("login"), [params]);
  const isRegisterModal = useMemo(() => params.get("register"), [params]);

  return { isLoginModal, isRegisterModal };
};
