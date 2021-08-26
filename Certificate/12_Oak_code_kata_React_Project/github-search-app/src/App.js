import { useEffect } from 'react';
import './App.css';
import Header from './Component/Header';
import SearchBar from './Component/SearchBar';
import Solutions from './Component/Solutions';
import axios from 'axios';

function App() {
  const API = 'https://api.github.com/';

  const searchUsers = async username => {
    try {
      let url = `${API}search/users?q=${username}`;
      const res = await axios.get(url);
      console.log(res);
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
    <div>
      <Header />
      <SearchBar searchUsers={searchUsers} />
      <Solutions />
    </div>
  );
}

export default App;
