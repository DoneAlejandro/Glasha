import { createSlice } from '@reduxjs/toolkit';
import { fetchQuestions } from '../api';

const questionsSlice = createSlice({
	name: 'questions',
	initialState: {
		data: [],
		status: 'idle',
		error: null,
	},
	reducers: {
		// setQuestions: (state, action) => {
		// 	state.options = action.payload;
		// },
	},
	extraReducers: builder => {
		builder
			.addCase(fetchQuestions.pending, state => {
				state.status = 'loading';
			})
			.addCase(fetchQuestions.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.data = action.payload;
			})
			.addCase(fetchQuestions.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message;
			});
	},
});

// export const { setQuestions } = questionsSlice.actions;
export default questionsSlice.reducer;
