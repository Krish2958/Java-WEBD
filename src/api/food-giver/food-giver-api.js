import { useMutation, useQuery } from 'react-query';
import api from '../api';
import { createFoodGiversPayloadMapper, foodGiversListMapper } from './mappers';

// Api.
/**
 * Get Events list request.
 * @returns {FoodGiversObject[]}
 */
export const getFoodGiversList = async () => {
  const response = await api.get('/food-givers/');

  return foodGiversListMapper(response);
};

export const createFoodGivers = async (payload) => {
  const response = await api.post(
    '/food-givers/',
    createFoodGiversPayloadMapper(payload),
  );
  return response;
};

// Hooks.
export const useFoodGiversList = () =>
  useQuery('/food-givers/', () => getFoodGiversList(), { staleTime: 0, cacheTime: 0 });

export const useCreateFoodGivers = () =>
  useMutation(async (payload) => createFoodGivers(payload));
