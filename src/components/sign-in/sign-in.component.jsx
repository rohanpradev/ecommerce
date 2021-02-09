import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import FormButton from '../form-button/form-button.component';
import { signInWithGoogle, auth } from '../../firebase/firebase.utils';
import useForm from '../../hooks/useForm.hook';

const SignIn = () => {
  const [fields, handleFieldChange] = useForm({
    email: '',
    password: '',
  });

  const { email, password } = fields;

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
      handleFieldChange({
        email: '',
        password: '',
      });
    } catch (error) {
      console.log('Failed to sign in', error.message);
    }
  };

  return (
    <div className='sign-in'>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={(e) => handleSubmit(e)}>
        <FormInput type='email' name='email' label='Email' value={email} onChange={handleFieldChange} required />
        <FormInput
          type='password'
          name='password'
          label='Password'
          value={password}
          onChange={handleFieldChange}
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
};

export default SignIn;
