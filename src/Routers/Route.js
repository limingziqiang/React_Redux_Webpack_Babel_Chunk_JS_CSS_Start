import React, { Component, PropTypes } from 'react';
import { Router, Route, Redirect, IndexRoute, browserHistory, hashHistory } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Index from '../Components/Index'; //首页

class Roots extends Component {
    render() {
        return (
            <ReactCSSTransitionGroup
                component="div"
                transitionName="route"
                className="route-wrapper"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={500}
                >
                {React.cloneElement(this.props.children, {
                    key: location.pathname
                })}
            </ReactCSSTransitionGroup>
        );
    }
}

const history = process.env.NODE_ENV !== 'production' ? browserHistory : hashHistory;


const HelpCenter = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../Components/HelpCenter').default)
    }, 'HelpCenter')
}

const RouteConfig = (
    <Router history={history}>
        <Route path="/" component={Roots}>
            <IndexRoute component={Index} />//首页
            <Route path="Index" component={Index} />
            <Route path="HelpCenter" getComponent={HelpCenter} />//帮助中心
            <Redirect from='*' to='/' />
        </Route>
    </Router>
);

export default RouteConfig;