import { render } from '@testing-library/react';
import React, { Component } from 'react';

import Routes from './routes';

class App extends Component {
  render() {
    return (
      <Routes></Routes>
    );
  }
}

export default App;
