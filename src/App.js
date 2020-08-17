import React from 'react';
import logo from './logo.svg';
import './css/main.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";

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
      </Route>

      <Route path="/mars_rover">
        <MarsPage />
      </Route> */}

    </Switch>
    </Router>
  );
}
