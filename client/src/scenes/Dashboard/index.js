// npm packages
import React from 'react';

// our packages
import ClassicWinners from './components/ClassicWinners';
import H2HWinners from './components/H2HWinners';

const Dashboard = () => (
  <div>
    <ClassicWinners />
    <H2HWinners />
  </div>
);

export default Dashboard;
