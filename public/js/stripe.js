import axios from 'axios';
import { showAlert } from './alert';

/* eslint-disable */

const stripe = Stripe('pk_test_dHqwKZWwntLkk0hyBDLDXNPJ00wRh2kU4P');

export const bookTour = async tourId => {
  try {
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
