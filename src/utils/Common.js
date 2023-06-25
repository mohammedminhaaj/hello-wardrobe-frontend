import axios from 'axios';
import { authActions } from '../store/auth-slice';
import { cartActions } from '../store/cart-slice';
import { wishlistActions } from '../store/wishlist-slice';

export const protectedInstance = axios.create();

protectedInstance.interceptors.response.use(
	(response) => response,
	async (error) => {
		const originalRequest = error.config;
		if (error.response.status === 401 && !originalRequest._retry) {
			originalRequest._retry = true;
			await axios
				.post('/api/auth/refresh-token/', {})
				.catch((error) => Promise.reject(error));
			const retryConfig = {
				...originalRequest,
				headers: {
					...originalRequest.headers,
					'Content-Type': 'application/json',
					Accept: 'application/json',
				},
			};
			return protectedInstance(retryConfig);
		} else return Promise.reject(error);
	}
);

export const dispatchCommon = (dispatch, response) => {
	dispatch(authActions.setIsAuthenticated(response.isAuthenticated ?? false));
	dispatch(
		cartActions.setCartItems({
			cartItems: response.cart ?? [],
			isAuthenticated: response.isAuthenticated ?? false,
		})
	);
	dispatch(
		wishlistActions.setWishlistItems({
			wishlistItems: response.wishlist ?? [],
			isAuthenticated: response.isAuthenticated ?? false,
		})
	);
};

export const dispatchBulkActions = (batch, dispatch, response) => {
	batch(() => {
		dispatchCommon(dispatch, response);
	});
};

export const getCartWishlistData = () => {
	return {
		cartWishlistData: {
			cart:
				typeof Storage && localStorage.getItem('cartContents')
					? JSON.parse(localStorage.getItem('cartContents'))
					: [],
			wishlist:
				typeof Storage && localStorage.getItem('wishlistContents')
					? JSON.parse(localStorage.getItem('wishlistContents'))
					: [],
		},
	};
};

export const pageVariant = {
	pageHidden: { opacity: 0 },
	pageVisible: {
		opacity: 1,
		transition: {
			type: 'tween',
			duration: 1,
		},
	},
	pageExit: {
		opacity: 0,
	},
};
