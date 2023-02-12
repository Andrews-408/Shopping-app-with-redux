import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid'

const goodsAvailable = [
    {
        brand: 'lenovo thinkpad x1 yoga',
        price: 2400,
        id: uuidv4()
    },
    {
        brand: 'lenovo thinkpad x1 carbon',
        price: 3500,
        id: uuidv4()
    },
    {
        brand: 'Dell latitude 5591',
        price: 3000,
        id: uuidv4()
    },
    {
        brand: 'HP Omen',
        price: 6000,
        id: uuidv4()
    },
    {
        brand: 'Acer gaming',
        price: 3200,
        id: uuidv4()
    },
]

const storeSlice = createSlice({
    name: 'store',
    initialState: {goods: goodsAvailable},
    reducers: {

    }
})

export default storeSlice;