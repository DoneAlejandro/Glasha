import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { fetchQuestions } from '../../api';
import { fetchQuestions } from '../../store/questionsSlice/questionsSlice';
import { TestItem } from '../TestItem';

export const TestList = () => {
	const questions = useSelector(state => state);
	console.log(questions);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchQuestions);
	}, [dispatch]);
	return (
		<div>
			<TestItem questions={questions} />
		</div>
	);
};
