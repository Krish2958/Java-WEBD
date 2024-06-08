import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useCreateFoodTakers, useFoodTakersList } from '../api';
import './TakerPage.css';

const TakerPage = ({ changePage }) => {
  const [takerDetails, setTakerDetails] = useState({
    numberOfPeople: '',
    place: '',
    dietaryPreferences: '',
  });

  const {
    data: foodTakersList,
    isLoading: isLoadingFoodTakersList,
    isError: isErrorFoodTakersList,
    error: errorFoodTakersList,
    isSuccess: isSuccessFoodTakersList
  } = useFoodTakersList();

  const {
    mutate: createFoodTaker,
    isSuccess: isSuccessCreateFoodTaker,
    isError: isErrorCreateFoodTaker,
    error: errorCreateFoodTaker
  } = useCreateFoodTakers();

  useEffect(() => {
    if (isErrorFoodTakersList && errorFoodTakersList) {
      toast.error(`Failed to fetch food takers list: ${errorFoodTakersList.message}`);
    }
  }, [isErrorFoodTakersList, errorFoodTakersList]);

  useEffect(() => {
    if (isSuccessCreateFoodTaker) {
      toast.success('Food Taker details saved successfully');
      setTakerDetails({
        numberOfPeople: '',
        place: '',
        dietaryPreferences: '',
      });
      changePage('');
    } else if (isErrorCreateFoodTaker && errorCreateFoodTaker) {
      toast.error(`Failed to save Food Taker details: ${errorCreateFoodTaker.message}`);
    }
  }, [isSuccessCreateFoodTaker, isErrorCreateFoodTaker, errorCreateFoodTaker, changePage]);

  const handleChange = (e) => {
    setTakerDetails({
      ...takerDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createFoodTaker(takerDetails);
  };

  return (
    <div className="taker-page-container">
      <h2>Food Taker Page</h2>
      <form onSubmit={handleSubmit} className="taker-form">
        <input
          type="number"
          name="numberOfPeople"
          placeholder="Number of People"
          value={takerDetails.numberOfPeople}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="place"
          placeholder="Enter Place (Optional)"
          value={takerDetails.place}
          onChange={handleChange}
        />
        <select name="dietaryPreferences" value={takerDetails.dietaryPreferences} onChange={handleChange}>
          <option value="">Select Dietary Preference</option>
          <option value="Veg">Vegetarian</option>
          <option value="Non Veg">Non-Vegetarian</option>
        </select>
        <button type="submit">Submit</button>
      </form>
      {isLoadingFoodTakersList && <p>Loading food takers list...</p>}
      {isSuccessFoodTakersList && foodTakersList && (
        <div className="food-takers-list">
          <h3>Existing Food Takers</h3>
          <ul>
            {foodTakersList.map((taker, index) => (
              <li key={index}>{taker.numberOfPeople} - {taker.place} - {taker.dietaryPreference}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TakerPage;
