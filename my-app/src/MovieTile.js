import React, { Component } from 'react';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import { Button, Image, Label, ListGroup, ListGroupItem } from 'react-bootstrap';

class MovieTile extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return { movie: nextProps.movie }
  }

  render() {
    let movie = this.state.movie;
    if (movie === undefined) return(<div/>);

    return (
      <Card style={{ flex: 1, display: 'flex', flexDirection: 'row', borderWidth: 5, borderStyle: 'solid' }}>
        <CardMedia
          style={{ width: 200, height: 350, textAlign: 'right' }}
          image={'https://image.tmdb.org/t/p/w1280' + movie.poster_path}
          title="Live from space album cover"
        />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <CardContent style={{ flex: '1 0 auto' }}>
            <Typography variant="headline">{movie.title}</Typography>
            <Typography variant="subheading" color="textSecondary">
              {"Rating: " + movie.vote_average}
            </Typography>
            <Typography variant="subheading" color="textSecondary">
              {"Release: " + movie.release_date}
            </Typography>
          </CardContent>
          <div style={{ flex: '1 0 auto' }}>
            <Button>abc</Button>
            <Button>def</Button>
            <Button>efg</Button>
          </div>
        </div>
      </Card>
    )
  }
}

export default MovieTile;
