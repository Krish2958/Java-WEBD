// AdminPage.js
import React, { useState } from 'react';
import './AdminPage.css';
const AdminPage = () => {
  const [searchPlace, setSearchPlace] = useState('');
  const [takerDetails, setTakerDetails] = useState([]);
  const [giverDetails, setGiverDetails] = useState([]);

  const handleSearch = () => {
    // Retrieve taker and giver details from local storage
    const takerData = JSON.parse(localStorage.getItem('takerDetails')) || [];
    const giverData = JSON.parse(localStorage.getItem('giverDetails')) || [];

    // Filter taker and giver details based on search place
    const filteredTakers = takerData.filter(data => data.place === searchPlace);
    const filteredGivers = giverData.filter(data => data.location === searchPlace);

    // Update state with filtered data
    setTakerDetails(filteredTakers);
    setGiverDetails(filteredGivers);
  };

  return (
    <div className="admin-page">  {/* Apply the CSS class */}
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

      <h3>Taker Details</h3>
      <ul>
        {takerDetails.map((taker, index) => (
          <li key={index}>{JSON.stringify(taker)}</li>
        ))}
      </ul>

      <h3>Giver Details</h3>
      <ul>
        {giverDetails.map((giver, index) => (
          <li key={index}>{JSON.stringify(giver)}</li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPage;
