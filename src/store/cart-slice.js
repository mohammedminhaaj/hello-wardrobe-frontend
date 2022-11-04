import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	cartItems: [],
	showCart: false,
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItems(state, action) {},
		removeItems(state, action) {},
		toggleCart(state) {
			state.showCart = !state.showCart;
		},
	},
});

export const cartActions = cartSlice.actions;

export default cartSlice;
