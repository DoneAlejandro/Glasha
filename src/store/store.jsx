import { configureStore } from '@reduxjs/toolkit';
import JobsReducer from './JobsSlice/JobsSlice';
import questionsReducer from './questionsSlice/questionsSlice';
import ProgrammingTestReducer from './ProgrammingTestSlice/ProgrammingTestSlice';

export const store = configureStore({
	// получаем редбюсеры и объединяем 
	reducer: {
		questions: questionsReducer,
		jobs: JobsReducer,
		testJs: ProgrammingTestReducer
	},
});
