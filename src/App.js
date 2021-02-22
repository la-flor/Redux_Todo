import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import NewTodoForm from './NewTodoForm';
import Todo from "./Todo";

function App() {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  function addTodo(newTodo) {
    dispatch({ type: "ADD_TODO", todo: newTodo})
  }

  function deleteTodo(id) {
    dispatch({ type: "DELETE_TODO", id})
  }

  return (
    <div className="App">
      <header className="App-header container">
        <NewTodoForm addTodo={addTodo} />
        <div className="App-TodoList">
          <ol>
            {todos.map(todo => (
              <Todo 
                  key={todo.id}
                  id={todo.id}
                  memo={todo.memo}
                  deleteTodo={deleteTodo}
              />
            ))}
          </ol>
        </div>
      </header>
    </div>
  );
}

export default App;
