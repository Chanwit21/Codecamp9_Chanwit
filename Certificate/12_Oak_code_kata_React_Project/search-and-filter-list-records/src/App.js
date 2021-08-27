import './App.css';
import SearchFilter from './component/SearchFilter';
import ListContainer from './component/ListContainer';
import { useEffect, useState } from 'react';
import DATA from './mocks/data.json';
import { convertStrArrayToArr } from './services/convertArray';

const DATA_CONVERT = DATA.map(item => {
  const data = { ...item };
  data['Cuisine Style'] = convertStrArrayToArr(data['Cuisine Style']);
  return data;
});

function App() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState({
    cuisine: '',
    sort: 'raking',
  });

  useEffect(() => {
    setData(DATA_CONVERT);
  }, []);

  return (
    <>
      <SearchFilter filter={filter} setFilter={setFilter} />
      <ListContainer data={data} filter={filter} />
    </>
  );
}

export default App;
