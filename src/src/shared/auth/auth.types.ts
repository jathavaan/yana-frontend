export interface RefreshAccessTokenBody {
  userId: string;
}

export interface LoginAndRegisterUserBody {
  refreshToken: string;
}

export interface RefreshAccessTokenResponse {
  accessToken: string;
}
