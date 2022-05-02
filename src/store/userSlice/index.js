import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        _data: [],
        abData: [],
    },
    reducers: {
        setData(state, action) {
            const { data } = action.payload;
            state._data = data;
        },
        setAbData(state, action) {
            const { data } = action.payload;
            state.abData = data;
        }
    }
})

export const userSliceActions = userSlice.actions;
export default userSlice;