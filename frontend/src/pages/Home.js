// Home.js
import React from 'react';
import '../Home.css'; // Import your CSS file
import Navbar from '../components/Navbar.js';
import img1 from '../images/img1.png';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom


const Home = () => {
  return (
    <div>
      {/* Section 1 with image background */}
      <section className="section section1">
        <Navbar />
        <div className="content">
          {/* <h1>Welcome to the Homepage</h1> */}
          <div className="text-image-container">
            <div className="text">
              <p><h2 className='gradient-text'>Beautiful Videos. Become Your Beast self. With YogaKita</h2>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco consequat. 
              </p>
              <div className="centered-button">
                <Link to="/booking" className="booking-button">Book Now</Link>
              </div>
              
            </div>
            <div className="image">
              <img src={img1} alt="Yoga Women" />
            </div>
          </div>
          {/* <img src={img1} alt='Yoga women'></img> */}
          {/* Add content for the first section */}
        </div>
      </section>

      {/* Section 2 */}
      <section className="section section2">
        <div className="content">
          {/* Add content for the second section */}
          <h2>Section 2</h2>
          <p>Content for Section 2</p>
        </div>
      </section>

      {/* Section 3 */}
      <section className="section section3">
        <div className="content">
          {/* Add content for the third section */}
          <h2>Section 3</h2>
          <p>Content for Section 3</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
