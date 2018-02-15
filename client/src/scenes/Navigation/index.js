// npm packages
import React from 'react';

// our packages
import LinkTab from '../../components/LinkTab';

const NAVIGATION_LINKS = [
  {path: '', text: 'Dashboard'},
  {path: 'classicleague', text: 'Classic League'},
  {path: 'h2hleague', text: 'H2H League'},
];

const Navigation = () => (
  <div className="tabs">
    <ul>
      {NAVIGATION_LINKS.map(link => <LinkTab key={link.text} link={link} />)}
    </ul>
  </div>
);

export default Navigation;
