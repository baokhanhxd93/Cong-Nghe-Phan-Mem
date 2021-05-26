import '../../../src/App.css';
import React, { Component } from 'react';
import { Rate, Input, Checkbox, Button } from 'antd';
const { TextArea } = Input;

class Feedback1 extends Component {
    state = {  }
    render() { 
        return (
            <div id = "feedback1" className = "feedback1">
                <div className = "container-fluid">
                    <div className = "titleHolder">
                        <h1>How would you rate our service ?</h1>
                    </div>
                    <div className = "rating">
                        <Rate allowHalf defaultValue = {0} count = {10}></Rate>
                    </div>
                    <div className = "question">
                        <p>Care to share more about it ?</p>
                    </div>
                    <div className = "input">
                        <TextArea rows = {15}></TextArea>
                    </div>
                    <div className = "button">
                        <Button type="primary" block >
                            PUBLISH FEEDBACK
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Feedback1;