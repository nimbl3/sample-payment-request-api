import {
  supportedPaymentMethods,
  paymentDetails,
  options
} from './config';

class Payment {
  constructor() {
    this.payment = null;
    this.supportedPaymentMethods = supportedPaymentMethods;
    this.paymentDetails = paymentDetails;
    this.options = options;
  }

  create() {
    this.payment = new window.PaymentRequest(
      this.supportedPaymentMethods,
      this.paymentDetails,
      this.options
    );
  }

  pay() {
    this.payment.show()
      .then(paymentResponse => {
        return paymentResponse.complete('success');
      })
      .catch(error => {
        console.error('Payment Request API error: ', error);
      });
  }
}

export default Payment;
