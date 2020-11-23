import React from 'react';
import './css/main.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import MarsPage from "./pages/MarsPage";


export default function App() {
  return (
      <Router>
        <Switch>

          <Route exact path="/">
            <LandingPage />
          </Route>

          {/* <Route path="/photos">
            <PhotosPage />
          </Route>

          <Route path="/audio">
            <AudioPage />
          </Route> */}

          <Route path="/mars-rover">
            <MarsPage />
          </Route>

        </Switch>
      </Router>
  );
}
