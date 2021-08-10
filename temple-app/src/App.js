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
// import locations from "./pages/locations";
// import Nav from "./components/nav/";


function App() {
  return (
    <Router>


      <div>
      {/* <Nav /> */}
        <Switch>
          <Route exact path="/" component={home} />
          <Route exact path="/bio" component={bio} />
          <Route exact path="/contact" component={contact} />
          <Route exact path="/events" component={events} />
          <Route exact path="/media" component={media} />
          <Route exact path="/photos" component={photos} />
          <Route exact path="/poems" component={poems} />
          {/* <Route exact path="/locations" component={locations} /> */}
        </Switch>

      </div>
    </Router>
  );
}

export default App;
