import React, { useContext, useState } from 'react'
import './Fooddisplay.css';
import { StoreContext } from '../Exploremenu/context';
import { FootItem } from '../FoodItems/FootItem';
import { Recipe } from '../Recipe/Recipe';

export const Fooddisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    if (selectedItem === item ) {
        setSelectedItem(null); 
      } else {
        setSelectedItem(item);
      }
  }; 

  return (

    <div>
    <div className='food-display' id='food-display'>

    {selectedItem && (
        <Recipe
          category={selectedItem.name}
          itemImage={selectedItem.image}
        />
      )}

      <h1>Top Dishes near by you</h1>

      <div className="food-display-list">
        {food_list.map((item, index) => {
          if (category === 'All' || category === item.category) {
            return (
                <div key={index} onClick={() => handleItemClick(item)}>
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
        })}
      </div>

    </div>
    </div>
  );
};