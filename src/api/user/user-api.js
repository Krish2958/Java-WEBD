import api from '../api';

/**
 * Login request.
 * @param {Object} loginData
 * @returns {Promise<UserObject>}
 */
export const login = async (loginData) => {
  const response = await api.post('/api/userss/login', loginData);
  return response; // Assuming the response contains user data
};

/**
 * Create a new user.
 * @param {CreateUserPayload} userData
 * @returns {Promise<UserObject>}
 */
export const createUser = async (userData) => {
  const response = await api.post('/api/users', userData);
  return response; // Assuming the response contains user data
};

/**
 * Get logged-in user info by ID.
 * @param {string} id - User ID.
 * @returns {Promise<UserObject>}
 */
export const getUserInfo = async (id) => {
  const response = await api.get(`/api/users/${id}`);
  return response; // Assuming the response contains user data
};
