import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { CompleteTestPage } from '../../pages/CompleteTestPage';
import { ContactPage } from '../../pages/ContactPage';
import { HomePage } from '../../pages/HomePage';
import { TestPage } from '../../pages/TestPage';

export const Routing = () => {
	return (
		<>
			<Routes>
				<Route element={<HomePage />} path={'/'} />
				<Route element={<TestPage />} path={'/test'} />
				<Route element={<ContactPage />} path={'/contact'} />
				<Route element={<CompleteTestPage />} path={'/complete-test'} />
			</Routes>
		</>
	);
};
