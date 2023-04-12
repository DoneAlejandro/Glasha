import React from 'react';
import { Routing } from '../Routing';
import style from './Main.module.scss';

export const Main = () => {
	return (
		<>
			<div className={style.main}>
				<Routing />
			</div>
		</>
	);
};
