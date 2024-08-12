import React, { useContext, useState } from 'react'
import './FoodItem.css';
import { assets } from '../../Assests/assets';
import { StoreContext } from '../Exploremenu/context';
import { Link } from 'react-router-dom';

export const FootItem = ({id,name,price,description,image}) => {

     const{cardItems,addToCard,removeFromCart,handleItemClick}=useContext(StoreContext)

  return (
    <div className='food-item'>
       <div className="food-item-img-container">
          <img className='food-item-image' src={image} alt="" onClick={()=>handleItemClick({name,image})}/>
          {
            !cardItems[id] ? <img className='add' onClick={()=>addToCard(id)}src={assets.add_icon_white} alt="" />: 
            <div className="food-item-counter">
                <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                <p>{cardItems[id]}</p>
                <img onClick={()=>addToCard(id)} src={assets.add_icon_green} alt="" />
            </div>
          }
       </div>

       <div className="food-item-info">
        <div className='food-item-name-rating'>
            <p>{name}</p>
            <img src={assets.rating_starts} alt="" />
        </div>
        <p className='food-item-desc'>{description}</p>
        <p className='foot-item-price'>₹{price}0</p>
       </div>

    </div>
  )
}