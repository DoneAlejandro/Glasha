import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentQuestionIndex } from '../../store/questionsSlice/questionsSlice';
import style from './TestItem.module.scss';

export const TestItem = () => {
	const dispatch = useDispatch();
	const currentQuestionIndex = useSelector(
		state => state.questions.currentQuestionIndex
	);
	const questions = useSelector(state => state.questions.questions);
	console.log(questions);

	const currentQuestion = useMemo(() => {
		return questions[currentQuestionIndex];
	}, [questions, currentQuestionIndex]);

	const handleNextQuestions = () => {
		dispatch(setCurrentQuestionIndex(currentQuestionIndex + 1));
	};
	return (
		<>
			<div className={style.testItemWrapper}>
				<h2 className={style.testItemWrapper__title}>{currentQuestion.text}</h2>
				<ul>
					{currentQuestion.answers.map(answer => (
						<li key={answer.id}>
							<input type='radio' />
							<span>{answer.text}</span>
						</li>
					))}
				</ul>
				<button onClick={() => handleNextQuestions()}>СЛЕДУЮЩИЙ ВОПРОС</button>
			</div>
		</>
	);
};
