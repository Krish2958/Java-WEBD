import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import GiverPage from './GiverPage';
import TakerPage from './TakerPage';
import GrahLaxmiPage from './GrahLaxmiPage';
import giverImage from '../images/giver.jpg';
import takerImage from '../images/taker.jpg';
import grahlaxmiImage from '../images/grahlaxmi.jpeg'; // Import the image for GrahLaxmi frame
import MatchedDataPage from './MatchedDataPage';
import { useFoodTakersList, useFoodGiversList } from '../api'; // Ensure you have the appropriate hooks for fetching food givers and takers

const Dashboard = () => {
  const [currentPage, setCurrentPage] = useState('');
  const [matchedData, setMatchedData] = useState([]);
  const { data: foodTakersList } = useFoodTakersList();
  const { data: foodGiversList } = useFoodGiversList();

  const handleFindMatch = () => {
    const matched = [];

    foodTakersList.forEach(taker => {
      foodGiversList.forEach(giver => {
        if (giver.location.toLowerCase() === taker.place.toLowerCase()) {
          matched.push({ giver, taker });
        }
      });
    });

    if (matched.length > 0) {
      setMatchedData(matched);
      setCurrentPage('matchedData');
    } else {
      alert('No match found.');
    }
  };

  return (
    <div className="dashboard-container">
     {console.log(foodTakersList)} 
     {console.log(foodGiversList)}
      <div className="dashboard-frame giver-frame" onClick={() => setCurrentPage('giver')}>
        <h2>Food Givers</h2>
        <p>To Donate Click Here</p>
        <img src={giverImage} alt="Food Giver" />
      </div>
      <div className="dashboard-frame taker-frame" onClick={() => setCurrentPage('taker')}>
        <h2>Food Takers</h2>
        <p>Click here if you are in need of food</p>
        <img src={takerImage} alt="Food Taker" />
      </div>
      <div className="dashboard-frame grahlaxmi-frame" onClick={() => setCurrentPage('grahlaxmi')}>
        <h2>GrahLaxmi Registration</h2>
        <p>Register here for GrahLaxmi</p>
        <img src={grahlaxmiImage} alt="GrahLaxmi Registration" /> {/* Include the image for GrahLaxmi frame */}
      </div>
      {currentPage === 'giver' && <GiverPage changePage={setCurrentPage} />}
      {currentPage === 'taker' && <TakerPage changePage={setCurrentPage} />}
      {currentPage === 'matchedData' && <MatchedDataPage matchedData={matchedData} />}
      {currentPage === 'grahlaxmi' && <GrahLaxmiPage changePage={setCurrentPage} />}
      {currentPage === '' && <button className="find-match-button" onClick={handleFindMatch}>Find Match</button>}
    </div>
  );
};

export default Dashboard;
