import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	wishlistItems: [],
};

const wishlistSlice = createSlice({
	name: 'wishlist',
	initialState,
	reducers: {
		addItems(state, action) {},
		removeItems(state, action) {},
	},
});

export const wishlistActions = wishlistSlice.actions;

export default wishlistSlice;
