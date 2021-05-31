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
import { PlusCircleOutlined } from '@ant-design/icons';

export default class MenuItemAdmin extends React.Component {
    render() {
        return (
            <div>
                <Button type="primary" className="Apply-Button">
                    <PlusCircleOutlined />
                    Thêm món
                </Button>
                <MenuTable/>
            </div>
        )
    }
}

const columns = [
    {
        title: 'ID',
        dataIndex: 'id',
    },
    {
        title: 'Tên món ăn',
        dataIndex: 'name',
    },
    {
        title: 'Giá món ăn',
        dataIndex: 'price',
        sorter: {
            compare: (a, b) => a.price - b.price,
            multiple: 1,
        },
    },
    {
        title: 'Hình ảnh',
        dataIndex: 'image',
        render: image => (
            <img src={image} style={{ width: 45, height: 45 }}/>
        )
    },
    {
        title: 'Mô tả',
        dataIndex: 'describe',
    },
    {
        title: 'Action',
        render: () => (
            <div>
                <Button type="primary" className="Apply-Button">Sửa</Button>
                <Button type="primary" className="Cancle-Button" danger>Xóa</Button>
            </div>
        )
    }
];

const data = [
    {
        id: 1,
        name: 'Cơm gà',
        price: 25000,
        image: "/images/1004px-Logo-hcmut.svg.png",
        describe: 'Cơm gà chiên xối mỡ',
    },
    {
        id: 2,
        name: 'Cơm gà',
        price: 25000,
        image: "/images/1004px-Logo-hcmut.svg.png",
        describe: 'Cơm gà chiên xối mỡ',
    },
    {
        id: 3,
        name: 'Cơm gà',
        price: 25000,
        image: "/images/1004px-Logo-hcmut.svg.png",
        describe: 'Cơm gà chiên xối mỡ',
    },
]

class MenuTable extends Component {
    render() {
        return (
            <Table className="table-with" columns={columns} dataSource={data} rowKey="id"/>
        )
    }
}