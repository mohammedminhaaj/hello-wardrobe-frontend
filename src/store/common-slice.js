import { createSlice } from '@reduxjs/toolkit';

const commonSlice = createSlice({
	name: 'auth',
	initialState: { appLoaded: false },
	reducers: {
		setAppLoaded(state, action) {
			state.appLoaded = action.payload;
		},
	},
});

export const commonActions = commonSlice.actions;

export default commonSlice;
