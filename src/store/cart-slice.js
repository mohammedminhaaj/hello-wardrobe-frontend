import { createSlice } from '@reduxjs/toolkit';

const calculateTotal = (cartItems) =>
	cartItems.reduce((acc, cur) => acc + cur.rentDays * cur.price, 0);

export const generateCartDict = (cartItem) => {
	const { url_name, startDate, endDate, deliverAt, returnBy, size } =
		cartItem;
	return { url_name, startDate, endDate, deliverAt, returnBy, size };
};

export const createCartLocalStorage = (cartItems) => {
	let cartArray = [];
	for (let cartItem of cartItems) {
		cartArray.push({ ...generateCartDict(cartItem) });
	}
	typeof Storage &&
		localStorage.setItem('cartContents', JSON.stringify(cartArray));

	typeof Storage &&
		localStorage.getItem('cartContents') &&
		localStorage.getItem('cartContents') === '[]' &&
		localStorage.removeItem('cartContents');
};

const initialState = {
	showCart: false,
	cartItems: [],
	totalAmount: 0,
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItem(state, action) {
			state.cartItems.push(action.payload.cartItem);
			state.totalAmount +=
				action.payload.cartItem.rentDays *
				action.payload.cartItem.price;
			!action.payload.isAuthenticated &&
				createCartLocalStorage(state.cartItems);
		},
		removeItem(state, action) {
			let arrayIndex = 0;
			state.cartItems.forEach((item, index) => {
				if (
					item.url_name === action.payload.cartItem.url_name &&
					item.size === action.payload.cartItem.size
				)
					arrayIndex = index;
			});
			state.cartItems.splice(arrayIndex, 1);
			state.totalAmount -=
				action.payload.cartItem.rentDays *
				action.payload.cartItem.price;
			!action.payload.isAuthenticated &&
				createCartLocalStorage(state.cartItems);
		},
		toggleCart(state) {
			state.showCart = !state.showCart;
		},
		setCartItems(state, action) {
			state.cartItems = action.payload.cartItems;
			state.totalAmount = calculateTotal(state.cartItems);
			!action.payload.isAuthenticated &&
				createCartLocalStorage(state.cartItems);
		},
	},
});

export const cartActions = cartSlice.actions;

export default cartSlice;
