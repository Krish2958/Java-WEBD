import { useMutation, useQuery } from 'react-query';
import api from '../api';
import { createGrahLaxmiPayloadMapper, grahLaxmiListMapper } from './mappers';

// Api.
/**
 * Get Events list request.
 * @returns {GrahLaxmiObject[]}
 */
export const getGrahLaxmiList = async () => {
  const response = await api.get('/grah-laxmi/');

  return grahLaxmiListMapper(response);
};

export const createGrahLaxmi = async (payload) => {
  const response = await api.post(
    '/grah-laxmi/',
    createGrahLaxmiPayloadMapper(payload),
  );
  return response;
};

// Hooks.
export const useGrahLaxmiList = () =>
  useQuery('/food-givers/', () => getGrahLaxmiList(), { staleTime: 0, cacheTime: 0 });

export const useCreateGrahLaxmi = () =>
  useMutation(async (payload) => createGrahLaxmi(payload));
