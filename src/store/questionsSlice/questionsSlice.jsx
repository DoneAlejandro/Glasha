import { createSlice } from '@reduxjs/toolkit';
import { fetchQuestions } from '../../api';

const initialState = {
	questions: [],
	status: 'idle',
	error: null,
	score: 0,
	currentQuestionIndex: 0,
	isCompleteTest: false,
};

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
		// checkedAnswer: (state, action) => {
		// 	const toggleAnswer = state.questions.answers.find(
		// 		answer => answer.id === action.payload.id
		// 	);
		// 	toggleAnswer.check = !toggleAnswer.check;
		// },
	},
	extraReducers: builder => {
		builder
			.addCase(fetchQuestions.pending, state => {
				state.status = 'loading';
				state.error = null;
			})
			.addCase(fetchQuestions.fulfilled, (state, action) => {
				state.status = 'resolved';
				state.questions = action.payload;
				// console.log(state.questions);
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
