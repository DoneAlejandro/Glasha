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
	// console.log(totalScore);
	// console.log(professions);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchJobs());
	}, [dispatch]);
	console.log(professions);
	console.log(jobs);
	// console.log(jobs[0].title);
	// let totalProfession = professions.jobs;
	// console.log(totalProfession[0].title);
	// return <div>Вам подходит: {totalProfession[0].title}</div>;
	return (
		<>
			<div className={style.CompleteTestPageWrapper}>
				{status === 'loading' && <div>Loading...</div>}
				{status === 'error' && (
					<div>
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

