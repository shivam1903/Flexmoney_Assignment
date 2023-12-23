// Booking.js
import React from 'react';
import Navbar from '../components/Navbar.js';
import '../Booking.css';
import axios from 'axios';

const Booking = () => {

  const SubmitForm = async () => {
    const fullName = document.getElementById("fullName").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const email = document.getElementById("email").value;
    const birthdate = document.getElementById("birthdate").value;
    const batch = document.getElementById("choice").value;
    const body = {
      fullName: fullName,
      phoneNumber: phoneNumber,
      email: email,
      birthdate: birthdate,
      batch: batch,
      }

      console.log(typeof(birthdate));
      const checkDate = new Date(birthdate);
      const currDate = new Date();
      const age = currDate.getFullYear() - checkDate.getFullYear();

      if (
        currDate.getMonth() < checkDate.getMonth() ||
        (currDate.getMonth() === checkDate.getMonth() &&
          currDate.getDate() < checkDate.getDate())
      ) {
        age = age - 1;
      }

      if(age>65 || age <18){
        alert("You are too old or young");
        return;
      }
      await axios.post("http://127.0.0.1:5000/sendData", body).then(
        response => {
          console.log(response.data);
        }
      )
    
    }

    const handleSubmit = (e) => {
      e.preventDefault();

    }
  

  return (
    <div>
        <Navbar />
      <h1 className="booking-heading">Booking Form</h1>
      <div className="form-container">
        <form className="booking-form" onSubmit={handleSubmit}>
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
            <button type="submit" onClick={SubmitForm}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Booking;
