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

// Define shipping option here.
const shippingOptions = [
  {
    id: 'economy',
    label: 'Economy Shipping (5-7 Days)',
    amount: {
      currency: 'THB',
      value: '0',
    },
  }, {
    id: 'express',
    label: 'Express Shipping (2-3 Days)',
    amount: {
      currency: 'THB',
      value: '5',
    },
  }, {
    id: 'next-day',
    label: 'Next Day Delivery',
    amount: {
      currency: 'THB',
      value: '12',
    },
  },
]

// Define payment detail here.
const paymentDetails = {
  total: {
    label: 'Total',
    amount: {
      currency: 'THB',
      value: 0
    }
  },
  shippingOptions
};

// Define payment option here.
const options = {
  requestPayerName: true,
  requestPayerPhone: true,
  requestPayerEmail: true,
  requestShipping: true
};

export {
  supportedPaymentMethods,
  paymentDetails,
  options,
  shippingOptions
};
