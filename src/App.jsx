import React from "react";
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import Counter from "./view/Counter";
import TodoApp from "./view/TodoApp";

function App() {
  return (
    
        <BrowserRouter>

        <nav>
          <ul>
            <li><Link to="/counter">Counter</Link></li>
            <li><Link to="/todo">TodoApp</Link></li>
            </ul>
        </nav>
        
           <Routes>
             <Route path="/counter" element={<Counter />} />
             <Route path="/todo" element={<TodoApp />} />
           </Routes>
        </BrowserRouter>
    
  );
}

export default App;
