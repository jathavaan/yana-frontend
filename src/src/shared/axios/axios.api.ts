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

/**
 * Sends an API request using Axios with support for multiple HTTP methods.
 * Handles query parameters, request bodies, and authorization tokens dynamically.
 *
 * @template TQueryParameters - Type of the query parameters.
 * @template TBody - Type of the request body.
 * @template TResponse - Type of the expected response.
 *
 * @param {Object} params - Parameters for the API request.
 * @param {string} params.endpoint - The API endpoint to which the request will be sent.
 * @param {"GET" | "POST" | "PUT" | "PATCH" | "DELETE"} params.requestMethod - The HTTP method for the request.
 * @param {TQueryParameters} [params.parameters] - Query parameters to include in the request (optional).
 * @param {TBody} [params.body] - Request body to include in the request (optional, only for POST, PUT, PATCH).
 * @param {string} [params.token] - Authorization token for bearer authentication (optional).
 *
 * @returns {Promise<TResponse>} The response data from the API.
 *
 * @throws {Error} If the request method does not support a body or if an unsupported request method is provided.
 *
 * @example
 * // Example usage:
 * const response = await sendApiRequest<{ userId: string }, { name: string }, User>({
 *   endpoint: '/users',
 *   requestMethod: 'POST',
 *   parameters: { userId: '123' },
 *   body: { name: 'John Doe' },
 *   token: 'your-auth-token',
 * });
 * console.log(response);
 */
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
