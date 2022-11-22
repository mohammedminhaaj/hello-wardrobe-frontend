import { createSlice } from '@reduxjs/toolkit';

const calculateTotal = (cartItems) =>
	cartItems.reduce((acc, cur) => acc + cur.rentDays * cur.price, 0);

const initialState = () => {
	const initialObject = {
		showCart: false,
	};

	if (typeof Storage && localStorage.getItem('cartContents')) {
		initialObject.cartItems = JSON.parse(
			localStorage.getItem('cartContents')
		);
		initialObject.totalAmount = calculateTotal(
			JSON.parse(localStorage.getItem('cartContents'))
		);
	} else {
		initialObject.cartItems = [];
		initialObject.totalAmount = 0;
	}

	return initialObject;
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItems(state, action) {
			state.cartItems.push(action.payload);
			state.totalAmount = calculateTotal(state.cartItems);
			typeof Storage &&
				localStorage.setItem(
					'cartContents',
					JSON.stringify(state.cartItems)
				);
		},
		removeItems(state, action) {
			let arrayIndex = 0;
			state.cartItems.forEach((item, index) => {
				if (
					item.url_name === action.payload.url_name &&
					item.size === action.payload.size
				)
					arrayIndex = index;
			});
			state.cartItems.splice(arrayIndex, 1);
			state.totalAmount = calculateTotal(state.cartItems);
			typeof Storage &&
				localStorage.setItem(
					'cartContents',
					JSON.stringify(state.cartItems)
				);
			if (
				!state.cartItems.length &&
				typeof Storage &&
				localStorage.getItem('cartContents')
			)
				localStorage.removeItem('cartContents');
		},
		toggleCart(state) {
			state.showCart = !state.showCart;
		},
	},
});

export const cartActions = cartSlice.actions;

export default cartSlice;
