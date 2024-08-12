import React, { useContext } from "react";
import './PlaceOrder.css';
import { useNavigate } from "react-router-dom";
import {StoreContext} from '../../Exploremenu/context'

export const PlaceOrder = () => {
  const navigate = useNavigate(); // Removed the extra parentheses here
  const {getTotalCard,dietcardItems} = useContext(StoreContext);

  const dietItemsTotal = dietcardItems.reduce((total, item) => {
      return total + item.price * item.quantity;
  }, 0);
  console.log(dietItemsTotal);
  

  const handleSubmit = (amount) => {
    // e.preventDefault();
    if (amount === "") {
      alert("Please enter amount");
    } else {
      const options = {
        key: "rzp_test_jU8iEefJbuWxWG",
        key_secret: "7gySLOzqLY9jQBkn1OwGJ2tx",
        amount: amount * 100,
        currency: "INR",
        name: "Swigz App",
        description: "Food delivery",
        handler: function (response) {
          alert(`Payment ID: ${response.razorpay_payment_id}`);
        },
        prefill: {
          name: "John Doe",
          email: "john.doe@example.com",
          contact: "9876543210",
        },
        notes: {
          address: "Swigz App Office",
        },
        theme: {
          color: "#3399cc",
        },
      };
      const pay = new window.Razorpay(options);
      pay.open();
      pay.on("payment.failed", function (response) {
        alert(`Payment failed: ${response.error.description}`);
      });
    }
  };

  return (
    <form className="place-order">
      <div className="place-order-left">
        <h2 className="title">Delivery Information</h2>
        <div className="multi-fields">
          <input type="text" placeholder='First Name' />
          <input type="text" placeholder='Last Name' />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='Email' />
          <input type="text" placeholder='Street' />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='City' />
          <input type="text" placeholder='State' />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='Zio code' />
          <input type="text" placeholder='Country ' />
        </div>
        <input type="text" placeholder='PhoneNumber ' />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart totals</h2>
          <div className="cart-total-details">
            <p>subtotal</p>
            <p>Rs{getTotalCard() === 0 && dietItemsTotal == 0 ? 0:getTotalCard()+dietItemsTotal}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <p>Delivery fee</p>
            <p>Rs{getTotalCard() === 0 && dietItemsTotal == 0 ? 0:40}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <p>Total</p>
            <p>Rs{getTotalCard() === 0 && dietItemsTotal == 0 ? 0:getTotalCard()+dietItemsTotal+40}</p>
          </div>
        </div>
        <button className="payment" onClick={() => navigate('/payment')}>payment</button>
      </div>
    </form>
  );
};