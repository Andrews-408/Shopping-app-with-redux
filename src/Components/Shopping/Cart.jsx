import React from 'react'
import { useDispatch } from 'react-redux';
import { cartActions } from '../../Redux-Store/Cart-slice';
import { FaCartArrowDown } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const Cart = () => {
    const dispatch = useDispatch();
    const itemsInCart = useSelector(state=> state.cart.itemList)

    return (
        <div className='cart-wrapper'>
            <h3>Items in Cart</h3>
        <div className="cart-container">
            {itemsInCart.map(item=>{
                return(
                    <div className='cart-item' key={item.id}>
                        <div className='brand'>{item.brand}</div>
                        <div className='quantity'>Quantity: {item.quantity}</div>
                        <div className='buttons'> 
                            <button className='btn rem' onClick={()=>dispatch(cartActions.removeFromCart(item))}>-</button>
                            <FaCartArrowDown size={20} color='white'/>
                            <button className='btn add' onClick={()=>dispatch(cartActions.addToCart(item))}>+</button>
                        </div>
                        <div className='total-price'>Total Price: {item.totalPrice}</div>
                        <button className='rem-btn' onClick={()=> dispatch(cartActions.delete(item.id))}>Remove</button>
                    </div>
                )
            })}

        </div>
        </div>
    )
}

export default Cart