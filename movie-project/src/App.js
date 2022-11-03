import React, { Component } from 'react';
import './App.css';

import Data from './data';

import Header from './header/header';
import MovieList from './movie-list/movie-list';

class App extends Component {
  state = {
    movieData: Data,
    headerMessage: 'Movie App'
  };

  render() {
    return (
      <div>
        <Header headerMessage={this.state.headerMessage} />
        <MovieList movieData={this.state.movieData} />
      </div>
    );
  }
}

export default App;