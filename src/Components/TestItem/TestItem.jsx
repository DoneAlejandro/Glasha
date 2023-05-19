import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
	selectAnswer,
	setCurrentQuestionIndex,
	setIsCompletedTest,
} from '../../store/questionsSlice/questionsSlice';
import style from './TestItem.module.scss';

export const TestItem = () => {
	const dispatch = useDispatch();

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

	// массив вопросов для рендера
	const questions = useSelector(state => state.questions.questions);
	// console.log(questions);
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
