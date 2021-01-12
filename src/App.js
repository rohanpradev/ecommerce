import React from 'react';
import './App.scss';
import { Route, Switch, Link, Redirect } from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component';
import Shop from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';

const NotFoundpage = () => (
  <div className='not-found'>
    <h5>Page under development.......</h5>
    <Link to='/'>Click here to go homepage</Link>
  </div>
);

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({ id: snapShot.id, ...snapShot.data() });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  render() {
    const { currentUser } = this.props;
    return (
      <>
        <Header />
        <Switch>
          <Route path='/' exact component={Homepage} />
          <Route path='/shop' component={Shop} />
          <Route exact path='/signup' render={() => (currentUser ? <Redirect to='/' /> : <SignInSignUpPage />)} />
          <Route component={NotFoundpage} />
        </Switch>
      </>
    );
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
}

const mapStateToProps = ({ user }) => ({ currentUser: user.currentUser });

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
