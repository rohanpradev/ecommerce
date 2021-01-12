import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import FormButton from '../form-button/form-button.component';
import { signInWithGoogle, auth } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange = (evt) => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        email: '',
        password: '',
      });
    } catch (error) {
      console.log('Failed to sign in', error.message);
    }
  };

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <FormInput
            type='email'
            name='email'
            label='Email'
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
          <FormInput
            type='password'
            name='password'
            label='Password'
            value={this.state.password}
            onChange={this.handleChange}
            required
          />
          <div className='buttons'>
            <FormButton type='submit'>Sign in</FormButton>
            <FormButton type='button' isGoogleSignIn onClick={signInWithGoogle}>
              Sign in with Google
            </FormButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
