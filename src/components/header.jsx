import React from "react";

const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="logo">
          <h3>
            <a className="logo_link" href="/">
              Sunshine Hotel
            </a>
          </h3>
          <img src="" alt="" />
        </div>
        <div className="navigation">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/booking room">Booking room</a>
          </li>
          <li>
            <a href="/my Booking">My Booking</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
        </div>
        <div className="home_title">
          <p>Welcome to Sunshine Hotel</p>
        </div>
        <div className="booking_button">
          <a className="button" href="\">
            Book Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
