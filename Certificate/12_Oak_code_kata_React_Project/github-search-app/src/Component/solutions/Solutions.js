import React from 'react';
import UserCard from './UserCard';

function Solutions({ data }) {
  const solutions = data.map(user => {
    return <UserCard key={user.id} user={user} />;
  });
  return <>{solutions}</>;
}

export default Solutions;
