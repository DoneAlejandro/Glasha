import React from 'react';
import style from './Footer.module.scss';

export const Footer = () => {
	return (
		<>
			<footer className={style.footer}>
				<div>Юридический адрес: город Москва</div>
				<div><a href="/">Почта: test@pro.ru</a></div>
				<div>created by AglayaB  &#169;.</div>
			</footer>
		</>
	);
};
