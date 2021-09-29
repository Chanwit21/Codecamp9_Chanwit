import React, { useState } from 'react';

function AddTodoForm(props) {
  const { createTodo } = props;
  const [input, setInput] = useState('');
  const [error, setError] = useState('');

  const handleChangeInput = (e) => {
    setInput(e.target.value);
    setError('');
  };

  const handleSubmitform = (e) => {
    e.preventDefault();
    if (!input || !input.trim()) {
      setError('Input must not empty');
    } else {
      createTodo({
        title: input,
        status: false,
      });
      setInput('');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmitform}>
        <div className='input-group mb-3'>
          <input
            type='text'
            className={`form-control${error ? ' is-invalid' : ''}`}
            placeholder='Add Todo List'
            value={input}
            onChange={handleChangeInput}
          />
          <button className='btn btn-success'>Add</button>
          <div className={`${error ? 'invalid-feedback' : ''}`}>{error}</div>
        </div>
      </form>
    </>
  );
}

export default AddTodoForm;
