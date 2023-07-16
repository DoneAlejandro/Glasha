import React from 'react';
import { PiSealQuestionDuotone } from 'react-icons/pi';
import { TbBrandJavascript } from 'react-icons/tb';
import { NavLink } from 'react-router-dom';
import style from './TestPage.module.scss';

export const TestPage = () => {
	// рендерим тест лист
	return (
		<>
			<div className={style.TestPageWrapper}>
				<nav className={style.TestPageWrapper__menu}>
					<NavLink
						className={style.TestPageWrapper__menuLink}
						to={'/prof-test'}
					>
						<PiSealQuestionDuotone
							className={style.TestPageWrapper__menuIcon}
						/>
						<span>Тест на профориенацию в IT</span>
					</NavLink>
					<NavLink className={style.TestPageWrapper__menuLink} to={'/js-test'}>
						<TbBrandJavascript className={style.TestPageWrapper__menuIcon} />
						<span>Тест на знание JavaScript</span>
					</NavLink>
				</nav>
			</div>
		</>
	);
};
