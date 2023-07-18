import { useContext } from "react";
import Button from "../button/button.component";
import { CartContext } from "../../context/cart.context";
import CartItem from "../cart-items/cart-items";
import "./cart-list.scss";

const CartList = () => {
  const { addItem } = useContext(CartContext);
  console.log(addItem);

  return (
    <div className="cart-list-container">
      <div className="cart-items">
        {addItem.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button>Go to Orders</Button>
    </div>
  );
};

export default CartList;
