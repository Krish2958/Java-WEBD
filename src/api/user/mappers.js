import * as _ from './types';

/**
 * Map the response data to a user object.
 * @param {UserResponseObject} responseData
 * @returns {UserObject}
 */
export const userResponseMapper = (responseData) => {
  return {
    id: responseData.id,
    email: responseData.email,
    role: responseData.role,
  };
};

/**
 * Map the user creation payload to the API request format.
 * @param {CreateUserPayload} payload
 * @returns {Object}
 */
export const createUserPayloadMapper = (payload) => {
  return {
    email: payload.email,
    password: payload.password,
    role: payload.role,
  };
};
