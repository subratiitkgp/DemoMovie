import React, { Component } from 'react';
import './App.css';
import MovieTile from './MovieTile';
import { Button, ListGroup, ListGroupItem } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    }

    this.fetchMovies();
  }

  fetchMovies() {
    fetch("https://api.themoviedb.org/4/list/1?api_key=920491e2b5c27c74377d82829dad86b3")
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({movies: responseJson.results});
    });
  }

  render() {
    let movies = this.state.movies;
    return(
      <div className="App">
        <Button bsStyle="primary" bsSize="large">Default</Button>
        <ListGroup>
        {
          movies.filter(movie => movie.adult === false)
                .map( movie => { return <ListGroupItem key={movie.id}><MovieTile movie={movie} /></ListGroupItem> })
        }
        </ListGroup>
      </div>
    )
  }
}

export default App;
