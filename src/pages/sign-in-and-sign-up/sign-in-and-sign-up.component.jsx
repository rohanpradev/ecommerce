import React, { Suspense } from 'react';
import './sign-in-and-sign-up.styles.scss';
// lazy load sign in page
const SignIn = React.lazy(() => import('../../components/sign-in/sign-in.component'));
const SignUp = React.lazy(() => import('../../components/sign-up/sign-up.component'));

const SignInSignUpPage = () => (
  <Suspense fallback='Loading...'>
    <div className='sign'>
      <SignIn />
      <SignUp />
    </div>
  </Suspense>
);

export default SignInSignUpPage;
