export interface AuthState {
  userId?: string;
  idToken?: string;
}

export interface LoginProps {
  refreshToken: string;
}

export interface AuthenticateUserBody {
  authorizationCode: string;
}

export interface AuthenticateUserResponse {
  userId: string;
  idToken: string;
}

export interface GoogleAuthResponse {
  credential?: string;
}
