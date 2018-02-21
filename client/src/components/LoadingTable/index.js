// npm packages
import React from 'react';
import {string} from 'prop-types';
import Loader from 'react-loader-spinner';

const LoadingTable = ({title = ''}) => (
  <nav className="level">
    <div className="level-item has-text-centered">
      <Loader type="Ball-Triangle" color="#00BFFF" height="50" width="50" />
      <h3>Loading... {title}</h3>
    </div>
  </nav>
);
LoadingTable.propTypes = {
  title: string,
};

export default LoadingTable;
