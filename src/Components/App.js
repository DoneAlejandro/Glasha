import style from './App.module.scss';

import { Footer } from './Footer';
import { Header } from './Header';
import { Main } from './Main';

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
