import React from 'react';

function Header() {
  return (
    <div className="row justify-content-between align-item-end">
      <h1 className="col-8">TodoList (with api to Mysql)</h1>
      <p className="col-3 d-flex align-items-end justify-content-end">
        {new Date().toLocaleDateString('en-US', {
          day: 'numeric',
          month: 'short',
          weekday: 'short',
          year: 'numeric',
        })}
      </p>
    </div>
  );
}

export default Header;
