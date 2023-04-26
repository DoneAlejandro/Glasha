import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchQuestions } from '../../api';
import { TestItem } from '../TestItem';

export const TestList = () => {
	const { questions, status } = useSelector(state => state.questions);
	const dispatch = useDispatch();
	useEffect(() => {
		if (status === 'idle') {
			dispatch(fetchQuestions());
		}
	}, [status, dispatch]);
	// console.log(questions);
	return (
		<>
			{status === 'loading' && <div>Loading...</div>}
			{status === 'error' && (
				<div>
					Возникла ошибка при загрузке теста, попробуйте позднее{' '}
					{questions.error}
				</div>
			)}
			{status === 'resolved' && <TestItem questions={questions} />}
		</>
	);
};
