import React from 'react';
import { Route, Link } from 'react-router-dom';
import MixesPage from './pages/mixes-page/index.js';
import VideosPage from './pages/videos-page/index.js';
import EventsPage from './pages/events-page/index.js';
import AboutPage from './pages/about-page/index.js';
import ReactPlayer from 'react-player';
import AppHeader from './components/app-header';

const App = () => (
  <div>
    <header>
      <AppHeader/>
    </header>
    <main>
      <Route exact path="/" component={MixesPage} />
      <Route exact path="/videos" component={VideosPage} />
      <Route exact path="/events" component={EventsPage} />
      <Route exact path="/about" component={AboutPage} />
    </main>
    <footer>
      <ReactPlayer
              url="https://www.mixcloud.com/NTSRadio/shamos-11th-april-2018/"
              width="100%"
              height="60px"
              controls="true"
          />
    </footer>
  </div>
);

export default App;
