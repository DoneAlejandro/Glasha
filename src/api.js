import axios from 'axios';

const BASE_URL = 'http://localhost:8001';

export async function getQuestions() {
	try {
		const response = await axios.get(`${BASE_URL}/questions`);
		return response.data;
	} catch (error) {
		throw new Error(`Failed to fetch questions: ${error.message}`);
	}
}
