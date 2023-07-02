import React from 'react';
import style from './TestComplete.module.scss'

export const TestComplete = ({ totalScore, jobs }) => {
	if (totalScore === 0) {
		return (
			<div className={style.testIsEmpty}>вы не прошли ещё ни одного теста</div>
		);
	} else {
		if (totalScore <= 30) {
			return <p>Вам стоит обратить внимание на профессию: {jobs[3].title}</p>;
		} else if (totalScore > 30 && totalScore <= 50) {
			return <p>Вам стоит обратить внимание на профессию: {jobs[2].title}</p>;
		} else if (totalScore > 50 && totalScore <= 70) {
			return <p>Вам стоит обратить внимание на профессию: {jobs[1].title}</p>;
		} else {
			return <p>Вам стоит обратить внимание на профессию: {jobs[0].title}</p>;
		}
	}
};

