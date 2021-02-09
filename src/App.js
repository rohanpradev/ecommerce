import React, { useEffect } from 'react';
import './App.scss';
import { Route, Switch, Link, Redirect } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selector';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import Homepage from './pages/homepage/homepage.component';
import Shop from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';

const NotFoundpage = () => (
  <div className='not-found'>
    <h5>Page under development.......</h5>
    <Link to='/'>Click here to go homepage</Link>
  </div>
);

const App = (props) => {
  const { currentUser, setCurrentUser } = props;

  useEffect(() => {
    let unsubscribeFromAuth = null;
    unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({ id: snapShot.id, ...snapShot.data() });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });

    return () => unsubscribeFromAuth();
  }, [setCurrentUser]);

  return (
    <>
      <ErrorBoundary>
        <Header />
        <Switch>
          <Route path='/' exact component={Homepage} />
          <Route path='/shop' component={Shop} />
          <Route exact path='/signup' render={() => (currentUser ? <Redirect to='/' /> : <SignInSignUpPage />)} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route component={NotFoundpage} />
        </Switch>
      </ErrorBoundary>
    </>
  );
};

const mapStateToProps = createStructuredSelector({ currentUser: selectCurrentUser });

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
