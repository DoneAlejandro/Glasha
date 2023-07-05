import { createSlice } from '@reduxjs/toolkit';
import { fetchQuestions } from '../../api';

// начальное состояние
const initialState = {
	questions: [],
	status: 'idle',
	error: null,
	score: 0,
	currentQuestionIndex: 0,
	isCompleteTest: false,
};

// создаёи слайс
const questionsSlice = createSlice({
	name: 'questions',
	initialState,
	reducers: {
		setCurrentQuestionIndex: (state, action) => {
			state.currentQuestionIndex = action.payload;
		},
		selectAnswer: (state, action) => {
			const { questionsId, answerValue } = action.payload;
			const question = state.questions.find(q => q.id === questionsId);
			if (question) {
				state.score += answerValue;
			}
		},
		setIsCompletedTest: (state, action) => {
			state.isCompleteTest = action.payload;
		},

	},
	extraReducers: builder => {
		builder
		// присваиваем значения переменным в зависимости от того что пришло с сервера
			.addCase(fetchQuestions.pending, state => {
				state.status = 'loading';
				state.error = null;
			})
			.addCase(fetchQuestions.fulfilled, (state, action) => {
				state.status = 'resolved';
				state.questions = action.payload;
				state.error = null;
			})
			.addCase(fetchQuestions.rejected, (state, action) => {
				state.status = 'error';
				state.error = action.error.message;
			});
	},
});

export const { setCurrentQuestionIndex, selectAnswer, setIsCompletedTest } = questionsSlice.actions;

export default questionsSlice.reducer;
