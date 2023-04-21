import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from '../reducers/questionsReducer';

export const store = configureStore({
	reducer: rootReducer,
});
