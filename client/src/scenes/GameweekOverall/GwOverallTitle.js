// npm packages
import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';

const h2Style = {
  display: 'inline-block',
  float: 'left',
};
const inputStyle = {
  display: 'flex !important',
  width: '75%',
  float: 'right',
};

const getOptions = standings =>
  standings.map(player => ({
    value: player[2],
    label: player[2],
  }));

const GwOverallTitle = ({
  gameweek,
  standings,
  selectedOptions,
  handleChange,
}) => (
  <div>
    <h2 style={h2Style} className="subtitle">
      Gameweek : <strong>{gameweek}</strong>
    </h2>
    <div style={inputStyle}>
      <Select
        isMulti
        value={selectedOptions}
        onChange={handleChange}
        options={getOptions(standings)}
        className="basic-multi-select"
        classNamePrefix="select"
      />
    </div>
  </div>
);
GwOverallTitle.propTypes = {
  gameweek: PropTypes.number.isRequired,
  standings: PropTypes.arrayOf(PropTypes.array),
  selectedOptions: PropTypes.arrayOf(PropTypes.object),
  handleChange: PropTypes.func.isRequired,
};

export default GwOverallTitle;
