import {useDispatch, useSelector} from "react-redux";
import {addTodo, deleteTodo, toggleComplete} from '../features/todo/todoSlice';
import {useState} from 'react';


function TodoApp() {
    const [task, setTask] = useState('');
    const todos = useSelector((state) => state.todo.todos);
    const dispatch = useDispatch();

    const handleAdd = () => {
        if(task.trim() === "") return;
        dispatch(addTodo(task));
        setTask(""); 
    }

        return(

            <div style={{ width: "400px", margin: "50px auto", textAlign: "center" }} >
                <h2>Redux Toolkit To-Do</h2>

                <input 
                value={task}
                type="text"
                placeholder="Enter task"
                onChange={(e) => setTask(e.target.value)}
                style={{
                    padding: "10px",
                    width: "250px",
                    marginRight: "10px",
                  }}
                 />

                 <button onClick={handleAdd}>Add</button>

                 <ul style={{ marginTop: "20px", padding: 0 }}>
                    {
                        todos.map((todo) => (
                            <li
                            key={todo.id}
                            style={{
                                listStyle: "none",
                                marginBottom: "10px",
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                background: "#f0f0f0",
                                padding: "10px",
                                borderRadius: "5px",
                              }}
                            >
                                <span
                                onClick={() => dispatch(toggleComplete(todo.id))}
                                style={{
                                    cursor: 'pointer',
                                    textDecoration: todo.completed ? "line-through" : "none",
                                }}
                                >
                                    {todo.text}

                                </span>
                                <button onClick={()=> dispatch(deleteTodo(todo.id))}
                                    style={{ marginLeft: "10px", color: "red" }}
                                    >
                                        X</button>

                            </li>
                        ))
                    }

                 </ul>
            
            </div>
        )
}

export default TodoApp;