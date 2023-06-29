import { createSlice } from '@reduxjs/toolkit';

import data from '../../../resources/data';

export interface IQuestionsState {
  id: number;
  title: string;
  info: string;
}

const initialState: IQuestionsState[] = data;

export const questionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {},
});

// export const {  } = questionsSlice.actions;

export default questionsSlice.reducer;
