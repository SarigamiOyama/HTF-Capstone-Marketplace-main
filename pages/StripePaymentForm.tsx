// StripePaymentForm.tsx
import React from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

const StripePaymentForm: React.FC<{ clientSecret: string }> = ({ clientSecret }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    if (!cardElement) {
      return;
    }

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardElement,
        billing_details: {
          // Add billing details if needed
        },
      },
    });

    if (result.error) {
      // Handle payment error
      console.error(result.error);
    } else {
      // Payment succeeded
      if (result.paymentIntent?.status === 'succeeded') {
        console.log('Payment succeeded:', result.paymentIntent);
        // Add your custom success logic here
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit">Pay with Card</button>
    </form>
  );
};

export default StripePaymentForm;
