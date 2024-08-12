import React, { useContext } from 'react';
import './cart.css'
import { StoreContext } from '../../Exploremenu/context'
import { useNavigate } from 'react-router-dom';

export const Cart = () => {
    const { cardItems: cartItems, food_list, removeFromCart, getTotalCard, dietcardItems } = useContext(StoreContext);
    const navigate = useNavigate();

    // Calculate the sum of dietcardItems
    const dietItemsTotal = dietcardItems.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0);

    // Calculate the overall sum including getTotalCard
    const overallTotal = getTotalCard() + dietItemsTotal;

    return (
        <div className='cart'>
            <div className="cart-items">
                <div className="cart-items-title">
                    <p>Items</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <br />
                <hr />
                {food_list.map((item, index) => {
                    if (cartItems && cartItems[item._id] > 0) {
                        return (
                            <div key={index}>
                                <div className='cart-items-title cart-items-item'>
                                    <img src={item.image} alt="" />
                                    <p>{item.name}</p>
                                    <p>{item.price}</p>
                                    <p>{cartItems[item._id]}</p>
                                    <p>{item.price * cartItems[item._id]}</p>
                                    <p onClick={() => removeFromCart(item._id)} className='cross'>x</p>
                                </div>
                                <hr />
                            </div>
                        )
                    }
                })}
                {dietcardItems.map((item, index) => {
                    return (
                        <div key={index}>
                            <div className='cart-items-title cart-items-item'>
                                <img src={item.image} alt="" />
                                <p>{item.name}</p>
                                <p>{item.price}</p>
                                <p>{item.quantity}</p>
                                <p>{item.price * item.quantity}</p>
                                <p onClick={() => removeFromCart(item._id)} className='cross'>x</p>
                            </div>
                            <hr />
                        </div>
                    )
                })}
            </div>
            <div className="cart-bottom">
                <div className="cart-total">
                    <h2>Cart Totals</h2>
                    <div>
                        <div className="cart-total-details">
                            <p>Subtotal</p> <p>Rs.{overallTotal}</p>
                        </div>
                        <div className="cart-total-details">
                            <p>Delivery Fee</p>
                            <p>Rs.{2}</p>
                        </div>
                        <div className="cart-total-details">
                            <b>Total</b>
                            <b>Rs.{overallTotal + 2}</b>
                        </div>
                    </div>
                    <button onClick={() => navigate("/placeorder")}>Proceed</button>
                </div>
                <div className="Cart-promocode">
                    <div>
                        <p>If you have promo code enter</p>
                        <div className='cart-promocode-input'>
                            <input type="text" placeholder='promo code' />
                            <button className='submit'>submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
