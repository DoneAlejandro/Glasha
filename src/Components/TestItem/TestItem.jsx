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
						<li key={answer.id} className={style.testItemWrapper__answer}>
							<input
								type='radio'
								className={style.testItemWrapper__check}
								checked={answer.id}
							/>
							<span>{answer.text}</span>
						</li>
					))}
				</ul>
				<button
					onClick={() => handleNextQuestions()}
					className={style.testItemWrapper__btn}
				>
					СЛЕДУЮЩИЙ ВОПРОС
				</button>
			</div>
		</>
	);
};
