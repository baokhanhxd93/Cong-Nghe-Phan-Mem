import React, { Component } from 'react';
import '../../../src/App.css';
import 'antd/dist/antd.css';
import { Statistic, Row, Col, Steps, AutoComplete } from 'antd';
import {
    LoadingOutlined,
  } from '@ant-design/icons';

const { Step } = Steps;
const { Countdown } = Statistic;
const deadline = Date.now() + 30000 * 30; // Moment is also OK

function onFinish() {
    console.log('finished!');
}

class OrderProcess extends Component {
    state = {current: 1,};
    onChange = current => {
        console.log('onChange:', current);
        this.setState({ current });
    };
    render() { 
        const { current } = this.state;
        return (
            <div id = "orderprocess" className = "orderprocess">
                <div className = "container-fluid1">
                    <div className="orderID">
                        <h1>
                            Order #0001
                        </h1>
                    </div>
                    <div className = "coutdown">
                        <Countdown title="Expected remaining time" value={deadline} onFinish={onFinish}/>
                    </div>
                    <div className = "process">
                        <Steps
                        type="navigation"
                        current={current}
                        onChange={this.onChange}
                        className="site-navigation-steps"
                        >
                            <Step status="finish" title="Received" description="Your order is being processed." />
                            <Step status="process" title="Preparing" description="Your order is being prepared." />
                            <Step status="wait" title="Ready" description="Your order is ready. Food will be served in a few minutes." />
                        </Steps>
                    </div>
                    <div className = "icon">
                        <LoadingOutlined />
                    </div>
                </div>
            </div>
        );
    }
}
 
export default OrderProcess;