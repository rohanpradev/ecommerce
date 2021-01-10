import React, { Suspense } from 'react';
import './sign-in-and-sign-up.styles.scss';
const SignIn = React.lazy(() => import('../../components/sign-in/sign-in.component'));

const SignInSignUpPage = () => (
  <Suspense fallback='Loading...'>
    <SignIn />
  </Suspense>
);

export default SignInSignUpPage;
