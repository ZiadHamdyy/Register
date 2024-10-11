import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface Subject {
    id: string;
    name: string;
    createdAt: string;
  }
  
  export interface SubjectState {
    currentSubject: Subject | null;
  }
  
  const initialState: SubjectState = {
    currentSubject: null,
  };

export const subjectSlice = createSlice({
  name: 'subject',
  initialState,
  reducers: {
    setCurrent: (state, action: PayloadAction<Subject>) => {
        const { id, name, createdAt } = action.payload;
        state.currentSubject = { id, name, createdAt: new Date(createdAt).toISOString() };
      },
  },
})

export const { setCurrent } = subjectSlice.actions

export default subjectSlice.reducer