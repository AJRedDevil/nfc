import React from 'react';
import {string} from 'prop-types';

const TableHeader = ({title, subTitle}) => (
  <section className="hero is-small is-info is-bold">
    <div className="hero-body">
      <div className="container">
        <h1 className="title">{title}</h1>
        <h2 className="subtitle">{subTitle}</h2>
      </div>
    </div>
  </section>
);
TableHeader.propTypes = {
  title: string.isRequired,
  subTitle: string,
};

export default TableHeader;
