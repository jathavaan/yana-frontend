import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import {
  AxiosRequestParams,
  YanaAxiosRequestConfig,
} from "@shared/axios/axios.types.ts";
import { getUserId, refreshGoogleAccessToken } from "@shared/auth";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: AxiosError) => {
    if (error.response?.status === 401) {
      const config = error.config as YanaAxiosRequestConfig | undefined;
      if (!config) return Promise.reject(error);
      if (config._retry) return Promise.reject(error);

      config._retry = true;

      const userId = getUserId();
      if (!userId) return Promise.reject(error);

      try {
        const response = await refreshGoogleAccessToken(axiosInstance, {
          userId: userId,
        });

        if (response.status.valueOf() === 401) return Promise.reject(error);
        const token = response.data.accessToken;

        axiosInstance.defaults.headers.Authorization = `Bearer ${token}`;
      } catch {
        return Promise.reject(error);
      }

      return axiosInstance({ ...config });
    }

    return Promise.reject(error);
  },
);

export const sendApiRequest = async <TQueryParameters, TBody, TResponse>({
  endpoint,
  requestMethod,
  parameters,
  body,
  token,
}: AxiosRequestParams<TQueryParameters, TBody>): Promise<TResponse> => {
  if ((requestMethod === "GET" || requestMethod === "DELETE") && body)
    throw new Error("This request method does not support a body");

  const config: AxiosRequestConfig = {
    headers: {},
    params: parameters,
  };

  if (token) {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token}`,
    };
  }

  let response: AxiosResponse<TResponse>;

  switch (requestMethod) {
    case "GET":
      response = await axiosInstance.get<TResponse>(endpoint, config);
      break;
    case "POST":
      response = await axiosInstance.post<TResponse>(endpoint, body, config);
      break;
    case "PUT":
      response = await axiosInstance.put<TResponse>(endpoint, body, config);
      break;
    case "PATCH":
      response = await axiosInstance.patch<TResponse>(endpoint, body, config);
      break;
    case "DELETE":
      response = await axiosInstance.delete<TResponse>(endpoint, config);
      break;
    default:
      throw new Error(`Unsupported request method: ${requestMethod}`);
  }

  response = response as AxiosResponse<TResponse>;
  return response.data;
};
