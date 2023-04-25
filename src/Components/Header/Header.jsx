import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Header.module.scss';

export const Header = () => {
	return (
		<>
			<header className={style.header}>
				<div className='header__logo'>
					<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'>
						<circle cx='50' cy='50' r='45' fill='#8BC34A' />
						<text
							x='50'
							y='55'
							fontSize='30'
							fontWeight='bold'
							textAnchor='middle'
							fill='#FFFFFF'
						>
							ТЕСТ
						</text>
					</svg>
				</div>
				<nav className='header__link'>
					<NavLink className={style.header__linkItem} to={'/test'}>
						TestPage
					</NavLink>
					<NavLink className={style.header__linkItem} to={'/'}>
						HomePage
					</NavLink>
					<NavLink className={style.header__linkItem} to={'/contact'}>
						ContactPage
					</NavLink>
				</nav>
			</header>
		</>
	);
};
