import React from 'react';

function Header() {
  return (
    <>
      <div className="bg-light shadow-sm p-4 mb-4 rounded mt-3">
        <h1>Github Search App</h1>
        <h2>Search users in GitHub using this simple React application.</h2>
        <p>
          Click on the card to see more detail about individual user. The search
          default is Chantit21 (me!)
        </p>
      </div>
    </>
  );
}

export default Header;
