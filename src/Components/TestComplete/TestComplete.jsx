import React from 'react';
import style from './TestComplete.module.scss';

export const TestComplete = ({ totalScore, jobs }) => {
	// если пользователь перешёл по урлу и не выполнил тест 
	// то получит уведомление  
	if (totalScore === 0) {
		return (
			<div className={style.testIsEmpty}>Вы не прошли ещё ни одного теста</div>
		);
		// обрабатываем полученные очки за тест 
		// логика оценки в том что каждому ответу назначен свой балл
		// далее это всё суммируется и выводится сюда
	} else {
		if (totalScore <= 30) {
			return (
				<div className={style.resultJob}>
					<p className={style.resultJob__title}>
						Вам стоит обратить внимание на профессию:{' '}
						<span>{jobs[3].title}</span>
					</p>
					<p className={style.resultJob__description}>{jobs[3].description}</p>
				</div>
			);
		} else if (totalScore > 30 && totalScore <= 50) {
			return (
				<div className={style.resultJob}>
					<p className={style.resultJob__title}>
						Вам стоит обратить внимание на профессию:{' '}
						<span>{jobs[2].title}</span>
					</p>
					<p className={style.resultJob__description}>{jobs[2].description}</p>
				</div>
			);
		} else if (totalScore > 50 && totalScore <= 70) {
			return (
				<div className={style.resultJob}>
					<p className={style.resultJob__title}>
						Вам стоит обратить внимание на профессию:{' '}
						<span>{jobs[1].title}</span>
					</p>
					<p className={style.resultJob__description}>{jobs[1].description}</p>
				</div>
			);
		} else {
			return (
				<div className={style.resultJob}>
					<p className={style.resultJob__title}>
						Вам стоит обратить внимание на профессию:{' '}
						<span>{jobs[0].title}</span>
					</p>
					<p className={style.resultJob__description}>{jobs[0].description}</p>
				</div>
			);
		}
	}
};
