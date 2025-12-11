import { useMutation } from "@tanstack/react-query";
import tokenSSOService, { ITokenBody } from "@/services/tokenSSOService";
import { useAuthStore } from "@/state/useAuthStore";
import useGetRefreshToken from "./useGetRefreshToken";

const useToken = () => {
  const { login, logout, setIsLogin } = useAuthStore(); // Use the auth store here
  const refreshTokenMutation = useGetRefreshToken();

  const mutation = useMutation({
    mutationKey: ["token"],
    mutationFn: ({ body }: ITokenBody) => tokenSSOService.tokenSSO({ body }),

    onSuccess: () => {
      login();
      setIsLogin(true);
      refreshTokenMutation.mutate();
    },

    onError: (error: any) => {
      console.error("Login failed:", error);
      logout();
    },
  });

  return mutation;
};

export default useToken;
