import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ISingleQuestionState {
  values: Record<number, boolean>;
}

const initialState: ISingleQuestionState = {
  values: {},
};

export const singleQuestionSlice = createSlice({
  name: 'singleQuestion',
  initialState,
  reducers: {
    toggle: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      if (state.values[id] === undefined) {
        state.values[id] = true;
      } else {
        state.values[id] = !state.values[id];
      }
    },
  },
});

export const { toggle } = singleQuestionSlice.actions;

export default singleQuestionSlice.reducer;
