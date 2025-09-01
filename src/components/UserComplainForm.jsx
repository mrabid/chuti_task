import React, { useState } from 'react';
import './UserComplainForm.css';

const UserComplainForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    address: '',
    resortBranch: '',
    complaintDetails: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Complaint submitted successfully!');
    // Here you would typically send the data to a backend server
    setFormData({
      fullName: '',
      email: '',
      address: '',
      resortBranch: '',
      complaintDetails: '',
    });
  };

  return (
    <div className="complain-form-container" id="user-complain">
      <form className="complain-form-card" onSubmit={handleSubmit}>
        <h2>User Complain</h2>
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="resortBranch">Resort Branch</label>
          <select
            id="resortBranch"
            name="resortBranch"
            value={formData.resortBranch}
            onChange={handleChange}
            required
          >
            <option value="">Select a branch</option>
            <option value="Purbachol Resort">Purbachol Resort</option>
            <option value="Gazipur Resort">Gazipur Resort</option>
            <option value="Cox Bazar Resort">Cox Bazar Resort</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="complaintDetails">Complaint Details</label>
          <textarea
            id="complaintDetails"
            name="complaintDetails"
            value={formData.complaintDetails}
            onChange={handleChange}
            rows="5"
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default UserComplainForm;
