import React from 'react';
import style from './HomePage.module.scss';
import intro from '../../UI/assets/1620103502_18-phonoteka_org-p-distantsionnoe-obuchenie-fon-19.png'

export const HomePage = () => {
	// рендер главная страница 
	
	return (
		<>
			<div className={style.homePageWrapper}>
				<h1 className={style.homePageWrapper__title}>
					<span>ТЕСТПРО</span> - платформа для профессионального тестирования.
				</h1>
				<h2 className={style.homePageWrapper__subtitle}>
					Пройди тест, проверь свои знания, определи свою профессию, создай
					собственное тестирование, и многие другие функции на платформе -
					<span>Тестпро</span>.
				</h2>
				<img src={intro} alt="Интро" className={style.homePageWrapper__img} />
			</div>
		</>
	);
};
