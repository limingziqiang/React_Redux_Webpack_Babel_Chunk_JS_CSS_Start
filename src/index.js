import React, { Component, PropTypes } from 'react';
import ReactDOM, { render } from 'react-dom';
import { Provider } from 'react-redux';

import Route from './Routers/Route'; //路由配置
import Store from './Redux/Store/Store';
import './Config/Config';//引入默认配置

Store.subscribe(() => {
    localStorage.setItem('todos', JSON.stringify(Store.getState()));
});


render(
    <Provider store={Store}>
        {Route}
    </Provider>,
    document.body.appendChild(document.createElement('div'))
);