import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Loadable from 'react-loadable';

const Loading = () => <div>Loading...</div>;

const Home = Loadable({
  loader: () => import('./components/Home'),
  loading: Loading,
});

const Counter = Loadable({
  loader: () => import('./components/Counter'),
  loading: Loading,
});

const About = Loadable({
  loader: () => import('./components/About'),
  loading: Loading,
});

const Form = Loadable({
  loader: () => import('./components/Form'),
  loading: Loading,
});

const NotFound = Loadable({
  loader: () => import('./components/NotFound'),
  loading: Loading,
});

const Routes = () => (
  <BrowserRouter>
    <Switch onUpdate={() => window.scrollTo(0, 0)}>
      <Route exact path="/" component={Home} />
      <Route path="/counter" component={Counter}/>
      <Route path="/about" component={About}/>
      <Route path="/form" component={Form}/>
      <Route path="*" component={NotFound}/>
    </Switch>
  </BrowserRouter>
);

export default Routes;
