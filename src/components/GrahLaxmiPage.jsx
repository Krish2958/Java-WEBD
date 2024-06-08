import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useCreateGrahLaxmi, useGrahLaxmiList } from '../api';
import './GrahLaxmiPage.css';

const GrahLaxmiPage = ({ changePage }) => {
  const [grahLaxmiDetails, setGrahLaxmiDetails] = useState({
    accountNumber: '',
    name: '',
    city: '',
    gender: 'Female', // Default gender is Female
    aadharNumber: '',
    hasBPLCard: false, // Default value for BPL Card checkbox
  });

  const {
    data: grahLaxmiList,
    isLoading: isLoadingGrahLaxmiList,
    isError: isErrorGrahLaxmiList,
    error: errorGrahLaxmiList,
    isSuccess: isSuccessGrahLaxmiList
  } = useGrahLaxmiList();

  const {
    mutate: createGrahLaxmi,
    isSuccess: isSuccessCreateGrahLaxmi,
    isError: isErrorCreateGrahLaxmi,
    error: errorCreateGrahLaxmi
  } = useCreateGrahLaxmi();

  useEffect(() => {
    if (isErrorGrahLaxmiList && errorGrahLaxmiList) {
      toast.error(`Failed to fetch Grah Laxmi list: ${errorGrahLaxmiList.message}`);
    }
  }, [isErrorGrahLaxmiList, errorGrahLaxmiList]);

  useEffect(() => {
    if (isSuccessCreateGrahLaxmi) {
      toast.success('Registration Successful!');
      setGrahLaxmiDetails({
        accountNumber: '',
        name: '',
        city: '',
        gender: 'Female',
        aadharNumber: '',
        hasBPLCard: false,
      });
      changePage('');
    } else if (isErrorCreateGrahLaxmi && errorCreateGrahLaxmi) {
      toast.error(`Failed to register: ${errorCreateGrahLaxmi.message}`);
    }
  }, [isSuccessCreateGrahLaxmi, isErrorCreateGrahLaxmi, errorCreateGrahLaxmi, changePage]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setGrahLaxmiDetails({
      ...grahLaxmiDetails,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (grahLaxmiDetails.gender === 'Female' && grahLaxmiDetails.aadharNumber.length === 12 && grahLaxmiDetails.hasBPLCard) {
      createGrahLaxmi(grahLaxmiDetails);
    } else {
      toast.error('Please enter valid details to register for GrahLaxmi.');
    }
  };

  return (
    <div className="grahlaxmi-page-container">
      <h2>GrahLaxmi Registration</h2>
      <form onSubmit={handleSubmit} className="grahlaxmi-form">
        <input
          type="text"
          name="accountNumber"
          placeholder="Account Number"
          value={grahLaxmiDetails.accountNumber}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={grahLaxmiDetails.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={grahLaxmiDetails.city}
          onChange={handleChange}
          required
        />
        <label>
          Gender:
          <select name="gender" value={grahLaxmiDetails.gender} onChange={handleChange}>
            <option value="Female">Female</option>
          </select>
        </label>
        <input
          type="text"
          name="aadharNumber"
          placeholder="Aadhar Number"
          value={grahLaxmiDetails.aadharNumber}
          onChange={handleChange}
          required
        />
        <label>
          BPL Card:
          <input
            type="checkbox"
            name="hasBPLCard"
            checked={grahLaxmiDetails.hasBPLCard}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Register</button>
      </form>
      {isLoadingGrahLaxmiList && <p>Loading Grah Laxmi list...</p>}
      {isSuccessGrahLaxmiList && grahLaxmiList && (
        <div className="grah-laxmi-list">
          <h3>Registered Users</h3>
          <ul>
            {grahLaxmiList.map((user, index) => (
              <li key={index}>{user.name} - {user.city} - {user.aadharNumber}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default GrahLaxmiPage;
