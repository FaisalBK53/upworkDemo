import { React } from 'react';

import './SearchHomePage.css';
import { SearchFieldContainer } from '../../containers';

export const SearchHomePage = () => {
  return (
    <>
      <h1 className="header"> GitHub Users </h1>
      <SearchFieldContainer />
    </>
  );
};
