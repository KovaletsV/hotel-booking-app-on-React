import React from "react";
import "./styles/App.css";
import Home from "./components/home";
import { Route, Switch } from "react-router-dom";
import Login from "./layouts/login";
import BookingRoom from "./layouts/bookingRoom";
import MyBooking from "./layouts/myBooking";

function App() {
  return (
    <div className="App">
      <Switch>
      <Route path="/login" component={Login}/>
      <Route path="/bookingRoom" component={BookingRoom}/>
      <Route path="/myBooking" component={MyBooking}/>
      <Route path="/" exact component={Home}/>
      </Switch>
    </div>
  );
}

export default App;
