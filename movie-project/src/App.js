import React, { Component } from 'react';
import './App.css';

import data from './data.json';

import Header from './header/header';
import MovieList from './movie-list/movie-list';

class App extends Component {
  state = {
    movieData: data.data,
    headerMessage: 'Movie App'
  };

  render() {
    // console.log(this.state)
    return (
      <div>
        <Header headerMessage={this.state.headerMessage} />
        <MovieList movieData={this.state.movieData} />
      </div>
    );
  }
}

export default App;