import React, { Component, PropTypes } from 'react';
// import pureRender from 'pure-render-decorator';
// import { connect } from 'react-redux';
import { is, fromJS } from 'immutable';
import { Header, Template } from './Common/Mixin';

/**
 * (导出组件)
 * 
 * @export
 * @class HelpCenter
 * @extends {Component}
 */

import '../style/test';

class HelpCenter extends Component {
    constructor(props) {
        super(props);
    }
    componentWillUpdate(nextProps, nextState) {
        if (this.props !== nextProps) {  //判断props是否更新，将不随状态改变而变化的变量放入此处，防止多次赋值
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState))
    }

    render() {
        return (
            <div>
                <Header title='帮助中心' />
            </div>
        );
    }
}


export default Template({
    id: 'HelpCenter',  //应用关联使用的redux
    component: HelpCenter, //接收数据的组件入口
    url: '/api/appHomePage.do'
});
