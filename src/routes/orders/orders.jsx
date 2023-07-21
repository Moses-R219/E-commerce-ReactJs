import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import "./orders.scss";
import OrderItem from "../../components/order-item/order-item";

const Orders = () => {
  const { addItem, addItemToCart, removeItemFromCart } =
    useContext(CartContext);

  return (
    <div className="orders">
      <h1>My Orders</h1>
      <div className="order-header">
        <div className="header-pro">
            <span>Image</span>
        </div>
        <div className="header-pro">
            <span>Product</span>
        </div>
        <div className="header-pro">
            <span>Quantity</span>
        </div>
        <div className="header-pro">
            <span>Price</span>
        </div>
        <div className="header-pro">
            <span>Remove</span>
        </div>
      </div>
      {addItem.map((cartItem) => 
      <OrderItem key={cartItem.id} cartItem={cartItem}/>
      )}
      <span className="tot">Total:</span>
    </div>
  );
};

export default Orders;
