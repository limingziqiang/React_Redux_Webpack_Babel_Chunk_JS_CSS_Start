import React, { Component, PropTypes } from 'react';
// import pureRender from 'pure-render-decorator';
import { History, Link } from 'react-router';
// import { connect } from 'react-redux';
import { is, fromJS } from 'immutable';

import { Header, Template } from './Common/Mixin';

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    // 在完成首次渲染之前调用，此时仍可以修改组件的state。
    componentWillMount() {

    }
    // 真实的DOM被渲染出来后调用，在该方法中可通过this.getDOMNode()
    // 访问到真实的DOM元素。此时已可以使用其他类库来操作这个DOM。
    componentDidMount() {
        const url = window.location.href.split('#')[0];
        const successFun = (res) => {
            wx.config({
                debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                appId: res.appId, // 必填，公众号的唯一标识
                timestamp: res.timestamp, // 必填，生成签名的时间戳
                nonceStr: res.nonceStr, // 必填，生成签名的随机串
                signature: res.signature, // 必填，签名，见附录1
                jsApiList: ['chooseImage', 'uploadImage'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
            });
        }
        this.props.getData('/activity/getWeiXinInfo.do', { url: url }, successFun, 'jssdk');
        wx.ready(() => {
            wx.hideOptionMenu();
        })
    }
    // 组件是否应当渲染新的props或state，返回false表示跳过后续的生命周期方法，通常不需要使用以避免出现bug。
    // 在出现应用的瓶颈时，可通过该方法进行适当的优化。
    shouldComponentUpdate(nextProps, nextState) {
        return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState))
    }

    //接收到新的props或者state后，进行渲染之前调用，此时不允许更新props或state。
    componentWillUpdate(nextProps, nextState) {
        if (this.props !== nextProps) {
            let {data} = nextProps.state;
        }
    }

    render() {
        return (
            <div className="index_module">
                <Header nav saleRecord title='首页' isBack={false} />
                <Link to="/HelpCenter">HelpCenter</Link>
            </div>
        )
    }
    // 组件被移除之前被调用，可以用于做一些清理工作，在componentDidMount方法中添
    // 加的所有任务都需要在该方法中撤销，比如创建的定时器或添加的事件监听器。
    componentWillUnmount() {
        cancelAnimationFrame(this.state.requestID);
    }
}

export default Template({
    id: 'index',  //应用关联使用的redux
    component: Index,//接收数据的组件入口
    url: '/api/appHomePage.do',
    data: { a: 122 }
});

