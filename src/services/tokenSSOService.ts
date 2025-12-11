import axiosInstance from "@/lib/axios";

export interface ITokenBody {
  body: {
    grant_type: string;
    code: string;
    redirect_uri: string;
    client_id: string;
    code_verifier: string;
  };
}

const tokenSSOService = {
  tokenSSO: ({ body }: ITokenBody) =>
    axiosInstance.post<any>(`/oauth/token`, body).then((res) => res.data),
  refreshToken: () =>
    axiosInstance.post<any>(`/auth/refresh`).then((res) => res.data),
};

export default tokenSSOService;
