import React from 'react';
import { Routing } from '../Routing';
import style from './Main.module.scss';

export const Main = () => {
	return (
		<>
			<main className={style.main}>
				<Routing />
			</main>
		</>
	);
};
