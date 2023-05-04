import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'http://localhost:8001';

// export const getQuestions = async () => {
// 	const response = await axios.get(`${BASE_URL}/questions`);
// 	const data = response.data;
// 	return data;
// };
// обработка ответа от сервера
export const fetchQuestions = createAsyncThunk('data/fetchData', async () => {
	const response = await axios.get(`${BASE_URL}/questions`);
	return response.data;
});


// обработка выбранного ответа 
export const submitAnswer = createAsyncThunk(
	'test/submitAnswer',
	selectedOptionId => {
		return selectedOptionId;
	}
);
