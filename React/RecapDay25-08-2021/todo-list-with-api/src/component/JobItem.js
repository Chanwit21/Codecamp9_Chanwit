import React, { useContext, useState } from 'react';
import { ListsContext } from '../context/ListsContext';
import EditJobItemForm from './EditJobItemForm';

function JobItem(props) {
  const {
    list: { id, name, status },
  } = props;
  const context = useContext(ListsContext);
  const { deleteList, toggleListSuccess } = context;
  const [isEdit, setIsEdit] = useState(false);

  return (
    <>
      <div className="col-8 mb-3">
        {isEdit ? (
          <EditJobItemForm setIsEdit={setIsEdit} list={props.list} />
        ) : (
          <div className="input-group">
            <input
              type="text"
              className={`form-control bg-${
                status ? 'success text-white' : 'white'
              } curser-pointer`}
              value={name}
              readOnly
              onClick={() => toggleListSuccess(id)}
            />
            <button
              className="btn btn-outline-primary"
              type="button"
              onClick={() => setIsEdit(true)}
            >
              Edit
            </button>
            <button
              className="btn btn-outline-danger"
              type="button"
              onClick={() => deleteList(id)}
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default JobItem;
