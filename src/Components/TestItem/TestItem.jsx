import React from 'react';
import style from './TestItem.module.scss';

export const TestItem = questions => {
	const [first, setfirst] = useState(second)
	console.log(questions);
	return (
		<>
			test
			<div className={style.testItemWrapper}>
				{questions.questions.map(question => (
					<div>{question.text}</div>
				))}
			</div>
		</>
	);
};
