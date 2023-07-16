import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { CompleteTestPage } from '../../pages/CompleteTestPage';
import { ContactPage } from '../../pages/ContactPage';
import { HomePage } from '../../pages/HomePage';
import { TestPage } from '../../pages/TestPage';
import { ProfList } from '../ProfList';
import { JSList } from '../JSList';

export const Routing = () => {
	return (
		<>
			<Routes>
				<Route element={<HomePage />} path={'/'} />
				<Route element={<TestPage />} path={'/test-list'} />
				<Route element={<ProfList />} path={'/prof-test'} />
				<Route element={<JSList />} path={'/js-test'} />
				<Route element={<ContactPage />} path={'/contact'} />
				<Route element={<CompleteTestPage />} path={'/complete-test'} />
				<Route element={<HomePage />} path={'*'} />
			</Routes>
		</>
	);
};
