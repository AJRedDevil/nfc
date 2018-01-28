// npm packages
import React from 'react';

import 'bulma/css/bulma.css';

// our packages
import Home from './scenes/Home';
import sampleData from './components/Table/sampleData.json';

const App = () => <Home {...sampleData} />;

export default App;
