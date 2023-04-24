import React from 'react';

export const Tests = ({ question }) => {
	return (
		<>
			<h2> {question.title} </h2>
			<p> {question.description} </p>
			<ul>
				{question.options.map(option => (
					<li key={option.id}>
						<input
							type='radio'
							id={option.id}
							name={question.id}
							value={option.id}
						/>
						<label htmlFor={option.id}>{option.text}</label>
					</li>
				))}
			</ul>
		</>
	);
};
