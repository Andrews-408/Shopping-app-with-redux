import React from "react";
import "./Shopping.css"
import {FaCartArrowDown} from 'react-icons/fa'
import Product from "./Product";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../Redux-Store/Cart-slice";
import { authActions } from "../../Redux-Store/Auth-slice";
import Cart from "./Cart";

const Shopping = () => {
    const itemsInStock = useSelector(state=> state.store.goods)
    const totalQuantity = useSelector(state=>state.cart.totalQuantity)
    const showCart = useSelector(state=>state.cart.showCart)
    const itemsInCart = useSelector(state=> state.cart.itemList)
    const dispatch = useDispatch();
    let total = 0;
    itemsInCart.forEach(item=>{
        total += item.totalPrice
    })
    
    const logoutHandler = () => {
        dispatch(authActions.logout())
    }

    const showCartHandler = () => {
        dispatch(cartActions.showCart())
    }
    
    return (
        <div className="shopping-wrapper">
            <nav className="nav-bar">
                <h2 className="left-side">Shopping App</h2>
                <div className="right-side" onClick={showCartHandler}>
                    <span>Items in <FaCartArrowDown />: {totalQuantity} </span>
                </div>
                <div className="right-side logout" onClick={logoutHandler}>Logout</div>
            </nav>
            <main className="main">
                {itemsInStock.map(product=>{
                    return <Product product_details={product} key={product.id}/>
                })}
            </main>
            <div className="place-order">
                <button className="order-btn">Place order</button>
                <span>Total: ${total}</span>
            </div>
            {showCart && <Cart />}
        </div>
    )
}

export default Shopping;