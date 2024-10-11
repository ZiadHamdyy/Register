import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

  
  const initialState: any = {
    leftbar: false,
    rightbar: true,
  };

export const counterSlice = createSlice({
  name: 'bar',
  initialState,
  reducers: {
    setleftbar: (state) => {
        state.leftbar = !state.leftbar;
    },
    setrightbar: (state) => {
        state.rightbar = !state.rightbar;
    },
    setleftbaroff: (state) => {
        state.leftbar = false;
    },
    setrightbaroff: (state) => {
        state.rightbar = false;
    },
    setleftbaron: (state) => {
        state.leftbar = true;
    },
    setrightbaron: (state) => {
        state.rightbar = true;
    },
  },
})

export const { setleftbar, setrightbar, setleftbaroff, setrightbaroff, setleftbaron, setrightbaron } = counterSlice.actions

export default counterSlice.reducer