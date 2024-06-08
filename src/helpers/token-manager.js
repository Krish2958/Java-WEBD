export const TokenManager = {
  getToken: () => localStorage.getItem('token'),

  saveToken: (token) => {
    localStorage.setItem('token', token);
  },

  removeToken: () => localStorage.removeItem('token'),

  getRefreshToken: () => localStorage.getItem('refresh'),

  saveRefreshToken: (token) => {
    localStorage.setItem('refresh', token);
  },

  removeRefreshToken: () => localStorage.removeItem('refresh'),
};
