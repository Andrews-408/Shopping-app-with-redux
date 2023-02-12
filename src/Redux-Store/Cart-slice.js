import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        itemList: [],
        totalQuantity: 0,
        showCart: false
    },
    reducers: {
        addToCart(state, action){
            const newItem = action.payload
            const existingItem = state.itemList.find(item=>item.id===newItem.id)
            if(existingItem){
                existingItem.quantity++
                existingItem.totalPrice += newItem.price
            }
            else{
                state.itemList.push({
                    brand: newItem.brand,
                    id: newItem.id,
                    price: newItem.price,
                    totalPrice: newItem.price,
                    quantity: 1
                })
                state.totalQuantity++
            }
        },

        removeFromCart(state, action){
            const item = action.payload;
            const existingItem = state.itemList.find(product=>product.id===item.id)
            
            if(existingItem){
                existingItem.quantity--;
                existingItem.totalPrice -= item.price;

                if(existingItem.quantity===0){
                    state.totalQuantity--;
                    const sortedItems = state.itemList.filter(product=> product.id !== existingItem.id)
                    state.itemList = sortedItems
                }
            }
            else{
                return
            }
        },

        showCart(state){
            state.showCart = !state.showCart
        },

        delete(state, action){
            const itemId = action.payload
            state.itemList = state.itemList.filter(item=> item.id !== itemId)
            state.totalQuantity--;
        }
    }
})

export const cartActions = cartSlice.actions

export default cartSlice;