import { createSlice } from '@reduxjs/toolkit';
import { fetchQuestions } from '../api';

// const questionsSlice = createSlice({
// 	name: 'questions',
// 	initialState: {
// 		data: fetchQuestions,
// 		status: 'idle',
// 		error: null,
// 	},
// 	reducers: {
// 		// setQuestions: (state, action) => {
// 		// 	state.options = action.payload;
// 		// },
// 	},
// 	extraReducers: builder => {
// 		builder
// 			.addCase(fetchQuestions.pending, state => {
// 				state.status = 'loading';
// 			})
// 			.addCase(fetchQuestions.fulfilled, (state, action) => {
// 				state.status = 'succeeded';
// 				state.data = action.payload;
// 			})
// 			.addCase(fetchQuestions.rejected, (state, action) => {
// 				state.status = 'failed';
// 				state.error = action.error.message;
// 			});
// 	},
// });

// // export const { setQuestions } = questionsSlice.actions;
// export default questionsSlice.reducer;

const initialState = {
	questions: [],
	status: 'idle',
	error: null,
	// questions: [
	// 	{
	// 		id: 1,
	// 		text: 'Что вам интересно?',
	// 		options: [
	// 			'Программирование',
	// 			'Музыка',
	// 			'Фильмы',
	// 			'Путешествия',
	// 			'Чтение',
	// 			'Инженерное дело',
	// 			'Искусство',
	// 			'Иностранные языки',
	// 		],
	// 		answer: null,
	// 	},
	// 	{
	// 		id: 2,
	// 		text: 'Какие предметы вам нравится изучать?',
	// 		options: [
	// 			'Математика',
	// 			'Физика',
	// 			'Химия',
	// 			'Биология',
	// 			'Информатика',
	// 			'Иностранные языки',
	// 			'История',
	// 			'География',
	// 		],
	// 		answer: null,
	// 	},
	// 	{
	// 		id: 3,
	// 		text: 'Какой у вас опыт работы?',
	// 		options: [
	// 			'Отсутствует',
	// 			'Стажировка в технологической компании',
	// 			'Работа в розничном магазине летом',
	// 			'Волонтерство в некоммерческой организации',
	// 			'Работа репетитором',
	// 			'Обучение в строительном ученичестве',
	// 			'Фрилансерская работа в качестве графического дизайнера',
	// 			'Участие в студенческой программе работы в университетской лаборатории',
	// 		],
	// 		answer: null,
	// 	},
	// ],
};

export const questionsSlice = createSlice({
	name: 'questions',
	initialState,
	reducers: {
		answerQuestion: (state, action) => {
			const { questionsIndex, selectedOption } = action.payload;
			state.questions[questionsIndex].selectedOption = selectedOption;
		},
		resetAnswer: state => {
			state.questions.forEach(question => {
				question.selectedOption = null;
			});
		},
	},
	// 	answerQuestion(state, action) {
	// 		const { questionsId, answer } = action.payload;
	// 		const question = state.questions.find(q => q.id === questionsId);
	// 		if (question) {
	// 			question.answer = answer;
	// 		}
	// 	},
	// 	resetAnswer(state) {
	// 		state.questions.forEach(q => (q.answer = null));
	// 	},
	// },
	extraReducers: builder => {
		builder
			.addCase(fetchQuestions.pending, state => {
				state.status = 'loading';
			})
			.addCase(fetchQuestions.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.questions = action.payload;
			})
			.addCase(fetchQuestions.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message;
			});
	},
});

export const { answerQuestion, resetAnswer } = questionsSlice.actions;
export default questionsSlice.reducer;
