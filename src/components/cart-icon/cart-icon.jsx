import {ReactComponent as Cart} from '../../assets/shopping-bag-svgrepo-com.svg'
import './cart-icon.scss';
import { CartContext } from '../../context/cart.context';
import { useContext } from 'react';


const CartIcon=()=>{
    const {isCartOpen,setisCartOpen}=useContext(CartContext);
    const toggleCart=()=>setisCartOpen(!isCartOpen);
    return(
        <div className='cart-icon-container' onClick={toggleCart}>
            <Cart className='cart-Icon'/>
            <span className='item-count'>0</span>
        </div>
    )
}

export default CartIcon;