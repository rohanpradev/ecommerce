import React from 'react';
import './form-button.styles.scss';

const FormButton = ({ children, isGoogleSignIn, ...otherProps }) => (
  <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} form-button`} {...otherProps}>
    {children}
  </button>
);

FormButton.defaultProps = {
  isGoogleSignIn: false,
};

export default FormButton;
