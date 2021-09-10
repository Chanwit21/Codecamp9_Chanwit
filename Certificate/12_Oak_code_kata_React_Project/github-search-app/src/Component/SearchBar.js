import React, { useState } from 'react';

function SearchBar(props) {
  const { searchUsers, setData } = props;
  const [input, setInput] = useState('');

  const handleSubmitForm = e => {
    e.preventDefault();
    if (input) {
      searchUsers(input);
    } else {
      setData([]);
    }
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Type username here"
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <button className="btn btn-warning" type="submit" id="button-addon2">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchBar;
