import React from 'react';
import List from './List';

function ListContainer(props) {
  const { lists } = props;

  const showLists = lists.map((list) => {
    return <List key={list.id} list={list} />;
  });

  return <>{showLists}</>;
}

export default ListContainer;
