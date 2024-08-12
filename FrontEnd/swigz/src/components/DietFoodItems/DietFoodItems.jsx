import React, { useContext, useState } from "react";
import { assets } from "../../Assests/assets";
import "./DietFoodItems.css";
import { StoreContext } from "../Exploremenu/context";
import { LoginContext } from "../Login/LoginContext";
import { useNavigate } from "react-router-dom";

export default function DietFoodItems({ id, name, price, description, image }) {
  const { result } = useContext(LoginContext);
  const { dietcardItems, SetDietcardItems } = useContext(StoreContext);
  const nav = useNavigate();

  // State to track if the item is added to the cart
  const [isAdded, setIsAdded] = useState(false);

  // Function to add the item to the cart
  function addToCard() {
    let quantity = 0;
    const newItem = { id, name, price, description, image, quantity };

    // Check if the item already exists in the cart
    const existingItem = dietcardItems.find((item) => item.name === name);

    if (existingItem) {
      // If item exists, increment its quantity
      SetDietcardItems(
        dietcardItems.map((item) =>
          item.name === name ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      // If item doesn't exist, add it to the cart with a quantity of 1
      SetDietcardItems([...dietcardItems, { ...newItem, quantity: 1 }]);
    }

    // Show the "-" button after item is added
    setIsAdded(true);
  }

  // Function to remove the item from the cart
  function removeFromCard() {
    // Find the item in the cart
    const existingItem = dietcardItems.find((item) => item.name === name);

    if (existingItem && existingItem.quantity > 1) {
      // If item exists and quantity is greater than 1, decrement its quantity
      SetDietcardItems(
        dietcardItems.map((item) =>
          item.name === name ? { ...item, quantity: item.quantity - 1 } : item
        )
      );
    } else {
      // If item quantity is 1 or less, remove it from the cart
      SetDietcardItems(dietcardItems.filter((item) => item.name !== name));
      // Hide the "-" button if the item is removed completely
      setIsAdded(false);
    }
  }

  // Get the current quantity of the item in the cart
  const itemQuantity =
    dietcardItems.find((item) => item.name === name)?.quantity || 0;

  return (
    <div className="food-items">
      <div className="food-item-img-containers">
        <img className="food-item-images" src={image} alt={name} />
        <div className="food-item-counters">
          {isAdded && (
            <img
              src={assets.remove_icon_red}
              alt="remove"
              onClick={removeFromCard}
            />
          )}
          {isAdded && <p>{itemQuantity}</p>}
          <img src={assets.add_icon_green} alt="add" onClick={addToCard} />
        </div>
      </div>

      <div className="food-item-infos">
        <div className="food-item-name-ratings">
          <p>{name}</p>
        </div>
        <img src={assets.rating_starts} alt="rating stars" />
        <p className="food-item-descs">{description}</p>
        <p className="foot-item-prices">₹{price}0</p>
      </div>
    </div>
  );
}
