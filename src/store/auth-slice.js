import { createSlice } from '@reduxjs/toolkit';

const initialState = () => {
	return {
		loginReferrer: '/',
		isAuthenticated: false,
	};
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setReferrer(state, action) {
			state.loginReferrer = action.payload;
		},
		setIsAuthenticated(state, action) {
			state.isAuthenticated = action.payload;
		},
	},
});

export const authActions = authSlice.actions;

export default authSlice;
