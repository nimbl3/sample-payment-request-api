import {
  supportedPaymentMethods,
  paymentDetails,
  options,
  shippingOptions
} from './config';

class Payment {
  constructor(subtotal) {
    this.payment = null;
    this.paymentDetails = paymentDetails;
    this.paymentDetails.total.amount.value = subtotal;
    this.shippingOptions = shippingOptions;
    this.subtotal = subtotal;
  }

  create() {
    this.payment = new window.PaymentRequest(
      supportedPaymentMethods,
      this.paymentDetails,
      options
    );

    this._bindShippingAddressChange()
    this._bindShippingOptionChange()
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

  _bindShippingAddressChange() {
    this.payment.addEventListener('shippingaddresschange', (event) => {
      event.updateWith(this.paymentDetails)
    })
  }

  _bindShippingOptionChange() {
    this.payment.addEventListener('shippingoptionchange', (event) => {
      const paymentRequestInstance = event.target;
      const shippingSelectedId = paymentRequestInstance.shippingOption;

      event.updateWith(this._buildPaymentDetails(shippingSelectedId))
    })
  }

  _buildPaymentDetails(shippingSelectedId) {
    let selectedOption = null
    const shippingOptions = this.shippingOptions.map((option) => {
      if (option.id === shippingSelectedId) {
        selectedOption = option
      }
      return { selected:  option.id === shippingSelectedId, ...option }
    })

    const displayItems = [
      selectedOption
    ]

    return {
      total: {
        label: 'Total',
        amount: {
          currency: 'THB',
          value: this.subtotal + (+selectedOption.amount.value)
        }
      },
      displayItems,
      shippingOptions
    }
  }
}

export default Payment;
