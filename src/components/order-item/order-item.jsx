import './order-item.scss';

const OrderItem=({cartItem})=>{
    const {name,imageUrl,quantity,price}=cartItem;
    return(
        <div className='order-items'>
            <div className='image'>
                <img src={imageUrl} alt={name} />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>{quantity}</span>
            <span className='price'>{price}</span>
            <span className='remove'>&#10005;</span>
        </div>
    )
};

export default OrderItem;