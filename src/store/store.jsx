import { configureStore } from '@reduxjs/toolkit';
import questionsReducer from '../reducers/questionsReducer';

export const storeQuestions = configureStore({
	reducer: {
		questions: questionsReducer,
	},
});
