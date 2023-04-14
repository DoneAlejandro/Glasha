import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// const instance = axios.create({
// 	baseURL: 'http://localhost:8001',
// });

export const fetchQuestions = createAsyncThunk(
	'questions/fetchQuestions',
	async () => {
		const response = await axios.get('http://localhost:8001/questions');

		
		return response.data;
	}
);
