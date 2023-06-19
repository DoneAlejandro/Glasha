import style from './TestItem.module.scss';

export const TestItem = ({
	handleInputChange,
	currentQuestion,
	selectedAnswer,
}) => {
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
			</div>
		</>
	);
};
