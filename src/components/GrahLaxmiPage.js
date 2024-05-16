// GrahLaxmiPage.js
import React, { useState } from 'react';
import './GrahLaxmiPage.css';

const GrahLaxmiPage = ({ changePage }) => {
  const [accountNumber, setAccountNumber] = useState('');
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [gender, setGender] = useState('Female'); // Default gender is Female
  const [aadharNumber, setAadharNumber] = useState('');
  const [hasBPLCard, setHasBPLCard] = useState(false); // Default value for BPL Card checkbox

  const handleRegister = (e) => {
    e.preventDefault();
    // Dummy validation logic (replace with actual validation)
    if (gender === 'Female' && aadharNumber.length === 12 && hasBPLCard) {
      // Create an object with user details
      const userDetails = {
        accountNumber,
        name,
        city,
        gender,
        aadharNumber,
        hasBPLCard
      };

      // Save user details to local storage
      localStorage.setItem('grahlaxmiUser', JSON.stringify(userDetails));

      // Alert registration successful
      alert('Registration Successful!');

      // Display preview of user details
      alert('Registration Details:\n' + JSON.stringify(userDetails));

      // Navigate back to Dashboard
      changePage('');
    } else {
      alert('Please enter valid details to register for GrahLaxmi.');
    }
  };

  return (
    <div className="grahlaxmi-page-container">
      <h2>GrahLaxmi Registration</h2>
      <form onSubmit={handleRegister} className="grahlaxmi-form">
        <input type="text" placeholder="Account Number" value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} required />
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="text" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} required />
        <label>
          Gender:
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="Female">Female</option>
          </select>
        </label>
        <input type="text" placeholder="Aadhar Number" value={aadharNumber} onChange={(e) => setAadharNumber(e.target.value)} required />
        <label>
          BPL Card:
          <input type="checkbox" checked={hasBPLCard} onChange={(e) => setHasBPLCard(e.target.checked)} />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default GrahLaxmiPage;
