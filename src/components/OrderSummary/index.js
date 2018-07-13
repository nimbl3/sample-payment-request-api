import React from 'react';

import './index.css';

const avatarURL = 'https://cdn.pixabay.com/photo/2016/03/31/19/58/avatar-1295429_960_720.png';

const OrderSummary = ({ onCheckout, price }) => (
  <aside className="order-summary">
    <figure className="order-summary__profile">
      <img className="order-summary__profile-picture" src={avatarURL} alt="User profile picture"/>
      <figcaption className="order-summary__profile-name">Viola Hudson</figcaption>
    </figure>
    <table className="order-summary__order">
      <caption className="order-summary__order-title">Summary</caption>
      <tfoot className="order-summary__order-total">
        <tr>
          <td className="order-summary__order-column order-summary__order-column--total">Total</td>
          <td className="order-summary__order-column order-summary__order-column--total order-summary__order-column--price">
            {price} THB
          </td>
        </tr>
      </tfoot>
      <tbody>
        <tr>
          <td className="order-summary__order-column order-summary__order-column--subtitle" colSpan="2">Included</td>
        </tr>
        <tr>
          <td className="order-summary__order-column">30 mins photo shooting</td>
          <td className="order-summary__order-column order-summary__order-column--price">{price} THB</td>
        </tr>
        <tr>
          <td className="order-summary__order-column">5 high resolution photos*</td>
          <td className="order-summary__order-column order-summary__order-column--price">Free</td>
        </tr>
        <tr>
          <td className="order-summary__order-column order-summary__order-column--highlight" colSpan="2">
            * 100THB for each additional photos
          </td>
        </tr>
        <tr>
          <td className="order-summary__order-column">Image enhancement</td>
          <td className="order-summary__order-column order-summary__order-column--price">Free</td>
        </tr>
        <tr>
          <td className="order-summary__order-column order-summary__order-column--last">Cloud folder</td>
          <td className="order-summary__order-column order-summary__order-column--price order-summary__order-column--last">Free</td>
        </tr>
      </tbody>
    </table>
    <button type="button" className="btn" onClick={onCheckout}>Checkout & Pay</button>
  </aside>
);

export default OrderSummary;
