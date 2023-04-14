import { combineReducers } from '@reduxjs/toolkit';
import questionsReducer from '../slices/questionsSlice';

const rootReducer = combineReducers({
	questions: questionsReducer,
});
export default rootReducer;
