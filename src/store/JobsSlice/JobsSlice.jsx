import { createSlice } from '@reduxjs/toolkit';
import { fetchJobs } from '../../api';

// начальное состояние
const initialState = {
	jobs: [],
	status: 'idle',
	error: null,
};

// создаёи слайс
const jobsSlice = createSlice({
	name: 'jobs',
	initialState,
	reducers: {},
	extraReducers: builder => {
		// присваиваем значения переменным в зависимости от того что пришло с сервера
		builder
			.addCase(fetchJobs.pending, state => {
				state.status = 'loading';
				state.error = null;
			})
			.addCase(fetchJobs.fulfilled, (state, action) => {
				state.status = 'resolved';
				state.jobs = action.payload;
				state.error = null;
			})
			.addCase(fetchJobs.rejected, (state, action) => {
				state.status = 'error';
				state.error = action.error.message;
			});
	},
});

export default jobsSlice.reducer;
// нужно придумать как выводить профессию не топорно создавая несколько одинаковых функций в одном месте
// а чтобы была возможность то ли по айди, то ли по названию выдавать результат
// export const selectJobs = (state) => state.jobs.items;
