import React, { Component } from 'react';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

export class MovieTile extends Component {
  render() {
    let movie = this.props.movie;
    if (movie === undefined) return(<div/>);

    return (
      <Card style={{ flex: 1, display: 'flex', flexDirection: 'row', borderWidth: 2, borderStyle: 'solid' }}>
        <CardMedia
          style={{ width: 150, height: 260, textAlign: 'right' }}
          image={'https://image.tmdb.org/t/p/w1280' + movie.poster_path}
          title="Live from space album cover"
        />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
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
