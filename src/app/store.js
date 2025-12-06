import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import todoReducer from '../features/todo/todoSlice';
import userReducer from '../features/users/userSlice';
import githubReducer from '../features/github/githubSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        todo: todoReducer,
        users: userReducer,
        github: githubReducer,
    },
})