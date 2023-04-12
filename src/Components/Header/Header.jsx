import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Header.module.scss';

export const Header = () => {
	return (
		<>
			<div className={style.header}></div>
			<NavLink to={'/test'}>TestPage</NavLink>
			<NavLink to={'/'}>HomePage</NavLink>
			<NavLink to={'/contact'}>ContactPage</NavLink>
		</>
	);
};
