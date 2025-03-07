/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_GOOGLE_AUTH_CLIENT_ID: string;
  readonly VITE_GOOGLE_AUTH_CLIENT_SECRET: string;
  readonly VITE_GOOGLE_AUTH_SCOPES: string;
  readonly VITE_TILE_HEIGHT: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
