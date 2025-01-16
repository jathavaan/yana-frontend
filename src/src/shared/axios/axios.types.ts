import { AxiosRequestConfig } from "axios";

type RequestMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export interface AxiosRequestParams<TQueryParameters, TBody> {
  endpoint: string;
  requestMethod: RequestMethod;
  parameters?: TQueryParameters;
  body?: TBody;
  token?: string;
}

export interface YanaAxiosRequestConfig extends AxiosRequestConfig {
  _retry?: boolean;
}
