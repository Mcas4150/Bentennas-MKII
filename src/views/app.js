import React from 'react';
import { Route, Link } from 'react-router-dom';
import MixesPage from './pages/mixes-page'

const App = () => (
  <div>
    <header/>

    <main>
      <Route exact path="/" component={MixesPage} />
     
    </main>

    <footer />
  </div>
);

export default App;
