import { configureStore } from '@reduxjs/toolkit';
import { fetchQuestions } from '../api';
import questionsReducer from '../reducers/questionsReducer';

export const storeQuestions = configureStore({
	reducer: {
		questions: questionsReducer,
	},
});

storeQuestions.dispatch(fetchQuestions());
