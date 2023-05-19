import { configureStore } from '@reduxjs/toolkit';
import commonSlice from './common-slice';
import authSlice from './auth-slice';
import cartSlice from './cart-slice';
import messageSlice from './message-slice';
import wishlistSlice from './wishlist-slice';

const store = configureStore({
	reducer: {
		common: commonSlice.reducer,
		cart: cartSlice.reducer,
		wishlist: wishlistSlice.reducer,
		message: messageSlice.reducer,
		auth: authSlice.reducer,
	},
});

export default store;
