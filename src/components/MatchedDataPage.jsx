import React from 'react';
import './MatchedDataPage.css'; // Import CSS file

const MatchedDataPage = ({ matchedData }) => {
  return (
    <div className="matched-data-container">
      <h2>Matched Data</h2>
      <table className="matched-data-table">
        <thead>
          <tr>
            <th>Index</th>
            <th>Food Giver</th>
            <th>Food Taker</th>
          </tr>
        </thead>
        <tbody>
          {matchedData.map((match, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                <div className="giver-details">
                  <p><strong>ID:</strong> {match.giver.id}</p>
                  <p><strong>Location:</strong> {match.giver.location}</p>
                  <p><strong>Food Type:</strong> {match.giver.foodType}</p>
                  <p><strong>Number of Food Items:</strong> {match.giver.numberOfFoodItems}</p>
                  <p><strong>Estimated Attendees:</strong> {match.giver.estimattedAttendees}</p>
                  <p><strong>Number of Persons Served:</strong> {match.giver.numberOfPersonsServed}</p>
                </div>
              </td>
              <td>
                <div className="taker-details">
                  <p><strong>ID:</strong> {match.taker.id}</p>
                  <p><strong>Place:</strong> {match.taker.place}</p>
                  <p><strong>Dietary Preference:</strong> {match.taker.dietaryPreference || 'None'}</p>
                  <p><strong>Number of People:</strong> {match.taker.numberOfPeople}</p>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MatchedDataPage;
