import { AxiosRequestConfig } from "axios";

type RequestMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export interface AxiosRequestParams<TQueryParameters, TBody> {
  endpoint: string;
  requestMethod: RequestMethod;
  parameters: TQueryParameters | undefined;
  body: TBody | undefined;
  token: string | undefined;
}

export interface YanaAxiosRequestConfig extends AxiosRequestConfig {
  _retry?: boolean;
}
