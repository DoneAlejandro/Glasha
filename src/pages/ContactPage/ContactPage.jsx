import React from 'react'
import style from './Contact.module.scss'

export const ContactPage = () => {
	const [values, setValues] = React.useState({ user_name: "", user_email: "", message: "" });

	const outsideClick = (e) => {
	  if (e.target.className === "Popup_popup__gfzFt") {
		setVisible(false);
	  }
	};
  
	const closeBtn = (e) => {
	  e.stopPropagation();
	  setVisible(false);
	};
  
	const sendEmail = (e) => {
	  e.preventDefault();
  
	  emailjs.send("service_60m5pkm", "template_cf07m5e", values, "ArKftvYlk69C5X5DE").then(
		(result) => {
		  setVisible(false);
		  console.log(result.text);
		},
		(error) => {
		  setVisible(false);
		  console.log(error.text);
		}
	  );
	};
	return (
	  <div className={style.popup} onClick={(e) => outsideClick(e)}>
		<form className={style.popup__wrapper} onSubmit={sendEmail}>
		  <div
			className={style.popup__close}
			onClick={(e) => {
			  closeBtn(e);
			}}
		  >
			X
		  </div>
		  <div>
			<h3>Остались вопросы?</h3>
			<span>Скорее пишите мне!</span>
		  </div>
		  <div className={style.popup__message}>
			<input className={style.popup__input} type="text" name="user_name" placeholder="Name" onChange={(e) => setValues({ ...values, user_name: e.target.value })} />
			<input className={style.popup__input} type="email" name="user_email" placeholder="Email" onChange={(e) => setValues({ ...values, user_email: e.target.value })} />
			<textarea className={style.popup__textarea} name="message" placeholder="Message" onChange={(e) => setValues({ ...values, message: e.target.value })} />
		  </div>
		  <div className={style.popup__send}>
			<button className={style.popup__btn}>Отправить</button>
		  </div>
		</form>
	  </div>
	);
}

