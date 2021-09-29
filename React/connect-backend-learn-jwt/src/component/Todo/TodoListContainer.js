import React, { useState } from 'react';
import AddTodoForm from './AddTodoForm';
import ListContainer from './ListContainer';
import { LISTS } from '../../mocks/lists';
import { TodoListContext } from '../../context/TodoListContext';

function TodoListContainer() {
  const [lists, setLists] = useState(LISTS);

  const createTodo = (todo) => {
    setLists((current) => [...current, todo]);
  };

  const updateTodo = (id, todo) => {
    const newLists = [...lists];
    const idx = newLists.findIndex((item) => item.id === id);
    newLists[idx] = todo;
    setLists(newLists);
  };

  const deleteTodo = (id) => {
    const newLists = lists.filter((list) => list.id !== id);
    setLists(newLists);
  };

  return (
    <TodoListContext.Provider value={{ deleteTodo, updateTodo }}>
      <div className='container bg-light shadow p-4 mt-5' style={{ maxWidth: '50%' }}>
        <div className='d-flex justify-content-between mb-3'>
          <h1>Todo List</h1>
          <button className='btn btn-danger' type='button'>
            Logout
          </button>
        </div>
        <AddTodoForm createTodo={createTodo} />
        <ListContainer lists={lists} />
      </div>
    </TodoListContext.Provider>
  );
}

export default TodoListContainer;
