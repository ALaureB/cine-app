import React, { Component } from 'react';
import './App.css';
import SearchBar from '../../components/Search Bar/search-bar';

interface IAppState {
  currentMovie: any;
  movieList: any;
}

class App extends Component<{}, IAppState> {
  render() {
    return (
      <div className="cine-app">
        <h2>Cine App</h2>
        <SearchBar />
      </div>
    );
  }
}

export default App;
