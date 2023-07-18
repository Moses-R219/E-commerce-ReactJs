import "./cart-items.scss";

const CartItem = ({ cartItem }) => {
  const { name, quantity, price, imageUrl } = cartItem;
  return (
    <div className="cart-items-container">
      <img src={imageUrl} alt={name} />
      <div className="item-desc">
        <span className="name">{name}</span>
        <span className="price">
          {quantity}*{price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
