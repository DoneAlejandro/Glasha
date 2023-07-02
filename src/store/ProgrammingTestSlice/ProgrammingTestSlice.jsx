import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	programmingTest: [],
	status: 'idle',
	error: null,
	score: 0,
	currentProgrammingQuestionIndex: 0,
	isCompleteProgrammingTest: false,
};

const programmingTestSlice = createSlice({
	name: 'programmingQuestions',
	
})