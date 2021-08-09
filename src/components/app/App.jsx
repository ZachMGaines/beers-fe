import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import BeerForm from '../BeerForm';
import BeerList from '../BeerList';
import BeerDetails from '../details/BeerDetail';


export default function App() {
  return (

    <>
      <Router>
        <Switch>
          <Route exact path="/" component={BeerList} />
          <Route exact path="/create" component={BeerForm} />
          <Route exact path="/beers/:id" component={BeerDetails} />

          <Redirect to="/" />
        </Switch>
      </Router>
    </>
  );

}
