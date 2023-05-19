import { createSlice } from '@reduxjs/toolkit';

const initialState = { wishlistItems: [] };

export const generateWishlistDict = (wishlistItem) => {
	const { url_name } = wishlistItem;
	return { url_name };
};

export const createWishlistLocalStorage = (wishlistItems) => {
	let wishlistArray = [];
	for (let wishlistItem of wishlistItems) {
		wishlistArray.push({ ...generateWishlistDict(wishlistItem) });
	}
	typeof Storage &&
		localStorage.setItem('wishlistContents', JSON.stringify(wishlistArray));

	typeof Storage &&
		localStorage.getItem('wishlistContents') &&
		localStorage.getItem('wishlistContents') === '[]' &&
		localStorage.removeItem('wishlistContents');
};

const wishlistSlice = createSlice({
	name: 'wishlist',
	initialState,
	reducers: {
		addItem(state, action) {
			state.wishlistItems.push(action.payload.wishlistItem);
			!action.payload.isAuthenticated &&
				createWishlistLocalStorage(state.wishlistItems);
		},
		removeItem(state, action) {
			let arrayIndex = 0;
			state.wishlistItems.forEach((item, index) => {
				if (item.url_name === action.payload.wishlistItem.url_name)
					arrayIndex = index;
			});
			state.wishlistItems.splice(arrayIndex, 1);
			!action.payload.isAuthenticated &&
				createWishlistLocalStorage(state.wishlistItems);
		},
		setWishlistItems(state, action) {
			state.wishlistItems = action.payload.wishlistItems;
			!action.payload.isAuthenticated &&
				createWishlistLocalStorage(state.wishlistItems);
		},
	},
});

export const wishlistActions = wishlistSlice.actions;

export default wishlistSlice;
