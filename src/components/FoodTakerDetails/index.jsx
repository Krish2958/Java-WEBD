import React from 'react';
import './FoodTakerDetails.css';
const FoodTakerDetails = ({ numberOfPeople, place, dietaryPreferences }) => {
  return (
    <tr>
      <td>{numberOfPeople}</td>
      <td>{place}</td>
      <td>{dietaryPreferences || 'None'}</td>
    </tr>
  );
};

export default FoodTakerDetails;
