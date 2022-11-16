import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cart-slice';
import messageSlice from './message-slice';
import wishlistSlice from './wishlist-slice';

const store = configureStore({
	reducer: {
		cart: cartSlice.reducer,
		wishlist: wishlistSlice.reducer,
		message: messageSlice.reducer,
	},
});

export default store;
