// Booking.js
import React from 'react';
import Navbar from '../components/Navbar.js';
import '../Booking.css';


const Booking = () => {
  return (
    <div>
        <Navbar />
      <h1 className="booking-heading">Booking Form</h1>
      <div className="form-container">
        <form className="booking-form">
          <div className="form-group">
            <label htmlFor="fullName">Full Name:</label>
            <input type="text" id="fullName" name="fullName" pattern="[a-Z]" required/>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              pattern="[0-9]{10}"
              required
            />
            <small>Enter a 10-digit number</small>
          </div>
          <div className="form-group">
            <label htmlFor="birthdate">Birthdate:</label>
            <input type="date" id="birthdate" name="birthdate" />
          </div>
          <div className="form-group">
            <label htmlFor="choice">Choose your Batch for the session:</label>
            <select id="choice" name="choice">
              <option value="">--Please select an option--</option>
              <option value="option1">6:00 AM - 7:00 AM</option>
              <option value="option2">7:00 AM - 8:00 AM</option>
              <option value="option3">8:00 AM - 9:00 AM</option>
              <option value="option4">5:00 PM - 6:00 PM</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4"></textarea>
          </div>
          <div className="form-group">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Booking;
