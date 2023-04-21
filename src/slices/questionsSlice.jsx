import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getQuestions } from '../api';

export const fetchQuestions = createAsyncThunk(
	'test/fetchQuestions',
	async () => {
		const questions = await getQuestions();
		return questions;
	}
);

const initialState = {
	questions: [
		{
			id: 1,
			text: 'Вам нравится работать с людьми?',
			options: [
				{
					id: 1,
					text: 'Да',
				},
				{
					id: 2,
					text: 'Нет',
				},
			],
		},
		{
			id: 2,
			text: 'Вы любите заниматься программированием?',
			options: [
				{
					id: 1,
					text: 'Да',
				},
				{
					id: 2,
					text: 'Нет',
				},
			],
		},
	],
	currentQuestionsIndex: 0,
	answers: {},
	isLoading: false,
	error: null,
};

const questionsSlice = createSlice({
	name: 'test',
	initialState,
	reducers: {
		setAnswer: (state, action) => {
			const { questionsId, optionId } = action.payload;
			state.answers[questionsId] = optionId;
		},
		setCurrentQuestionsIndex: (state, action) => {
			state.currentQuestionsIndex = action.payload;
		},
	},
	extraReducers: builder => {
		builder
			.addCase(fetchQuestions.pending, state => {
				state.isLoading = true;
			})
			.addCase(fetchQuestions.fulfilled, (state, action) => {
				state.isLoading = false;

				state.questions = action.payload;
				state.error = null;
			})
			.addCase(fetchQuestions.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.error.message;
			});
	},
});

export const { setAnswer, setCurrentQuestionsIndex } = questionsSlice.actions;

export default questionsSlice.reducer;
