import { useState, useEffect } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

import './App.css';

const App = () => {
  const [searchMonster, setSearchMonster] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filtredMonsters, setFiltredMonsters] = useState(monsters);

  const fetchingMonsters = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setMonsters([...data]));
  };

  const filterMonsters = () => {
    const newFiltredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchMonster.toLowerCase())
    );

    setFiltredMonsters(newFiltredMonsters);
  };

  const onSearchChangeHandler = (e) => setSearchMonster(e.target.value);

  useEffect(fetchingMonsters, []);
  useEffect(filterMonsters, [searchMonster, monsters]);

  return (
    <div className="app">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        placeholder="search monsters"
        value={searchMonster}
        onSearchChangeHandler={onSearchChangeHandler}
      />
      <CardList monsters={filtredMonsters} />
    </div>
  );
};

export default App;
