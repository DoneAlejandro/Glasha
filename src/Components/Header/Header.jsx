import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Header.module.scss';

export const Header = () => {
	return (
		<>
			<header className={style.header}>
				<div className={style.header__container}>
					<div className={style.header__logo}>
						<NavLink to={'/'}>ТЕСТПРО</NavLink>
					</div>
					<nav className={style.header__link}>
						<NavLink
							className={({ isActive }) =>
								!isActive
									? style.header__linkItem
									: `${style.header__linkItem} ${style.header__activeLink}`
							}
							to={'/'}
						>
							Главная
						</NavLink>
						<NavLink
							className={({ isActive }) =>
								isActive
									? `${style.header__linkItem} ${style.header__activeLink}`
									: style.header__linkItem
							}
							to={'/test-list'}
						>
							Пройти тест
						</NavLink>
						<NavLink
							className={({ isActive }) =>
								isActive
									? `${style.header__linkItem} ${style.header__activeLink}`
									: style.header__linkItem
							}
							to={'/contact'}
						>
							Контакты
						</NavLink>
					</nav>
				</div>
			</header>
		</>
	);
};
