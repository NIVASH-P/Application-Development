import { createContext, useEffect, useState } from "react";
import { food_list } from "../../Assests/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [cardItems, setCardItems] = useState({});
    const [selectedItem, setSelectedItem] = useState(null);
    const [dietcardItems,SetDietcardItems] = useState([]);

  const handleItemClick = ({name,image}) => {
    if (selectedItem===null) {

        setSelectedItem({name,image});

        window.scrollTo({ top:450,
        behavior: 'smooth',});
        console.log(name);

      } else {
        setSelectedItem(null);
      }
  };

    const addToCard = (itemId) => {
        if (!cardItems[itemId]) {
            setCardItems((prev) => ({ ...prev, [itemId]: 1 }));
        } else {
            setCardItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        }
    };

    const removeFromCart = (itemId) => {
        setCardItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    };

    const getTotalCard = () => {
        let total = 0;
        for (const item in cardItems) {
            if (cardItems[item] > 0) {
                let itemInfo = food_list.find((product) => product._id === item);
                total += itemInfo.price * cardItems[item];
            }
        }
        // for (const item in dietcardItems) {
        //     total += 70 * item.quantity;
        // }
        return total;
    };

    const contextValue = {
        food_list,
        cardItems,
        setCardItems,
        addToCard,
        removeFromCart,
        getTotalCard,
        handleItemClick,
        dietcardItems,
        SetDietcardItems
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;