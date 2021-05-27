import { useSelector, useDispatch } from 'react-redux';
import { addTodo } from './store/action-creators/todo';
import { RootState } from './store/store';

import './App.css';

function App() {
    const dispatch = useDispatch();
    const todos = useSelector((state: RootState) => state.todos);

    const handleAddTodo = () => {
        const todoObj = {
            id: 1,
            text: 'John'
        };
        dispatch(addTodo(todoObj));
    };
    return (
        <div className="App">
            Hello There
            <button onClick={handleAddTodo}>Add Todo</button>
            {Array.isArray(todos.list) && todos.list.map((item, index) => <li key={index}>{item.text}</li>)}
        </div>
    );
}

export default App;
