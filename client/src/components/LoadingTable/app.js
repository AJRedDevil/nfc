// npm packages
import React from 'react';
import {string} from 'prop-types';

const LoadingTable = ({title = ''}) => (
  <nav className="level">
    <div className="level-item has-text-centered">
      <h3>Loading... {title}</h3>
    </div>
  </nav>
);
LoadingTable.propTypes = {
  title: string,
};

export default LoadingTable;
