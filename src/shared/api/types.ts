export interface IAxiosBaseQueryError {
  status: number;
  data: {
    statusCode: number;
    message: string;
    error: string;
  };
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
