import React from "react";
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import Counter from "./view/Counter";
import TodoApp from "./view/TodoApp";
import UserList from "./view/UserList";
import Github from "./view/Github";

function App() {
  return (
    
        <BrowserRouter>

        <nav>
          <ul>
            <li><Link to="/counter">Counter</Link></li>
            <li><Link to="/todo">TodoApp</Link></li>
            <li><Link to="/userlist">UserList</Link></li>
            <li><Link to="/github">github</Link></li>
            </ul>
        </nav>
        
           <Routes>
             <Route path="/counter" element={<Counter />} />
             <Route path="/todo" element={<TodoApp />} />
             <Route path="/userlist" element={<UserList />} />
             <Route path="/github" element={<Github />} />
           </Routes>
        </BrowserRouter>
    
  );
}

export default App;
