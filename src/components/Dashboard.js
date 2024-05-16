// Dashboard.js
import React, { useState } from 'react';
import './Dashboard.css';
import GiverPage from './GiverPage';
import TakerPage from './TakerPage';
import GrahLaxmiPage from './GrahLaxmiPage';
import giverImage from '../images/giver.jpg';
import takerImage from '../images/taker.jpg';
import grahlaxmiImage from '../images/grahlaxmi.jpeg'; // Import the image for GrahLaxmi frame
import MatchedDataPage from './MatchedDataPage';

const Dashboard = () => {
  const [currentPage, setCurrentPage] = useState('');
  const [takerDetails, setTakerDetails] = useState({});
  const [matchedData, setMatchedData] = useState([]);

  const handleTakerDetails = (details) => {
    setTakerDetails(details);
  };

  const handleFindMatch = () => {
    const takerData = JSON.parse(localStorage.getItem('takerDetails'));
    const giverData = JSON.parse(localStorage.getItem('giverDetails'));

    if (takerData && giverData) {
      if (giverData.location === takerData.place && giverData.foodType === takerData.dietaryPreferences) {
        setMatchedData([giverData]);
        setCurrentPage('matchedData');
      } else {
        alert('No match found.');
      }
    } else {
      alert('No taker or giver details found in local storage.');
    }
  };

  return (
    <div className="dashboard-container">
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
      {currentPage === 'taker' && <TakerPage changePage={setCurrentPage} handleDetails={handleTakerDetails} />}
      {currentPage === 'matchedData' && <MatchedDataPage matchedData={matchedData} />}
      {currentPage === 'grahlaxmi' && <GrahLaxmiPage changePage={setCurrentPage} />}
      {currentPage === '' && <button className="find-match-button" onClick={handleFindMatch}>Find Match</button>}
    </div>
  );
};

export default Dashboard;
