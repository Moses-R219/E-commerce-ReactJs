import {ReactComponent as Cart} from '../../assets/cart.svg'
import './cart-icon.scss';
import { CartContext } from '../../context/cart.context';
import { useContext } from 'react';


const CartIcon=()=>{
    const {isCartOpen,setisCartOpen,cartCount}=useContext(CartContext);
    const toggleCart=()=>setisCartOpen(!isCartOpen);
    return(
        <div className='cart-icon-container' onClick={toggleCart}>
            <Cart className='cart-Icon'/>
            <span className='item-count'>{cartCount}</span>
        </div>
    )
}

export default CartIcon;