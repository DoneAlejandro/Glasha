import { configureStore } from '@reduxjs/toolkit';
import JobsReducer from './JobsSlice/JobsSlice';
import questionsReducer from './questionsSlice/questionsSlice';

export const store = configureStore({
	// получаем редбюсеры и объединяем 
	reducer: {
		questions: questionsReducer,
		jobs: JobsReducer,
	},
});
