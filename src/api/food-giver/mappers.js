/**
 * Event list response mapper.
 * @param {FoodGiversResponseObject[]} foodGiversListResponse
 * @returns {FoodGiversObject[]}
 */
export const foodGiversListMapper = (foodGiversListResponse) =>
  foodGiversListResponse.map((event) => ({
    id: event.id,
    eventType: event.eventType,
    location: event.location,
    numberOfFoodItems: event.numberOfFoodItems,
    numberOfPersonsServed: event.numberOfPersonsServed,
    foodType: event.foodType,
    estimatedAttendees: event.estimatedAttendees,
    date:event.date,
  }));

/**
 * Create event request payload mapper.
 * @param {FoodGiversObject} payload
 * @returns {FoodGiversResponseObject}
 */
export const createFoodGiversPayloadMapper = (payload) => {
  const foodGiversPayload = {
    id: payload.id,
    eventType: payload.eventType,
    location: payload.location,
    numberOfFoodItems: payload.numberOfFoodItems,
    numberOfPersonsServed: payload.numberOfPersonsServed,
    foodType: payload.foodType,
    estimatedAttendees: payload.estimatedAttendees,
    date:payload.date,
  };


  return foodGiversPayload;
};
