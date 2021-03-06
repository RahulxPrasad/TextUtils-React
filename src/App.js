// import logo from './logo.svg';
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar.js";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";

// import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light"); // tells whether darks mode enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled!", "success");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#011938";
      showAlert("Dark mode has been enabled!", "success");
      document.title = "TextUtils- Dark Mode";
    }
  };

  return (
    <>
    <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />

      <div className="container">
      <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">

        <TextForm
          showAlert={showAlert}
          heading="Enter the text to analyze:"
          mode={mode}
        />
          </Route>
        </Switch>
        
        {/* <About/> */}
      </div>
      </Router>
    </>
  );
}
export default App;