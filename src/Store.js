import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Reducers/authSlice';
const store = configureStore({
    reducer: {
        auth: authReducer,        // Handles authentication and role management
    },
});

export default store;
