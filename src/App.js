import React, { Component } from 'react';

import { Route, Redirect, Switch } from 'react-router-dom';
import Movies from './components/movies';
import MovieForm from './components/movieForm';
import Customers from './components/customers';
import Rentals from './components/rentals';
import NotFound from './components/notFound';
import NavBar from './components/navBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/movies/:id" component={MovieForm}></Route>
            <Route path="/movies" component={Movies}></Route>
            <Route path="/customers" component={Customers}></Route>
            <Route path="/rentals" component={Rentals}></Route>
            <Route path="/notFound" component={NotFound}></Route>
            <Redirect from="/" exact to="/movies" />
            <Redirect to="notFound" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
