import Button from '../button/button.component'
import './cart-list.scss';


const CartList=()=>{
 
    return(
        <div className="cart-list-container">
            <div className="cart-items"/>
            <Button>Go to Orders</Button>
            {/* </div> */}
        </div>
    )
}

export default CartList;