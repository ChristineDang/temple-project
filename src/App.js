import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import home from "./pages/home";
import bio from "./pages/bio";
import contact from "./pages/contact";
import events from "./pages/events";
import media from "./pages/media";
import photos from "./pages/photos";
import poems from "./pages/poems";
import { HashLink } from 'react-router-hash-link';
// import locations from "./pages/locations";
// import Nav from "./components/nav/";


function App() {
  return (
    <Router>


      <div>
      {/* <Nav /> */}
        <Switch>
          <Route exact path="/" component={home} />
          <Route path="/bio" component={bio} />
          <Route path="/contact" component={contact} />
          <Route path="/events" component={events} />
          <Route path="/media" component={media} />
          <Route path="/photos" component={photos} />
          <Route path="/poems" component={poems} />
          {/* <Route exact path="/locations" component={locations} /> */}
        </Switch>

      </div>
    </Router>
  );
}

export default App;
