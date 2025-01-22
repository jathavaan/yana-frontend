export const addUserToStorage = (userId: string, token: string) => {
  addUserIdToStorage(userId);
  addTokenToStorage(token);
};

export const addUserIdToStorage = (userId: string) =>
  localStorage.setItem("USER_ID", userId);

export const addTokenToStorage = (token: string) =>
  localStorage.setItem("ACCESS_TOKEN", token);

export const removeUserFromStorage = () => {
  localStorage.removeItem("USER_ID");
  localStorage.removeItem("ACCESS_TOKEN");
};

export const refreshToken = (accessToken: string) => {
  localStorage.setItem("ACCESS_TOKEN", accessToken);
};

export const getUserToken = (): string | null => {
  return localStorage.getItem("ACCESS_TOKEN");
};

export const getUserId = (): string | null => {
  return localStorage.getItem("USER_ID");
};
