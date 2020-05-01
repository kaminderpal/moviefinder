import React from 'react';
import TextField from '@material-ui/core/TextField';

const Search = ({ searchStr, setSearchStr }) => {
  return (
    <form noValidate autoComplete='off'>
      <TextField
        id='standard-search'
        label='Start Search'
        type='search'
        onChange={(e) => setSearchStr(e.target.value)}
        value={searchStr}
        fullWidth={true}
        margin='normal'
      />
    </form>
  );
};

export default Search;
