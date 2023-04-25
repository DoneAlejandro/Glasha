// import axios from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';

// const BASE_URL = 'http://localhost:8001';

// // export async function getQuestions() {
// // 	try {
// // 		const response = await axios.get(`${BASE_URL}/questions`);
// // 		return response.data;
// // 	} catch (error) {
// // 		throw new Error(`Failed to fetch questions: ${error.message}`);
// // 	}
// // }
// export const getQuestions = async () => {
// 	const response = await axios.get(`${BASE_URL}/questions`);
// 	const data = response.data;
// 	return data;
// };

export const fetchQuestions = createAsyncThunk(
	'questions/fetchQuestions',
	async () => {
		const response = await fetch('http://localhost:8001/questions');
		const data = response.data;
		return data;
	}
);
