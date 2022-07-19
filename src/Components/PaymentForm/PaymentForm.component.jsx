import { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { useSelector } from 'react-redux';

import { selectCurrentUser } from '../../Store/User/User.selector';

import { PaymentFormContainer, FormContainer } from './PaymentForm.styles';
import Button, { BUTTON_TYPE_CLASSES } from '../Button/Button.component';

const PaymentForm = ({ onSubmit }) => {
  const stripe = useStripe();
  const elements = useElements();

const paymentHandler = async (event) => {
  event.preventDefault();

if(!stripe || !elements) {
  return;
}

const response = await fetch('/.netlify/functions/createPaymentIntent', { 
  method: 'post',
  headers: {
    'Content-Type': 'application/json'  
  },
  body: JSON.stringify({ amount: 1000 }),
}).then((res)=> res.json());

const { 
  paymentIntent: { client_secret }
} = response;

console.log(client_secret);
const clientSecret = response.paymentIntent.client_secret;

const paymentResult = await stripe.confirmCardPayment(clientSecret, {
  payment_method: {
    card: elements.getElement(CardElement),
    billing_details: {
      name: 'Dorje Kirsten'
    }
  }
});

if(paymentResult.error) {
  alert('Payment failed');
} else {
  if(paymentResult.paymentIntent.status === 'succeeded') {
  alert('Payment Successful');
}
}
};



  return (
    <PaymentFormContainer >
    <FormContainer onSubmit={paymentHandler}>
      <h2>Credit Card Payment</h2>
      <CardElement />
      <Button buttonType={ BUTTON_TYPE_CLASSES.blue } text="Pay">Buy</Button>
    </FormContainer>
    </PaymentFormContainer>
  );
}

export default PaymentForm;
