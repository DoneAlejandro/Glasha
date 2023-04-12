import React, { useState } from 'react';
import { store } from '../../store/store';

export const Test = () => {
	const [state, setState] = useState(store);
	return <>Test</>;
};
