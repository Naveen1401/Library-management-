import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
    name: 'data',
    initialState: {
        _data: [],
        abData:[],
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

export const dataSliceActions = dataSlice.actions;
export default dataSlice;