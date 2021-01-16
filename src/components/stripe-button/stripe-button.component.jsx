import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51IA7ygDn7hMibot5T2FIY9nKCZ1lcmIxD1M4LveY8tlp3FQ3ZQyi0F1j2hBuT1xcLIznzzWQwJuRXfAFZoBdmQY700pN0M5kzr';
  const onToken = (token) => {
    console.log(token);
    alert('Payment Successful');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='Ecommerce'
      billingAddress
      shippingAddress
      image='https://banner2.cleanpng.com/20180408/uqe/kisspng-logo-e-commerce-electronic-business-ecommerce-5aca8121ed83b3.3986831415232207699729.jpg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
