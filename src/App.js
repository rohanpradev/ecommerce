import React from 'react';
import './App.scss';
import { Route, Switch, Link } from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component';
import Shop from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.utils';

const NotFoundpage = () => (
  <div className='not-found'>
    <h5>Page under development.......</h5>
    <Link to='/'>Click here to go homepage</Link>
  </div>
);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentuser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentuser: user });
    });
  }

  render() {
    return (
      <>
        <Header currentUser={this.state.currentuser} />
        <Switch>
          <Route path='/' exact component={Homepage} />
          <Route path='/shop' component={Shop} />
          <Route path='/signup' component={SignInSignUpPage} />
          <Route component={NotFoundpage} />
        </Switch>
      </>
    );
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
}

export default App;
