import React, { Component, PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import { is, fromJS } from 'immutable';
import Template from './Template';

export { Template }

/**
 * 公共头部
 *
 * @export
 * @class Header
 * @extends {Component}
 */


export class Header extends Component {  //头部标题
    constructor(props, context) {
        super(props, context);
        this.state = {}
    }

    shouldComponentUpdate(nextProps, nextState) {
        return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState))
    }

    render() {
        return (
            <header className="head-list" style={this.state.indexNavStyle}>
                <div className="top-nav">
                    <a className="link" href="javascript:history.go(-1)">fdssdfsfsdafsd</a><h1>{this.state.title}</h1>
                </div>
            </header>
        );
    }
}


