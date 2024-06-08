/**
 * Food takers list response mapper.
 * @param {FoodTakersResponseObject[]} foodTakersListResponse
 * @returns {FoodTakersObject[]}
 */
export const foodTakersListMapper = (foodTakersListResponse) =>
  foodTakersListResponse.map((taker) => ({
    id: taker.id,
    numberOfPeople: taker.numberOfPeople,
    place: taker.place,
    dietaryPreference: taker.dietaryPreference,
  }));

/**
 * Create food takers request payload mapper.
 * @param {FoodTakersObject} payload
 * @returns {FoodTakersResponseObject}
 */
export const createFoodTakersPayloadMapper = (payload) => {
  const foodTakersPayload = {
    id: payload.id,
    numberOfPeople: payload.numberOfPeople,
    place: payload.place,
    dietaryPreference: payload.dietaryPreference,
  };

  return foodTakersPayload;
};