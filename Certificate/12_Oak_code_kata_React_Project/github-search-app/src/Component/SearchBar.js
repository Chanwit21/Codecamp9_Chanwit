import React, { useState } from 'react';

function SearchBar(props) {
  const { searchUsers } = props;
  const [input, setInput] = useState('');

  const handleClickSearch = () => {};

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <button onClick={() => searchUsers(input)}>Search</button>
    </div>
  );
}

export default SearchBar;
