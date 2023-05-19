import React from 'react';
import { useSelector } from 'react-redux';

export const CompleteTestPage = () => {
	const totalScore = useSelector(state => state.questions.currentQuestionIndex);
	const resultProfession = useSelector(state => state.jobs);
	console.log(resultProfession);
	if (totalScore <= 20) {
		return;
	}
	return <div>CompleteTestPage</div>;
};
