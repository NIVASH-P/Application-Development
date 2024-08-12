import React, { useContext, useState } from "react";
import { StoreContext } from "../Exploremenu/context";
// import { nutrientsfoodbreakfast } from "../../Assests/assets";
// import { Recipe } from "../Recipe/Recipe";
import { FootItem } from "../FoodItems/FootItem";

export const NutriItems = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    if (selectedItem === item) {
      setSelectedItem(null);
    } else {
      setSelectedItem(item);
    }
  };

  return (
    <div>
      <div className="food-display" id="food-display">
        <h1>BreakFast</h1>

        <div
          className="food-display-list"
          style={{ display: "flex", flexWrap: "wrap" }}
        >
          {/* {nutrientsfoodbreakfast.map((item, index) => {
          if (category === 'All' || category === item.category) {
            return (
                <div key={index} onClick={() => handleItemClick(item)} style={{ width: 'calc(30%)'}}>
                  <FootItem
                    id={item._id}
                    name={item.name}
                    description={item.description}
                    price={item.price}
                    image={item.image}
                  />
                </div>
            );
          }
        })} */}
        </div>
      </div>
      <div className="food-display" id="food-display">
        <h1>Lunch</h1>

        <div
          className="food-display-list"
          style={{ display: "flex", flexWrap: "wrap" }}
        >
          {/* {nutrientsfoodbreakfast.map((item, index) => {
            if (category === "All" || category === item.category) {
              return (
                <div
                  key={index}
                  onClick={() => handleItemClick(item)}
                  style={{ width: "calc(30%)" }}
                >
                  <FootItem
                    id={item._id}
                    name={item.name}
                    description={item.description}
                    price={item.price}
                    image={item.image}
                  />
                </div>
              );
            }
          })} */}
        </div>
      </div>
      <div className="food-display" id="food-display">
        <h1>Dinner</h1>

        <div
          className="food-display-list"
          style={{ display: "flex", flexWrap: "wrap" }}
        >
          {/* {nutrientsfoodbreakfast.map((item, index) => {
            if (category === "All" || category === item.category) {
              return (
                <div
                  key={index}
                  onClick={() => handleItemClick(item)}
                  style={{ width: "calc(30%)" }}
                >
                  <FootItem
                    id={item._id}
                    name={item.name}
                    description={item.description}
                    price={item.price}
                    image={item.image}
                  />
                </div>
              );
            }
          })} */}
        </div>
      </div>
    </div>
  );
};
