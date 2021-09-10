import React, { useContext } from 'react';
import { ListsContext } from '../context/ListsContext';
import JobItem from './JobItem';

function Lists() {
  const context = useContext(ListsContext);
  const { lists } = context;

  const jobItems = lists.map(item => {
    return <JobItem key={item.id} list={item} />;
  });

  return <div className="row justify-content-center m-auto">{jobItems}</div>;
}

export default Lists;
