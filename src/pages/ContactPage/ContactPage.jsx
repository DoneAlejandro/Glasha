import emailjs from '@emailjs/browser';
import React, { useState } from 'react';
import style from './Contact.module.scss';

export const ContactPage = () => {
	const [values, setValues] = useState({
		user_name: '',
		user_email: '',
		message: '',
	});
	const isDisabled =
		values.message === '' ||
		values.user_email === '' ||
		values.user_name === '';

	const sendEmail = e => {
		e.preventDefault();

		emailjs
			.send('service_60m5pkm', 'template_cf07m5e', values, 'ArKftvYlk69C5X5DE')
			.then(
				result => {
					console.log(result.text);
					setValues({
						user_name: '',
						user_email: '',
						message: '',
					});
				},
				error => {
					console.log(error.text);
				}
			);
	};
	return (
		<div className={style.popup}>
			<form className={style.popup__wrapper} onSubmit={sendEmail}>
				<div>
					<h3 className={style.popup__title}>Хотите связаться со мной?</h3>
					<span className={style.popup__subtitle}>Скорее пишите мне!</span>
				</div>
				<div className={style.popup__message}>
					<input
						className={style.popup__input}
						type='text'
						name='user_name'
						placeholder='Name'
						value={values.user_name}
						onChange={e => setValues({ ...values, user_name: e.target.value })}
					/>
					<input
						className={style.popup__input}
						type='email'
						name='user_email'
						placeholder='Email'
						value={values.user_email}
						onChange={e => setValues({ ...values, user_email: e.target.value })}
					/>
					<textarea
						className={style.popup__textarea}
						name='message'
						placeholder='Message'
						value={values.message}
						onChange={e => setValues({ ...values, message: e.target.value })}
					/>
				</div>
				<div className={style.popup__send}>
					<button
						disabled={isDisabled}
						className={
							isDisabled ? style.popup__btnDisabled : style.popup__btnActive
						}
					>
						Отправить
					</button>
				</div>
			</form>
		</div>
	);
};
