import { configureStore } from '@reduxjs/toolkit'
import subjectSlice from './Slice/SubjectSlice'
import BarsSlice from './Slice/BarsSlice'
export const makeStore = () => {
  return configureStore({
    reducer: {
        subject: subjectSlice,
        Bars: BarsSlice,
    },
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']