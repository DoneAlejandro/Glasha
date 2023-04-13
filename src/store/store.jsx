import { configureStore } from '@reduxjs/toolkit';
import questionsReducer from '../reducers/questionsReducer';

export const store = configureStore({
	reducer: {
		// questions: questionsReducer,
	},
});
