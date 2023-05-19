import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'http://localhost:8001';

// запрос вопросов с сервера
export const fetchQuestions = createAsyncThunk(
	'questions/fetchQuestions',
	async () => {
		const response = await axios.get(`${BASE_URL}/questions`);
		return response.data;
	}
);

// запрос подходящих вопросов с сервера
export const fetchJobs = createAsyncThunk('jobs/fetchJobs', async () => {
	const response = await axios.get(`${BASE_URL}/jobs`);
	return response.data;
});

