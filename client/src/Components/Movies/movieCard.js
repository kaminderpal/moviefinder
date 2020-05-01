import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 'calc(24% - 1rem)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: '1 0 250px',
    margin: '1rem',
    [theme.breakpoints.down('sm')]: {
      maxWidth: 'calc(100% - 1rem)',
    },
  },
  media: {
    height: 140,
  },
}));

const MovieCard = ({ original_title, overview, poster_path }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={`http://image.tmdb.org/t/p/w185/${poster_path}`}
          title={original_title}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {original_title}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            {overview}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
export default MovieCard;
