import { createContext, useState, useEffect } from "react";

const addToCart = (addItem, productToAdd) => {
  // console.log(addItem);
  // console.log(productToAdd.id);
  const existingItem = addItem.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  // console.log(existingItem);
  if (existingItem) {
    return addItem.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...addItem, { ...productToAdd, quantity: 1 }];
};
const removeItem = (addItem, ItemToRemove) => {

  const existingItem = addItem.find(
    (cartItem) => cartItem.id === ItemToRemove.id
  );
  console.log(existingItem.quantity);
  if (existingItem.quantity==1) {
    return addItem.filter(cartItem=>cartItem.id!=ItemToRemove.id);
    
  }

  return addItem.map((cartItem) =>
      cartItem.id === ItemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
};
export const CartContext = createContext({
  isCartOpen: false,
  setisCartOpen: () => {},
  addItem: [],
  addItemToCart: () => {},
  removeItemFromCart:()=>{},
  cartCount: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setisCartOpen] = useState(false);
  const [addItem, setaddItem] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const newcartCount = addItem.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newcartCount);
  }, [addItem]);

  const addItemToCart = (productToAdd) => {
    setaddItem(addToCart(addItem, productToAdd));
  };
  const removeItemFromCart = (ItemToRemove) => {
    setaddItem(removeItem(addItem, ItemToRemove));
  };
  const value = {
    isCartOpen,
    setisCartOpen,
    addItemToCart,
    removeItemFromCart,
    addItem,
    cartCount,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
