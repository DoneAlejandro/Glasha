import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	setAnswer,
	setCurrentQuestionsIndex,
} from '../../slices/questionsSlice';

export const Test = () => {
	const dispatch = useDispatch();
	// Получаем вопросы/индекс вопроса/ответы
	const questions = useSelector(state => state.test.questions);
	const currentQuestionsIndex = useSelector(
		state => state.test.currentQuestionsIndex
	);
	const answers = useSelector(state => state.test.answers);

	// вычисляем текущий вопрос
	const currentQuestions = useMemo(() => {
		return questions[currentQuestionsIndex];
	}, [questions, currentQuestionsIndex]);

	// обработчик выбора ответа
	const handleOptionSelect = optionId => {
		dispatch(setAnswer({ questionsId: currentQuestions.id, optionId }));
		dispatch(setCurrentQuestionsIndex(currentQuestionsIndex + 1));
	};

	// проверка на окончание тестирования
	useEffect(() => {
		if (currentQuestionsIndex === questions.length) {
			// history.pushState('/');
			console.log('finish');
		}
	}, [currentQuestionsIndex, questions.length]);

	if (questions.length === 0) {
		return <div>Loading...</div>;
	}
	console.log(answers);
	console.log(currentQuestionsIndex);
	console.log(questions);
	console.log(currentQuestions);

	return (
		<div>
			<h2>{currentQuestions.text}</h2>
			{currentQuestions.options.map(option => {
				return (
					<button key={option.id} onClick={() => handleOptionSelect(option.id)}>
						{option.text}
					</button>
				);
			})}
		</div>
	);
};
