import { AxiosRequestConfig } from "axios";

interface IErrorData {
  statusCode: number;
  message: string;
  error: string;
}

export interface IAxiosBaseQueryError {
  status: number;
  data: IErrorData;
}

export interface IAuthDto {
  accessToken: string;
  refreshToken: string;
}

export interface IRequestAuthBody {
  username: string;
  password: string;
  fingerprint: string;
}

export interface IRequestRefreshBody {
  refreshToken: string;
  fingerprint: string;
}

export interface IGenres {
  _id: string;
  name: string;
}

export interface IRetryQueueItem {
  resolve: (value?: any) => void;
  reject: (error?: any) => void;
  config: AxiosRequestConfig;
}
