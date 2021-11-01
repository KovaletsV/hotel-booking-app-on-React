import React from "react";
import Home from "./components/home";
import "./styles/App.css";
import Login from "./layouts/login";

function App() {
  return (
    <div className="App">
      <Home />
      <Login/>
    </div>
  );
}

export default App;
