import {configureStore} from '@reduxjs/toolkit'
import authSlice from './Auth-slice'
import storeSlice from './Stock-slice'
import signUpSlice from './SignUp-slice'
import cartSlice from './Cart-slice'
import uiSlice from './Ui-slice'

const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        signUp: signUpSlice.reducer,
        store: storeSlice.reducer,
        cart: cartSlice.reducer,
        ui: uiSlice.reducer
    }
})

export default store