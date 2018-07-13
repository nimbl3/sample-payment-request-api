// Define payment method here.
const creditCardPaymentMethod = {
  supportedMethods: 'basic-card',
  data: {
    // All available supported network: amex, diners, discover, jcb, mastercard, mir, unionpay and visa.
    supportedNetworks: ['visa', 'mastercard']
  }
};

const supportedPaymentMethods = [
  creditCardPaymentMethod
];

// Define payment detail here.
const paymentDetails = {
  total: {
    label: 'Total',
    amount: {
      currency: 'THB',
      value: 0
    }
  },
  displayItems: []
};

// Define payment option here.
const options = {
  requestPayerName: false,
  requestPayerPhone: false,
  requestPayerEmail: false,
  requestShipping: false
};

export {
  supportedPaymentMethods,
  paymentDetails,
  options
};
