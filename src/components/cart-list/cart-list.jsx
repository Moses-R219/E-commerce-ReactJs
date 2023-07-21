import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../button/button.component";
import { CartContext } from "../../context/cart.context";
import CartItem from "../cart-items/cart-items";
import "./cart-list.scss";

const CartList = () => {
  const { addItem } = useContext(CartContext);
  
  const navigate=useNavigate();
  const goToOrder=()=>navigate('/orders');

  return (
    <div className="cart-list-container">
      <div className="cart-items">
        {addItem.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button onClick={goToOrder}>Go to Orders</Button>
    </div>
  );
};

export default CartList;
