import React from 'react';

const FoodGiverDetails = ({ id, eventType, location, date, estimatedAttendees, foodType, numberOfFoodItems, numberOfPersonsServed }) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{eventType}</td>
      <td>{location}</td>
      <td>{date}</td>
      <td>{estimatedAttendees || 'None'}</td>
      <td>{foodType}</td>
      <td>{numberOfFoodItems}</td>
      <td>{numberOfPersonsServed}</td>
    </tr>
  );
};

export default FoodGiverDetails;
