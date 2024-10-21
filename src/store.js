import { configureStore } from '@reduxjs/toolkit'
import notesReducer from './redux/notes/notesSlice'

export default configureStore({
  reducer: {
    notes: notesReducer,
  },
})