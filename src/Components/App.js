import { useDispatch } from 'react-redux';
import style from './App.module.scss';

import { useEffect } from 'react';
// import { fetchQuestions } from '../store/questionsSlice/questionsSlice';
import { fetchQuestions } from '../api';
import { Footer } from './Footer';
import { Header } from './Header';
import { Main } from './Main';

function App() {
	// компонент в котором мы собираем хедер (шапка), мейн (контент), футер (подвал)

	return (
		<>
			<div className={style.wrapper}>
				<Header />
				<Main />
				<Footer />
			</div>
		</>
	);
}

export default App;
