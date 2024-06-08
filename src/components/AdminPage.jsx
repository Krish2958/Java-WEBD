import React, { useState, useEffect } from 'react';
import { useFoodTakersList, useFoodGiversList } from '../api'; // Ensure you have the appropriate hooks for fetching food givers
import FoodTakerDetails from './FoodTakerDetails'; // Ensure correct import path
import FoodGiverDetails from './FoodGiverDetails'; // Ensure correct import path
import './AdminPage.css';

const AdminPage = () => {
  const [searchPlace, setSearchPlace] = useState('');
  const [filteredTakerDetails, setFilteredTakerDetails] = useState([]);
  const [filteredGiverDetails, setFilteredGiverDetails] = useState([]);

  const { data: foodTakersList = [], isLoading: isLoadingTakers } = useFoodTakersList();
  const { data: foodGiversList = [], isLoading: isLoadingGivers } = useFoodGiversList();

  useEffect(() => {
    setFilteredTakerDetails(foodTakersList);
    setFilteredGiverDetails(foodGiversList);
  }, [foodTakersList, foodGiversList]);

  const handleSearch = () => {
    const filteredTakers = foodTakersList.filter((data) =>
      data.place.toLowerCase().includes(searchPlace.toLowerCase())
    );
    const filteredGivers = foodGiversList.filter((data) =>
      data.location.toLowerCase().includes(searchPlace.toLowerCase())
    );
    setFilteredTakerDetails(filteredTakers);
    setFilteredGiverDetails(filteredGivers);
  };

  return (
    <div className="admin-page">
      <h2>Admin Page</h2>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Enter Place"
          value={searchPlace}
          onChange={(e) => setSearchPlace(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="taker-details-container">
        <h3>Food Takers</h3>
        {isLoadingTakers ? (
          <p>Loading...</p>
        ) : (
          <table className='taker-details'>
            <thead>
              <tr>
                <th>Number of People</th>
                <th>Place</th>
                <th>Dietary Preferences</th>
              </tr>
            </thead>
            <tbody>
              {filteredTakerDetails.map((foodTaker) => (
                <FoodTakerDetails
                  key={foodTaker.id}
                  numberOfPeople={foodTaker.numberOfPeople}
                  place={foodTaker.place}
                  dietaryPreferences={foodTaker.dietaryPreference}
                />
              ))}
            </tbody>
          </table>
        )}
      </div>
      <div className="giver-details-container">
        <h3>Food Givers</h3>
        {isLoadingGivers ? (
          <p>Loading...</p>
        ) : (
          <table className='taker-details'>
            <thead>
              <tr>
                <th>ID</th>
                <th>Event Type</th>
                <th>Location</th>
                <th>Date</th>
                <th>Estimated Attendees</th>
                <th>Food Type</th>
                <th>Number of Food Items</th>
                <th>Number of Persons Served</th>
              </tr>
            </thead>
            <tbody>
              {filteredGiverDetails.map((foodGiver) => (
                <FoodGiverDetails
                  key={foodGiver.id}
                  id={foodGiver.id}
                  eventType={foodGiver.eventType}
                  location={foodGiver.location}
                  date={foodGiver.date}
                  estimatedAttendees={foodGiver.estimatedAttendees}
                  foodType={foodGiver.foodType}
                  numberOfFoodItems={foodGiver.numberOfFoodItems}
                  numberOfPersonsServed={foodGiver.numberOfPersonsServed}
                />
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AdminPage;
