export interface RefreshAccessTokenBody {
  userId: string;
}

export interface AuthenticateUserBody {
  authorizationCode: string;
}

export interface RefreshAccessTokenResponse {
  accessToken: string;
}
