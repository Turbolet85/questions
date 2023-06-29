import { combineReducers } from '@reduxjs/toolkit';

import questionSlice from '../features/questions/questionsSlice';
import singleQuestionReducer from '../features/singleQuestion/singleQuestionSlice';

const rootReducer = combineReducers({
  singleQuestion: singleQuestionReducer,
  questions: questionSlice,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
