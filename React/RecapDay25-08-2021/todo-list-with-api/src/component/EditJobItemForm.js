import React, { useContext, useState } from 'react';
import { ListsContext } from '../context/ListsContext';

function EditJobItemForm(props) {
  const {
    list: { id, name },
    setIsEdit,
  } = props;

  const context = useContext(ListsContext);
  const { updateTodoList } = context;

  const [editList, setEditList] = useState(name);

  const handleSubmitForm = (id, newList) => {
    setIsEdit(false);
    updateTodoList(id, newList);
  };

  const handleClickCancel = () => {
    setIsEdit(false);
  };

  return (
    <form
      onSubmit={() => handleSubmitForm(id, { ...props.list, name: editList })}
    >
      <div className="input-group">
        <input
          type="text"
          className="form-control bg-white"
          value={editList}
          onChange={e => setEditList(e.target.value)}
        />
        <button type="submit" className="btn btn-success">
          Save
        </button>
        <button
          className="btn btn-danger"
          type="button"
          onClick={handleClickCancel}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export default EditJobItemForm;
