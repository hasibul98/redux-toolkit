import {createSlice} from '@reduxjs/toolkit';


const loadTodos = () => {
    const saved = localStorage.getItem('todos');
    return saved ? JSON.parse(saved).filter(Boolean) : [] ;

}

const saveTodos = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos));
}


const todoSlice = createSlice({
    name: "todo",
    initialState: {
        todos: loadTodos(),
    },
    reducers: {
        addTodo: (state, action) => {
            state.todos.push({
                id: Date.now(),
                text: action.payload,
                completed: false,
            });
            saveTodos(state.todos);
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((t) => t.id !== action.payload);
            saveTodos(state.todos);
        },
        toggleComplete: (state, action) => {
            state.todos = state.todos.map((t) =>
                 t.id === action.payload ? {...t, completed: !t.completed} : t
        ); 
            saveTodos(state.todos);
        },
        
    },

});

export const { addTodo, deleteTodo, toggleComplete } = todoSlice.actions;
export default todoSlice.reducer;