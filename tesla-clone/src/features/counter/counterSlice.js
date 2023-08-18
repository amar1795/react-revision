import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { fetchCount } from './counterAPI';

const initialState = {
  cars: ["Model S","Model Y","Model 3","Model X", ],

};


export const carSlice = createSlice({
  name: 'car',
  initialState,
  reducers: {
    
  },
  
});

// export const { increment, decrement, incrementByAmount } = counterSlice.actions;


export const selectcars = (state) => state.car.cars;
// exporting state

export default carSlice.reducer;
