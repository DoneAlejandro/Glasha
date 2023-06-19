import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchQuestions } from '../../api';
import {
	selectAnswer,
	setCurrentQuestionIndex,
	setIsCompletedTest,
} from '../../store/questionsSlice/questionsSlice';
import { TestItem } from '../TestItem';
import style from './TestList.module.scss';

export const TestList = () => {
	const { questions, status } = useSelector(state => state.questions);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchQuestions());
	}, [dispatch]);
	// console.log(questions);

	// состояние для определения выбранного ответа
	const [selectedAnswer, setSelectedAnswer] = useState(null);

	//состояние для определения завершения теста
	const [isTestComplete, setIsTestComplete] = useState(false);

	// хук для редиректа
	const navigate = useNavigate();

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

	// рендер одного вопроса с мемоизацией
	const currentQuestion = useMemo(() => {
		return questions[currentQuestionIndex];
	}, [questions, currentQuestionIndex]);

	//функция, которая выбирает нужный ответ
	// если вопросы не кончились
	// переключает вопрос
	// сбрасывает ответ
	// иначе меняет состояние setIsTestComplete
	const handleNextQuestions = () => {
		if (currentQuestionIndex < questions.length - 1) {
			handleAnswerSelect();
			dispatch(setCurrentQuestionIndex(currentQuestionIndex + 1));
			setSelectedAnswer(null);
		} else {
			setIsTestComplete(true);
			dispatch(setIsCompletedTest(true));
		}
	};
	//  отключение кнопки, если не выбран ни одни ответ
	const isDisabled = selectedAnswer === null;

	// если вопросы кончились
	// редиректим на страницу с результатами
	useEffect(() => {
		if (isTestComplete) {
			navigate('/complete-test');
		}
	}, [isTestComplete, navigate]);

	return (
		<>
			<div className={style.testListWrapper}>
				{status === 'loading' && <div>Loading...</div>}
				{status === 'error' && (
					<div>
						Возникла ошибка при загрузке теста, попробуйте позднее
						{questions.error}
					</div>
				)}
				{status === 'resolved' && (
					<TestItem
						handleInputChange={handleInputChange}
						currentQuestion={currentQuestion}
						selectedAnswer={selectedAnswer}
					/>
				)}
				<button
					disabled={isDisabled}
					onClick={() => handleNextQuestions()}
					className={style.testListWrapper__btn}
				>
					СЛЕДУЮЩИЙ ВОПРОС
				</button>
			</div>
		</>
	);
};
