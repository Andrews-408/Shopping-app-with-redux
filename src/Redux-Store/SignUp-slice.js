import {createSlice} from "@reduxjs/toolkit"

const signUpSlice = createSlice({
    name: 'signUp',
    initialState: {signedUp: true},
    reducers : {
        signUp(state){
            state.signedUp = false
        },

    }
})

export const signedUpActions = signUpSlice.actions
export default signUpSlice;