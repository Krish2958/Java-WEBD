import { useMutation, useQuery } from 'react-query';
import api from '../api';
import { createFoodTakersPayloadMapper, foodTakersListMapper } from './mappers';

// Api.
/**
 * Get Events list request.
 * @returns {FoodTakersObject[]}
 */
export const getFoodTakersList = async () => {
  const response = await api.get('/food-takers');
  return foodTakersListMapper(response);
};

export const createFoodTakers = async (payload) => {
  const response = await api.post(
    '/food-takers',
    createFoodTakersPayloadMapper(payload)
  );
  return response;
};

// Hooks.
export const useFoodTakersList = () =>
  useQuery('/food-takers/', getFoodTakersList, { staleTime: 0, cacheTime: 0 });

export const useCreateFoodTakers = () =>
  useMutation((payload) => createFoodTakers(payload));
