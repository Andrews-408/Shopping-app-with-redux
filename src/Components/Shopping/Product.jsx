import React from 'react'
import {FaCartArrowDown} from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { cartActions } from '../../Redux-Store/Cart-slice'

const Product = ({product_details}) =>{
    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(cartActions.addToCart(product_details))
    }

    const removeFromCart = () => {
        dispatch(cartActions.removeFromCart(product_details))
    }
    return(
        <div className='product-container'>
            <h3 className='brand'>{product_details.brand}</h3>
            <span className='price'>Price: {product_details.price}</span>
            <div className='add-sub-btn'>
                <button className='btn rem' onClick={removeFromCart}>-</button>
                <FaCartArrowDown size={20} color='grey'/>
                <button className='btn add' onClick={addToCart}>+</button>
            </div>
        </div>
    )
}

export default Product