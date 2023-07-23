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
  if (existingItem.quantity===1) {
    return addItem.filter(cartItem=>cartItem.id!==ItemToRemove.id);
    
  }

  return addItem.map((cartItem) =>
      cartItem.id === ItemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
};

const clearItem=(addItem,ItemToClear)=>{
  return addItem.filter(cartItem=>cartItem.id!==ItemToClear.id)
}
export const CartContext = createContext({
  isCartOpen: false,
  setisCartOpen: () => {},
  addItem: [],
  addItemToCart: () => {},
  removeItemFromCart:()=>{},
  clearItemFromCart:()=>{},
  cartCount: 0,
  Total:0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setisCartOpen] = useState(false);
  const [addItem, setaddItem] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartPrice, setCartPrice] = useState(0);

  useEffect(() => {
    const newcartCount = addItem.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newcartCount);
  }, [addItem]);

  useEffect(() => {
    const newCartTotal = addItem.reduce(
      (total, cartItem) => total + cartItem.quantity* cartItem.price,
      0
    );
    setCartPrice(newCartTotal);
  }, [addItem]);

  const addItemToCart = (productToAdd) => {
    setaddItem(addToCart(addItem, productToAdd));
  };
  const removeItemFromCart = (ItemToRemove) => {
    setaddItem(removeItem(addItem, ItemToRemove));
  };

  const clearItemFromCart=(ItemToClear)=>{
    setaddItem(clearItem(addItem,ItemToClear))
  };
  const value = {
    isCartOpen,
    setisCartOpen,
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
    addItem,
    cartCount,
    cartPrice,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
