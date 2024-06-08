import { TokenManager } from './token-manager';

export const isAuthenticated = () => {
  return !!TokenManager.getToken();
};

export const logout = () => {
  TokenManager.removeToken();
  TokenManager.removeRefreshToken();
};
