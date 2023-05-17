import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	selectAnswer,
	setCurrentQuestionIndex,
} from '../../store/questionsSlice/questionsSlice';
import style from './TestItem.module.scss';

export const TestItem = () => {
	const dispatch = useDispatch();
	const [selectedAnswer, setSelectedAnswer] = useState(null);
	// индекс вопроса
	const currentQuestionIndex = useSelector(
		state => state.questions.currentQuestionIndex
	);
	// обработчик выбранного ответа
	// передаёт в редьюсер value
	const handleAnswerSelect = () => {
		if (selectedAnswer) {
			dispatch(
				selectAnswer({
					questionsId: currentQuestion.id,
					answerValue: selectedAnswer,
				})
			);
		}
	};

	// обработчик value у ответа
	const handleInputChange = answerValue => {
		setSelectedAnswer(answerValue);
	};

	// массив вопросов для рендера
	const questions = useSelector(state => state.questions.questions);

	// рендер одного вопроса с мемоизацией
	const currentQuestion = useMemo(() => {
		return questions[currentQuestionIndex];
	}, [questions, currentQuestionIndex]);

	//функция, которая выбирает нужный ответ
	// переключает вопрос
	// сбрасывает ответ
	const handleNextQuestions = () => {
		handleAnswerSelect();
		dispatch(setCurrentQuestionIndex(currentQuestionIndex + 1));
		setSelectedAnswer(null);
	};
	const isDisabled = selectedAnswer === null;
	return (
		<>
			<div className={style.testItemWrapper}>
				<h2 className={style.testItemWrapper__title}>{currentQuestion.text}</h2>
				<ul>
					{currentQuestion.answers.map(answer => (
						<li key={answer.id} className={style.testItemWrapper__answer}>
							<input
								type='radio'
								className={style.testItemWrapper__check}
								value={answer.value}
								checked={selectedAnswer === answer.value}
								onChange={() => handleInputChange(answer.value)}
							/>
							<span>{answer.text}</span>
						</li>
					))}
				</ul>
				<button
					disabled={isDisabled}
					onClick={() => handleNextQuestions()}
					className={style.testItemWrapper__btn}
				>
					СЛЕДУЮЩИЙ ВОПРОС
				</button>
			</div>
		</>
	);
};
