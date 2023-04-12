import style from './App.module.scss';

import { Footer } from './Components/Footer';
import { Header } from './Components/Header';
import { Main } from './Components/Main';

function App() {
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
