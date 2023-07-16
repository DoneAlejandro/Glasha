import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL_PROF = 'https://64a5f7eb00c3559aa9c04b87.mockapi.io';
const BASE_URL_JS = 'https://64aa7ad70c6d844abede7c61.mockapi.io'

// запрос вопросов с сервера
export const fetchQuestions = createAsyncThunk(
	'questions/fetchQuestions',
	async () => {
		const response = await axios.get(`${BASE_URL_PROF}/questions`);
		return response.data;
	}
);

// запрос подходящих вопросов с сервера
export const fetchJobs = createAsyncThunk('jobs/fetchJobs', async () => {
	const response = await axios.get(`${BASE_URL_PROF}/jobs`);
	return response.data;
});
// https://64aa7ad70c6d844abede7c61.mockapi.io/programming-questions

// запрос вопросов для теста по JS
export const fetchTestJs = createAsyncThunk('testJs/fetchTestJs', async () => {
	const response = await axios.get(`${BASE_URL_JS}/programming-questions`);
	return response.data;
});
