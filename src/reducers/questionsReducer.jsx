import { combineReducers } from '@reduxjs/toolkit';
import questionsReducer from '../slices/questionsSlice';

export const rootReducer = combineReducers({
	test: questionsReducer,
});
