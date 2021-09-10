import React, { useContext, useState } from 'react';
import { ListsContext } from '../context/ListsContext';

function AddFrom(props) {
  const { addList } = props;
  const context = useContext(ListsContext);
  const { undoTodoList } = context;
  const [input, setInput] = useState('');

  const handleSubmitForm = e => {
    e.preventDefault();
    addList(input);
    setInput('');
  };

  return (
    <>
      <form onSubmit={handleSubmitForm}>
        <div className="input-group my-4 border-bottom pb-4 w-75 m-auto">
          <input
            className="form-control"
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
          />
          <button type="submit" className="btn btn-success">
            Add
          </button>
          <button
            type="button"
            className="btn btn-warning"
            onClick={() => undoTodoList()}
          >
            Undo
          </button>
        </div>
      </form>
    </>
  );
}

export default AddFrom;
