import React, { Component, ReactDOM, useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  Redirect,
  NavLink
} from "react-router-dom";
import { Row, Col, DatePicker, Space, Radio, Table, Button, Rate } from 'antd'
const { RangePicker } = DatePicker;


export default class FeedbackAdmin extends React.Component {
    render() {
        return ( 
            <div className="wrapper">
                <Row>
                    <Col span={24}>
                        <h1 className="header">Lựa chọn thông tin</h1>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <h2 className="header">Thời gian hiển thị</h2>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <Space direction="vertical" size={12}>
                            <RangePicker renderExtraFooter={() => 'extra footer'} showTime format="DD/MM/YYYY HH:mm:ss" onChange={this.handleChangeDebut}/>
                        </Space>
                    </Col>
                </Row>
                <Button type="primary" className="Apply-Button">Xác nhận</Button>
                <Button type="primary" className="Cancle-Button" danger>Hủy</Button>
                <FeedbackTable/>
            </div>
        )
    };
}

const columns = [
    {
        title: 'ID',
        dataIndex: 'id',
    },
    {
        title: 'Thời gian',
        dataIndex: 'time',
        sorter: {
            compare: (a, b) => a.time - b.time,
            multiple: 1,
        },
    },
    {
        title: 'Star',
        dataIndex: 'star',
        sorter: {
            compare: (a, b) => a.star - b.star,
            multiple: 1,
        },
        render: star => (
            <Rate disabled defaultValue={star} />
        )
    },
    {
        title: 'Nhận xét',
        dataIndex: 'comment',
    }
];

const data = [
    {
        id: 1,
        time: '11/01/2011',
        star: 5,
        comment: 'No comment'
    },
    {
        id: 2,
        time: '11/01/2011',
        star: 2,
        comment: 'No comment'
    },
    {
        id: 3,
        time: '11/01/2011',
        star: 1,
        comment: 'No comment'
    },
]

class FeedbackTable extends Component {

    onChange(sorter) {
        console.log('params', sorter);
    }

    render() {
        return (
            <Table className="table-with" columns={columns} dataSource={data} rowKey="id" onChange={this.onChange} />
        )
    }
}