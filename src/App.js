import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { Search } from './components/search-box/search.box.component';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      'monsters': [],
      'searchFiled': ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ searchFiled: e.target.value });
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }
  render() {
    // const { monsters, searchFiled } = this.state;
    const monsters = this.state.monsters;
    const searchFiled = this.state.searchFiled;
    const filterMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchFiled.toLowerCase()));
    return (
      <div className="App">
           <h1>Monsters Rolodex</h1>
        <Search placeholder='search monsters' handleChange={this.handleChange} />
        <CardList monsters={filterMonsters}></CardList>

      </div>
    )
  }
}

export default App;
