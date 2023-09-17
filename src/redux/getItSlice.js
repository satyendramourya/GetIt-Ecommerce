import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productData: [],
    userInfo: null,
    cartOrderHistory: [],
};

export const getItSlice = createSlice({
    name: "getItSlice",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = state.productData.find(
                (item) => item._id === action.payload._id
            )
            if (item) {
                item.quantity += action.payload.quantity;
            } else {
                state.productData.push(action.payload);
            }
        },

        deleteItem: (state, action) => { 
            state.productData = state.productData.filter(
                (item) => item._id !== action.payload
            );
        },

        resetCart: (state) => {
            state.productData = [];
        },

        incrementQuantity: (state, action) => { 
            const item = state.productData.find(
                (item) => item._id === action.payload._id
            )
            item.quantity += 1;
        },

        decrementQuantity: (state, action) => {
            const item = state.productData.find(
                (item) => item._id === action.payload._id
            )
            item.quantity > 1 ? item.quantity -= 1 : item.quantity = 1;
        },

        //user Info
        addUser: (state, action) => {
            state.userInfo = action.payload;
        },

        removeUser: (state) => {
            state.userInfo = null;
        },
    }
})

export const {
    addToCart,
    deleteItem,
    resetCart,
    incrementQuantity,
    decrementQuantity,
    addUser,
    removeUser,
    
} = getItSlice.actions;
export default getItSlice.reducer;