export interface AuthState {
  userId?: string;
  token?: string;
}

export interface LoginProps {
  refreshToken: string;
}

export interface GoogleAuthResponse {
  credential?: string;
}
