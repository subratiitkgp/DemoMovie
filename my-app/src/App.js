import React, { Component } from 'react';
import './App.css';
import MovieTile from './MovieTile';
import { Button, ListGroup, ListGroupItem } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {movies: []};
    this.handlePreviousClick = this.handlePreviousClick.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
    this.pageCount = 1;
    this.totalPages = 1;

    this.fetchMovies();
  }

  handlePreviousClick() {
    if (this.pageCount === 1) {
      return;
    }

    if (this.pageCount < 1) {
      this.pageCount = 1;
      this.fetchMovies();
      return;
    }

    this.pageCount = this.pageCount - 1;
    this.fetchMovies();
  }

  handleNextClick() {
    if (this.pageCount === this.totalPages) {
      return;
    }

    if (this.pageCount > this.totalPages) {
      this.pageCount = this.totalPages;
      this.fetchMovies();
      return;
    }

    this.pageCount = this.pageCount + 1;
    this.fetchMovies();
  }

  fetchMovies() {
    fetch("https://api.themoviedb.org/4/list/1?page=" + this.pageCount + "&api_key=920491e2b5c27c74377d82829dad86b3")
      .then((response) => response.json())
      .then((responseJson) => {
        this.totalPages = responseJson.total_pages;
        this.setState({movies: responseJson.results});
      });
  }

  render() {
    let movies = this.state.movies;
    console.log(movies);

    return(
      <div style={{ textAlign: 'center', borderWidth: 2, borderStyle: 'solid' }}>
        <div>
        <Button style={{ margin: 5 }}
                bsStyle="primary"
                bsSize="large"
                onClick={this.handlePreviousClick}
        >
          Previous
        </Button>
        <Button style={{ margin: 5 }}
                bsStyle="primary"
                bsSize="large"
                onClick={this.handleNextClick}
        >
          Next
        </Button>

        </div>
        <div style={{ overflowY: 'scroll' }}>
        <ListGroup>
        {
          movies.filter(movie => movie.adult === false)
                .map( movie => { return <ListGroupItem key={movie.id}><MovieTile movie={movie} /></ListGroupItem> })
        }
        </ListGroup>
        </div>
      </div>
    )
  }
}

export default App;
