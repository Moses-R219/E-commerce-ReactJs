import "./order-item.scss";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
const OrderItem = ({ cartItem }) => {
  const { name, imageUrl, quantity, price } = cartItem;
  const { clearItemFromCart,addItemToCart,removeItemFromCart} = useContext(CartContext);
  const reduceItem=()=>removeItemFromCart(cartItem);
  const increaseItem=()=>addItemToCart(cartItem);
  return (
    <div className="order-items">
      <div className="image">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="decre" onClick={reduceItem}>&#10094;</div>
        <span className="value">{quantity}</span>
        <div className="incre" onClick={increaseItem}>&#10095;</div>
      </span>
      <span className="price">{price}</span>
      <span className="remove" onClick={() => clearItemFromCart(cartItem)}>
        &#10005;
      </span>
    </div>
  );
};

export default OrderItem;
