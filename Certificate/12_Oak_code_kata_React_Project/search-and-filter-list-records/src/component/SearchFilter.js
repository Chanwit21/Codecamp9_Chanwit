import React from 'react';
import DATA from '../mocks/data.json';
import { convertStrArrayToArr } from '../services/convertArray';

function SearchFilter({ filter, setFilter }) {
  const DATA_CONVERT = DATA.map(item => {
    const data = { ...item };
    data['Cuisine Style'] = convertStrArrayToArr(data['Cuisine Style']);
    return data;
  });
  const cuisine = DATA_CONVERT.reduce((acc, cur) => {
    for (let item of cur['Cuisine Style']) {
      if (!acc.includes(item)) {
        acc.push(item);
      }
    }
    return acc;
  }, []);

  const cuisineOptions = cuisine.sort().map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));

  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-2 text-end align-self-center">
          <label htmlFor="cuisine" className="text-end">
            Choose a cuisine :
          </label>
        </div>
        <div className="col-4">
          <select
            className="form-select col-3"
            name="cuisine"
            id="cuisine"
            value={filter.cuisine}
            onChange={e =>
              setFilter(current => ({ ...current, cuisine: e.target.value }))
            }
          >
            <option value="">Choose Any</option>
            {cuisineOptions}
          </select>
        </div>
        <div className="col-2 text-end align-self-center">
          <label htmlFor="cuisine" className="text-end">
            Sort by :
          </label>
        </div>
        <div className="col-4">
          <select
            className="form-select col-3"
            name="cuisine"
            id="cuisine"
            value={filter.sort}
            onChange={e =>
              setFilter(current => ({ ...current, sort: e.target.value }))
            }
          >
            <option value="ranking">Ranking</option>
            <option value="asc">Rating: Low to High</option>
            <option value="des">Rating: High to Low</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default SearchFilter;
