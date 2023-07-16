import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchTestJs } from '../../api';
import {
	setScore,
	setCurrentProgrammingQuestionIndex,
	setIsCompleteProgrammingTest,
} from '../../store/ProgrammingTestSlice/ProgrammingTestSlice';
import { TestItem } from '../TestItem';
import style from './JSList.module.scss';

export const JSList = () => {
	const { questions, status } = useSelector(state => state.testJs);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchTestJs());
	}, [dispatch]);
	console.log(questions);

	// состояние для определения выбранного ответа
	const [selectedAnswer, setSelectedAnswer] = useState(null);

	//состояние для определения завершения теста
	const [isTestComplete, setIsTestComplete] = useState(false);

	// хук для редиректа
	const navigate = useNavigate();

	// индекс вопроса
	const currentProgrammingQuestionIndex = useSelector(
		state => state.testJs.currentProgrammingQuestionIndex
	);
	// обработчик выбранного ответа
	// передаёт в редьюсер value
	const handleAnswerSelect = () => {
		if (selectedAnswer) {
			dispatch(
				setScore({
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
		return questions[currentProgrammingQuestionIndex];
	}, [questions, currentProgrammingQuestionIndex]);

	//функция, которая выбирает нужный ответ
	// если вопросы не кончились
	// переключает вопрос
	// сбрасывает ответ
	// иначе меняет состояние setIsTestComplete
	const handleNextQuestions = () => {
		if (currentProgrammingQuestionIndex < questions.length - 1) {
			handleAnswerSelect();
			dispatch(setCurrentProgrammingQuestionIndex(currentProgrammingQuestionIndex + 1));
			setSelectedAnswer(null);
		} else {
			setIsTestComplete(true);
			dispatch(setIsCompleteProgrammingTest(true));
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

	// ниже рендерим наши вопросы
	// есть обработка загрузки и ошибки
	return (
		<>
			<div className={style.testListWrapper}>
				<span className={style.testListWrapper__indexQuestion}>
					{currentProgrammingQuestionIndex + 1} из {questions.length}
				</span>
				<div className={style.testListWrapper__container}>
					{status === 'loading' && (
						<div className={style.testListWrapper__loading}>Loading...</div>
					)}
					{status === 'error' && (
						<div className={style.testListWrapper__error}>
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
					{status === 'loading' || status === 'error' ? (
						''
					) : (
						<button
							disabled={isDisabled}
							onClick={() => handleNextQuestions()}
							className={
								!isDisabled
									? style.testListWrapper__btnActive
									: style.testListWrapper__btnDisabled
							}
						>
							СЛЕДУЮЩИЙ ВОПРОС
						</button>
					)}
				</div>
			</div>
		</>
	);
};
