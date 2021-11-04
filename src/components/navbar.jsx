import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <>
            <div className="navigation">
                {/* <div className="logo">
                    <h3>
                        <a className="logo_link link" href="/">
                            Sunshine Hotel
                        </a>
                    </h3>
                </div> */}
                <li className="list">
                    <Link className="link" to="/">
                        Home
                    </Link>
                </li>
                <li className="list">
                    <Link className="link" to="/bookingRoom">
                        Booking room
                    </Link>
                </li>
                <li className="list">
                    <Link className="link" to="/myBooking">
                        My Booking
                    </Link>
                </li>
                <li className="list">
                    <Link className="link" to="/login">
                        Login
                    </Link>
                </li>
            </div>
        </>
    );
};

export default NavBar;
