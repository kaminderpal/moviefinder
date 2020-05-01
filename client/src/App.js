import React, { useState, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import Search from './Components/Search';
import Movies from './Components/Movies/index';
import useDebounce from './Components/Utils/useDebounce';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  loader: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginLeft: '-25px',
    marginTop: '-25px',
  },
});

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [searchStr, setSearchStr] = useState('');
  const debounceSearchStr = useDebounce(searchStr, 500);
  const classes = useStyles();
  useEffect(() => {
    if (debounceSearchStr) {
      const postData = async (searchStr) => {
        try {
          setIsLoading(true);
          setIsError(false);
          const response = await fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=9e27d0b0e229009770cfb98563bf109c&language=en-US&query=${debounceSearchStr}&include_adult=false`
          );
          const movies = await response.json();
          setIsLoading(false);
          if (movies.results.length) {
            setMovies(movies.results);
          } else {
            setIsError(true);
          }
        } catch (err) {
          setIsError(true);
        }
      };
      postData();
    }
  }, [debounceSearchStr]);
  useEffect(() => {
    if (isLoading || isError) {
      setMovies([]);
    }
  }, [isLoading, isError]);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth='lg'>
        <Typography variant='h3' component='h3' gutterBottom align='center'>
          Movie Finder
        </Typography>
        <Search searchStr={searchStr} setSearchStr={setSearchStr}></Search>
        {isLoading && (
          <div className={classes.loader}>
            <CircularProgress size={60} />
          </div>
        )}
        {!isLoading && !!movies.length && <Movies data={movies} />}
        {isError && <div>No movies found!</div>}
      </Container>
    </React.Fragment>
  );
}

export default App;
