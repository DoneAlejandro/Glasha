import { createSlice } from '@reduxjs/toolkit';
import { fetchTestJs } from '../../api';

const initialState = {
	testJs: [],
	status: 'idle',
	error: null,
	score: 0,
	currentProgrammingQuestionIndex: 0,
	isCompleteProgrammingTest: false,
};

const programmingTestSlice = createSlice({
	name: 'testJs',
	initialState,
	reducers: {
		setScore: (state, action) => {
			const { answerIndex, answerValue } = action.payload;
			const questionsJS = state.testJs.find(
				q => (q.answer = answerIndex)
			);
			if (questionsJS) {
				state.score += answerValue;
			}
		},
		setCurrentProgrammingQuestionIndex: (state, action) => {
			state.currentProgrammingQuestionIndex = action.payload;
		},
		setIsCompleteProgrammingTest: (state, action) => {
			state.isCompleteTest = action.payload;
		},
	},
	extraReducers: builder => {
		builder
			.addCase(fetchTestJs.pending, state => {
				state.status = 'loading';
				state.error = null;
			})
			.addCase(fetchTestJs.fulfilled, (state, action) => {
				state.status = 'resolved';
				state.programmingTest = action.payload;
				state.error = null;
			})
			.addCase(fetchTestJs.rejected, (state, action) => {
				state.status = 'error';
				state.error = action.error.message;
			});
	},
});

export const { setScore, setCurrentProgrammingQuestionIndex, setIsCompleteProgrammingTest } =
	programmingTestSlice.actions;
export default programmingTestSlice.reducer;
