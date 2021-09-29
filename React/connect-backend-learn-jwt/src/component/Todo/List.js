import React, { useState } from 'react';
import { useContext } from 'react/cjs/react.development';
import { TodoListContext } from '../../context/TodoListContext';

function List(props) {
  const { list } = props;
  const { deleteTodo, updateTodo } = useContext(TodoListContext);
  const [isEdit, setIsEdit] = useState(false);
  const [input, setInput] = useState(list.title);

  const toggleStatus = (id) => {
    const newList = { ...list, status: !list.status };
    updateTodo(id, newList);
  };

  const handleClickDelete = (id) => {
    deleteTodo(id);
  };

  const handleClickSave = (id) => {
    const newList = { ...list, title: input };
    updateTodo(list.id, newList);
    setIsEdit(false);
  };

  return (
    <>
      <div className='input-group mb-2'>
        <input
          type='text'
          className={`form-control${list.status && !isEdit ? ' bg-success text-white' : ''}`}
          readOnly={!isEdit}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        {isEdit ? (
          <button className='btn btn-success' type='button' onClick={handleClickSave}>
            Save
          </button>
        ) : (
          <>
            <button className='btn btn-warning' type='button' onClick={() => toggleStatus(list.id)}>
              Toggle status
            </button>
            <button className='btn btn-info' type='button' onClick={() => setIsEdit(true)}>
              Edit
            </button>
          </>
        )}
        <button className='btn btn-danger' type='button' onClick={() => handleClickDelete(list.id)}>
          Delete
        </button>
      </div>
    </>
  );
}

export default List;
