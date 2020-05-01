import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MovieCard from './movieCard';

const useStyles = makeStyles({
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    marginLeft: '-1rem',
    marginRight: '-1rem',
  },
});
const Movies = ({ data = [] }) => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      {data.map((item, index) => {
        return (
          <MovieCard {...item} key={index.toString()} />
        );
      })}
    </div>
  );
};

export default Movies;
