import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/MyNavbar";
import Gallerie from "./components/Gallerie";
import MyFooter from "./components/MyFooter";
import { useState } from "react";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [State, setState] = useState(null);

  return (

    <Router>
      <div className="body">
        <MyNavbar searchValue={(e) => setState(e)} />
        <Gallerie searchVal={State} />
        <MyFooter />
      </div>
    </Router>

  )
}

export default App

// Create a Route for a ShowDetail component. It should be able to receive a ID parameter from the querystring.

// Create the ShowDetail component that receives from the url the ID parameter and fetches all the informations
// about the movie (from omdb & comments too).

// Make every Show (Movie or Series) clickable and create an onClick redirect to the ShowDetail route.

// From the main component pass also a prop called 'title' to every other component wrapped inside a Route,
// and use it for displaying inside of it the title of that section (in an "h1").