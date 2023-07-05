import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TestComplete } from '../../Components/TestComplete';
import { fetchJobs } from '../../api';
import style from './CompleteTestPage.module.scss';

export const CompleteTestPage = () => {
	// получаем счёт и профессии
	const totalScore = useSelector(state => state.questions.score);
	const professions = useSelector(state => state.jobs);
	const { jobs, status } = professions;
	// используем диспатч для взаимодействия с редьюсером
	const dispatch = useDispatch();
	// получаем подходящие профессии
	useEffect(() => {
		dispatch(fetchJobs());
	}, [dispatch]);
	// в рендере ниже отрабатываем загрузку  и ошибку
	// если всё ок, то появляются вопросы
	return (
		<>
			<div className={style.CompleteTestPageWrapper}>
				{status === 'loading' && (
					<div className={style.CompleteTestPageWrapper__loading}>
						Loading...
					</div>
				)}
				{status === 'error' && (
					<div className={style.CompleteTestPageWrapper__error}>
						Возникла ошибка при загрузке теста, попробуйте позднее
						{jobs.error}
					</div>
				)}
				{status === 'resolved' && (
					<TestComplete totalScore={totalScore} jobs={jobs} />
				)}
			</div>
		</>
	);
};
