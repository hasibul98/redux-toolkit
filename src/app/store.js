import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import todoReducer from '../features/todo/todoSlice';
import userReducer from '../features/users/userSlice';


export const store = configureStore({
    reducer: {
        counter: counterReducer,
        todo: todoReducer,
        users: userReducer,
    },
})