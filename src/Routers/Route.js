import React, {Component, PropTypes} from 'react';
import { Router, Route, Redirect, IndexRoute, browserHistory, hashHistory } from 'react-router';

import Index from '../Components/Index'; //首页

class Roots extends Component {
    render() {
        return (
            <div>{this.props.children}</div>
        );
    }
}

const history = process.env.NODE_ENV !== 'production' ? browserHistory : hashHistory;


const HelpCenter = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../Components/HelpCenter').default)
    },'HelpCenter')
}

const RouteConfig = (
    <Router history={history}>
        <Route path="/" component={Roots}>
            <IndexRoute component={Index} />//首页
            <Route path="Index" component={Index} />
            <Route path="HelpCenter" getComponent={HelpCenter} />//帮助中心
            <Redirect from='*' to='/'  />
        </Route>
    </Router>
);

export default RouteConfig;