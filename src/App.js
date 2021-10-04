import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withAuth0 } from "@auth0/auth0-react";
import Home from './components/Home';
import Footer from './components/Footer'
import Favourites from './components/Favouriets'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Header from './components/Header';

export class App extends Component {
  render() {
    return (
      <div>
        <Router>
      <Header/>
          <Switch>

            <Route exact path="/">
              <Home />
            </Route>
            
            <Route exact path="/Favourites">
              <Favourites />
            </Route>
            

          </Switch>

        </Router>
      <Footer/>
      </div >
    )
  }
}

export default withAuth0(App)

