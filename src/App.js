import React from 'react';
import './App.scss';
import { Route, Switch, Link } from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component';
import Shop from './pages/shop/shop.component';

const NotFoundpage = () => (
  <div className='not-found'>
    <h5>Page Not Found</h5>
    <Link to='/'>Click here to go homepage</Link>
  </div>
);

function App() {
  return (
    <Switch>
      <Route path='/' exact component={Homepage} />
      <Route path='/shop' component={Shop} />
      <Route component={NotFoundpage} />
    </Switch>
  );
}

export default App;
