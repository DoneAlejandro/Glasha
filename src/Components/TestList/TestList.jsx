import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { TestItem } from '../TestItem';

export const TestList = () => {
	const questions = useSelector(state => state);

	const dispatch = useDispatch();

	return (
		<div>
			<TestItem questions={questions} />
		</div>
	);
};
