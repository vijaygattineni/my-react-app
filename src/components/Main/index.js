import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Series from '../../containers/series';
import About from '../About';

const Main = (props) => (
    <Switch>
        <Route exact path="/series" component={Series} />
        <Route exact path="/about" component= {About} />
        <Route exact path="/" component= {About} />
    </Switch>
);

export default Main;