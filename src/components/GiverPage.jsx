import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useCreateFoodGivers, useFoodGiversList } from '../api';
import './GiverPage.css';

const GiverPage = ({ changePage }) => {
  const [eventDetails, setEventDetails] = useState({
    eventType: '',
    location: '',
    date: '',
    estimatedAttendees: '',
    foodType: '',
    numberOfFoodItems: '',
    numberOfPersonsServed: ''
  });

  const {
    data: foodGiversList,
    isLoading: isLoadingFoodGiversList,
    isError: isErrorFoodGiversList,
    error: errorFoodGiversList,
    isSuccess: isSuccessFoodGiversList
  } = useFoodGiversList();

  const {
    mutate: createFoodGiver,
    isSuccess: isSuccessCreateFoodGiver,
    isError: isErrorCreateFoodGiver,
    error: errorCreateFoodGiver
  } = useCreateFoodGivers();

  useEffect(() => {
    if (isErrorFoodGiversList && errorFoodGiversList) {
      toast.error(`Failed to fetch food givers list: ${errorFoodGiversList.message}`);
    }
  }, [isErrorFoodGiversList, errorFoodGiversList]);

  useEffect(() => {
    if (isSuccessCreateFoodGiver) {
      toast.success('Food Giver details saved successfully');
      setEventDetails({
        eventType: '',
        location: '',
        date: '',
        estimatedAttendees: '',
        foodType: '',
        numberOfFoodItems: '',
        numberOfPersonsServed: ''
      });
      changePage('');
    } else if (isErrorCreateFoodGiver && errorCreateFoodGiver) {
      toast.error(`Failed to save Food Giver details: ${errorCreateFoodGiver.message}`);
    }
  }, [isSuccessCreateFoodGiver, isErrorCreateFoodGiver, errorCreateFoodGiver, changePage]);

  const handleChange = (e) => {
    setEventDetails({
      ...eventDetails,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createFoodGiver(eventDetails);
  };

  return (
    <div className="giver-page-container">
      <h2>Food Giver Page</h2>
      <form onSubmit={handleSubmit} className="giver-form">
        <select name="eventType" value={eventDetails.eventType} onChange={handleChange} required>
          <option value="">Select Event Type</option>
          <option value="Wedding ceremony">Wedding ceremony</option>
          <option value="Birthday party">Birthday party</option>
          <option value="Anniversary celebration">Anniversary celebration</option>
          <option value="Others">Others</option>
        </select>
        <input type="text" name="location" placeholder="Location" value={eventDetails.location} onChange={handleChange} required />
        <input type="date" name="date" value={eventDetails.date} onChange={handleChange} required />
        <input type="number" name="estimatedAttendees" placeholder="Estimated Attendees" value={eventDetails.estimatedAttendees} onChange={handleChange} required />
        <select name="foodType" value={eventDetails.foodType} onChange={handleChange} required>
          <option value=''>Select Type of Food Available</option>
          <option value="Veg">Veg</option>
          <option value="Non Veg">Non Veg</option>
        </select>
        <input type="number" name="numberOfFoodItems" placeholder="Number of Food Items" value={eventDetails.numberOfFoodItems} onChange={handleChange} required />
        <input type="number" name="numberOfPersonsServed" placeholder="Number of Persons Served" value={eventDetails.numberOfPersonsServed} onChange={handleChange} required />
        <button type="submit">Submit</button>
      </form>
      {isLoadingFoodGiversList && <p>Loading food givers list...</p>}
      {isSuccessFoodGiversList && foodGiversList && (
        <div className="food-givers-list">
          <h3>Existing Food Givers</h3>
          <ul>
            {foodGiversList.map((giver, index) => (
              <li key={index}>{giver.eventType} - {giver.location} - {giver.date}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default GiverPage;
