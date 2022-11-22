import { createSlice } from '@reduxjs/toolkit';

const initialState = () => {
	if (typeof Storage && localStorage.getItem('wishlistContents'))
		return {
			wishlistItems: JSON.parse(localStorage.getItem('wishlistContents')),
		};
	return { wishlistItems: [] };
};

const wishlistSlice = createSlice({
	name: 'wishlist',
	initialState,
	reducers: {
		addItems(state, action) {
			state.wishlistItems.push(action.payload);
			typeof Storage &&
				localStorage.setItem(
					'wishlistContents',
					JSON.stringify(state.wishlistItems)
				);
		},
		removeItems(state, action) {},
	},
});

export const wishlistActions = wishlistSlice.actions;

export default wishlistSlice;
