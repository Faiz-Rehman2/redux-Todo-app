import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, editTodo } from './components/config/redux/todoSlice';

const App = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const todoVal = useRef();

  const handleAddTodo = (event) => {
    event.preventDefault();
    dispatch(addTodo(todoVal.current.value));
    todoVal.current.value = '';
  };

  const handleDeleteTodo = (index) => {
    dispatch(deleteTodo(index));
  };

  const handleEditTodo = (index) => {
    const editedVal = prompt('Enter value');
    dispatch(editTodo({ index, newValue: editedVal }));
  };

  return (
    <>
      <h1>Todo App</h1>
      <form onSubmit={handleAddTodo}>
        <input type="text" placeholder="Enter todos" ref={todoVal} />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {todos.map((item, index) => (
          <div key={index}>
            <li>{item}</li>
            <button onClick={() => handleDeleteTodo(index)}>Delete</button>
            <button onClick={() => handleEditTodo(index)}>Edit</button>
          </div>
        ))}
      </ul>
    </>
  );
};

export default App;
