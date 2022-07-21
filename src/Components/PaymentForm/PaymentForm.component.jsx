import { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { useSelector } from 'react-redux';

import { selectCurrentUser } from '../../Store/User/User.selector';
import { selectCartTotal } from '../../Store/Cart/Cart.selector';

import { PaymentFormContainer, FormContainer, PaymentButton } from './PaymentForm.styles';
import { BUTTON_TYPE_CLASSES } from '../Button/Button.component';

const PaymentForm = ({ onSubmit }) => {
  const stripe = useStripe();
  const elements = useElements();
  const amount = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

const paymentHandler = async (event) => {
  event.preventDefault();

if(!stripe || !elements) {
  return;
}
// eslint-disable-next-line no-const-assign
setIsProcessingPayment=(true);

const response = await fetch('/.netlify/functions/createPaymentIntent', { 
  method: 'post',
  headers: {
    'Content-Type': 'application/json'  
  },
  body: JSON.stringify({ amount: amount * 100 }),
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
      name: currentUser ? currentUser.displayName : 'guest',
      
    }
  }
});

// eslint-disable-next-line no-const-assign
setIsProcessingPayment=(false);

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
      <PaymentButton isLoading={isProcessingPayment} 
      buttonType={ BUTTON_TYPE_CLASSES.blue } 
      text="Pay">Purchase</PaymentButton>
    </FormContainer>
    </PaymentFormContainer>
  );
}

export default PaymentForm;
