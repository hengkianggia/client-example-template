import { useMutation } from "@tanstack/react-query";
import tokenSSOService from "@/services/tokenSSOService";

const useGetRefreshToken = () => {
  const mutation = useMutation({
    mutationKey: ["refresh-token"],
    mutationFn: () => tokenSSOService.refreshToken(),

    onSuccess: () => {
      console.log("done");
    },

    onError: (error: any) => {
      console.error("Login failed:", error);
    },
  });

  return mutation;
};

export default useGetRefreshToken;
