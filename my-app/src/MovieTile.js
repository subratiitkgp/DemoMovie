import React, { Component } from 'react';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import { Button, DropdownButton, MenuItem } from 'react-bootstrap';

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
      <Card style={{ flex: 1, display: 'flex', flexDirection: 'row', borderWidth: 2, borderStyle: 'solid' }}>
        <CardMedia
          style={{ width: 150, height: 260, textAlign: 'right' }}
          image={'https://image.tmdb.org/t/p/w1280' + movie.poster_path}
          title="Live from space album cover"
        />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <CardContent>
            <Typography variant="headline">{movie.title}</Typography>
            <Typography variant="subheading" color="textSecondary">
              {"Rating: " + movie.vote_average}
            </Typography>
            <Typography variant="subheading" color="textSecondary">
              {"Release: " + movie.release_date}
            </Typography>
          </CardContent>
        </div>
      </Card>
    )
  }
}

export default MovieTile;

/*
          <div style={{margin: 5}}>
            <Button style={{margin: 2}}>abc</Button>
            <Button style={{margin: 2}}>def</Button>
            <Button style={{margin: 2}}>efg</Button>
          </div>
          <div style={{margin: 5}}>
            <DropdownButton title={"Default"}>
              <MenuItem>A</MenuItem>
              <MenuItem>B</MenuItem>
            </DropdownButton>
          </div>
*/
