import {configureStore} from '@reduxjs/toolkit'
import dataSlice from './store/dataSlice'
import userSlice from './store/userSlice'

const store = configureStore({
    reducer: {
        data: dataSlice.reducer,
        user: userSlice.reducer
    }
})

export default store;
