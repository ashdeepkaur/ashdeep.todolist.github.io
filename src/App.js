import { useState } from 'react';
import './styles.css';
console.log()
function App() {
  const [newItem, setNewItem] = useState('');
  const [todos, setTodos] = useState([]);

  const handleOnChange = (e) => {
    setNewItem(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        {
          id: crypto.randomUUID(),
          title: newItem,
          completed: false,
        },
      ];
    });
    setNewItem('');
    // setTodos([...todos], {
    //   id: crypto.randomUUID(),
    //   title: newItem,
    //   completed: false,
    // });
    // setTodos([...todos], {
    //   id: crypto.randomUUID(),
    //   title: newItem,
    //   completed: false,
    // });
  };

  const handleTodoStatus = (todoId) => {
    setTodos((prevTodos) => {
      const todos = prevTodos.map((todo) => {
        if (todo.id === todoId) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        } else return todo;
      });
      return todos;
    });
  };

  const handleTodoItemDelete = (todoId) => {
    const updatedTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(updatedTodos);
  };

  return (
    <>
      <form className='new-item-form' onSubmit={handleSubmit}>
        <div className='form-row'>
          <label htmlFor='item'>New Item</label>
          <input
            type='text'
            id='item'
            value={newItem}
            onChange={handleOnChange}
          ></input>
        </div>
        <button className='btn'>Add</button>
      </form>
      <h1 className='header'>Todo List</h1>
      <ul className='list'>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <label>
                <input
                  type='checkbox'
                  checked={todo.completed}
                  onChange={() => handleTodoStatus(todo.id)}
                ></input>
                {todo.title}
              </label>
              <button
                className='btn btn-danger'
                onClick={() => handleTodoItemDelete(todo.id)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
