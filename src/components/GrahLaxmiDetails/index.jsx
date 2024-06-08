import React from 'react';
import './GrahLaxmiDetail.css'; // Import CSS file for styling

const GrahLaxmiDetail = ({ details }) => {
  return (
    <div className="grahlaxmi-detail-card">
      <h3>{details.name}</h3>
      <p><strong>Account Number:</strong> {details.accountNumber}</p>
      <p><strong>City:</strong> {details.city}</p>
      <p><strong>Gender:</strong> {details.gender}</p>
      <p><strong>Aadhar Number:</strong> {details.aadharNumber}</p>
      <p><strong>BPL Card:</strong> {details.hasBPLCard ? 'Yes' : 'No'}</p>
    </div>
  );
};

export default GrahLaxmiDetail;
