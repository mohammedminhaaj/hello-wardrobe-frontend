import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	messageArray: [],
};

const messageSlice = createSlice({
	name: 'message',
	initialState,
	reducers: {
		addMessage(state, action) {
			state.messageArray.push(action.payload);
		},
		shiftMessage(state) {
			state.messageArray.shift();
		},
		removeMessage(state, action) {
			state.messageArray.splice(action.payload, 1);
		},
	},
});

export const messageActions = messageSlice.actions;

export default messageSlice;
