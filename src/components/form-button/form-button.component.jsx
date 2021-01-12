import React from 'react';
import './form-button.styles.scss';

const FormButton = ({ children, inverted, isGoogleSignIn, ...otherProps }) => (
  <button
    className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} form-button`}
    {...otherProps}
  >
    {children}
  </button>
);

FormButton.defaultProps = {
  isGoogleSignIn: false,
  inverted: false,
};

export default FormButton;
