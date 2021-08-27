import { useEffect, useState } from 'react';
import './App.css';
import Header from './Component/Header';
import SearchBar from './Component/SearchBar';
import Solutions from './Component/solutions/Solutions';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);
  const API = 'https://api.github.com/';

  const searchUsers = async username => {
    try {
      let url = `${API}search/users?q=${username}`;
      const res = await axios.get(url);
      console.log(res.data.items);
      setData(res.data.items);
    } catch (err) {
      console.log(err);
    }
  };

  // const searchUsers = async username => {
  //   let url = `${API}search/users?q=${username}`;
  //   fetch(url)
  //     .then(res => res.json())
  //     .then(data => console.log(data))
  //     .catch(err => console.log(err));
  // };

  useEffect(() => {
    searchUsers('chanwit21');
  }, []);

  return (
    <div className="container">
      <Header />
      <SearchBar searchUsers={searchUsers} setData={setData} />
      <Solutions data={data} />
    </div>
  );
}

export default App;
