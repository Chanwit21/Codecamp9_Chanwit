import React from 'react';
import ListCard from './ListCard';
import {
  sortByRanking,
  sortByRatingASC,
  sortByRatingDES,
} from '../services/sort';

function ListContainer({ data, filter }) {
  const listsFilter = data
    .sort(
      filter.sort === 'ranking'
        ? sortByRanking
        : filter.sort === 'asc'
        ? sortByRatingASC
        : sortByRatingDES
    )
    .filter(list => {
      if (filter.cuisine) {
        return list['Cuisine Style'].includes(filter.cuisine);
      } else {
        return true;
      }
    });

  const lists = listsFilter.map(list => {
    return <ListCard key={list.id} list={list} />;
  });
  return (
    <div className="d-flex flex-wrap justify-content-evenly mt-4">{lists}</div>
  );
}

export default ListContainer;
