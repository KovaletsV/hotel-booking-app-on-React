import React from "react";
import NavBar from "./navbar";

const Header = () => {
    return (
        <>
            <NavBar />
            <div className="header">
                <div className="home_title">
                    <p>Welcome to Sunshine Hotel</p>
                </div>
                <div className="booking_button">
                    <a className="button link" href="/bookingRoom">
                        Book Now
                    </a>
                </div>
            </div>
        </>
    );
};

export default Header;
