import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobs } from '../../api';

export const CompleteTestPage = () => {
	// получаем счёт и профессии
	const totalScore = useSelector(state => state.questions.score);
	const professions = useSelector(state => state.jobs);
	// console.log(totalScore);
	// console.log(professions);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchJobs());
	}, [dispatch]);

	let totalProfession = professions.jobs;
	console.log(totalProfession[0]);
	// if (totalScore <= 30) {
	// 	return (
	// 		<p>
	// 			Вам стоит обратить внимание на профессию: `${totalProfession[3].title}`
	// 		</p>
	// 	);
	// } else if (totalScore > 30 && totalScore <= 50) {
	// 	return (
	// 		<p>
	// 			Вам стоит обратить внимание на профессию: `${totalProfession[2].title}`
	// 		</p>
	// 	);
	// } else if (totalScore > 50 && totalScore <= 70) {
	// 	return (
	// 		<p>
	// 			Вам стоит обратить внимание на профессию: `${totalProfession[1].title}`
	// 		</p>
	// 	);
	// } else {
	// 	return (
	// 		<p>
	// 			Вам стоит обратить внимание на профессию: `${totalProfession[0].title}`
	// 		</p>
	// 	);
	// }
};
