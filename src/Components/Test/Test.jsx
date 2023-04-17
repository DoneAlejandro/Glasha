import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuestions } from '../../api';
import { answerQuestion, resetAnswer } from '../../slices/questionsSlice';
import style from './Test.module.scss';

export const Test = () => {
	// const questions = useSelector(state => state.questions);
	const [currentItem, setCurrentItem] = useState(0);
	// console.log(questions);
	// const nextQuestions = () => {
	// 	setCurrentItem(currentItem => currentItem + 1);
	// };

	// const dispatch = useDispatch();
	// const questions = useSelector(state => state.questions.text);
	// const questionsStatus = useSelector(state => state.questions);
	// const questionsError = useSelector(state => state.questions);

	// useEffect(() => {
	// 	if (questionsStatus === 'idle') {
	// 		dispatch(fetchQuestions());
	// 	}
	// }, [questionsStatus, dispatch]);
	// let content;
	// if (questionsStatus === 'loading') {
	// 	content = <div>loading...</div>;
	// } else if (questionsStatus === 'succeeded') {
	// 	content = questions.map(question => (
	// 		<div key={question.id}>{question.text}</div>
	// 	));
	// } else if (questionsStatus === 'error') {
	// 	content = <div>{questionsError}</div>;
	// }

	const questions = useSelector(state => state.questions.questions.questions);
	const dispatch = useDispatch();

	const handlerAnswer = (questionId, answer) => {
		dispatch(answerQuestion({ questionId, answer }));
	};
	const handlerReset = () => {
		dispatch(resetAnswer());
	};

	useEffect(() => {
		dispatch(fetchQuestions);
	}, [dispatch]);
	console.log(questions);
	// console.log(questions[currentItem].id);
	return (
		<>
			{/* <h2>{questions}</h2>
			<ul>
				{questions[currentItem].options.map((answer, index) => (
					<li key={index}>{answer}</li>
				))}
			</ul>
			<button onClick={nextQuestions}>next</button> */}
			{/* {content} */}
			{/* {questions.map(question => (
				<div key={question.id}>
					<h3>{question.text}</h3>
					<ul>
						{question.options.map(option => (
							<li key={option}>
								<input
									type='radio'
									name={`question-${question.id}`}
									value={option}
									checked={question.answer === option}
									onChange={() => handlerAnswer(question.id, option)}
								/>
								{option}
							</li>
						))}
					</ul>
				</div>
			))} */}
			<div className={style.testBox}>
				<h3>{questions[currentItem].text}</h3>
				<ul>
					{questions[currentItem].options.map((answer, index) => (
						<li key={index}>
							<input
								type='radio'
								name={`answer-${answer.index}`}
								value={answer}
								checked={questions[currentItem].answer === answer}
								onChange={() =>
									handlerAnswer(questions[currentItem].id, answer)
								}
							/>
							{answer}
						</li>
					))}
				</ul>
			</div>
			<button onClick={handlerReset}>RESET</button>
		</>
	);
};
// напиши оптимизированное приложение по тестированию на профориентацию с использованием json server, createAsyncThunk, axios , redux-toolkit, useEffect и useMemo, не забывай о комментариях
