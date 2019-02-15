import React from 'react';
import { Switch, Route } from 'react-router';
import routes from './constants/routes';
import App from './containers/App';
import HomePage from './containers/home-page';
import CounterPage from './containers/counter-page';
import MoviesPage from './containers/movies-page';
import TvShowsPage from './containers/tv-shows-page';

export default () => (
  <App>
    <Switch>
      <Route path={routes.COUNTER}  component={CounterPage} />
      <Route path={routes.TVSHOWS}  component={TvShowsPage} />
      <Route path={routes.MOVIES}   component={MoviesPage}  />
      <Route path={routes.HOME}     component={HomePage}    />
    </Switch>
  </App>
);
