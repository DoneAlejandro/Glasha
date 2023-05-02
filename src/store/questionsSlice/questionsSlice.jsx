import { createSlice } from '@reduxjs/toolkit';
import { fetchQuestions } from '../../api';

const initialState = {
	questions: [],
	status: 'idle',
	error: null,
	score: 0,
	currentQuestionIndex: 0,
};

// export const fetchQuestions = createAsyncThunk(
// 	'questions/fetchQuestions',
// 	async function () {
// 		const response = await fetch(
// 			'https://jsonplaceholder.typicode.com/todos?_limit=10'
// 		);
// 		console.log(response);
// 		const data = await response.json();

// 		return data;
// 	}
// );
// debugger;
const questionsSlice = createSlice({
	name: 'questions',
	initialState,
	reducers: {
		setCurrentQuestionIndex: (state, action) => {
			state.currentQuestionIndex = action.payload
		},
		checkedAnswer: (state, action) => {
			// const 
		}
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

export const {setCurrentQuestionIndex} = questionsSlice.actions

export default questionsSlice.reducer;
