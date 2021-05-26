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

export default class EmployeesAdmin extends React.Component {
    render() {
        return (
        	<div>
        		<EmployeesTable />
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
		title: 'Tên nhân viên',
		dataIndex: 'name',
	},
	{
		title: 'Tên tài khoản',
		dataIndex: 'usename',
	},
	{
		title: 'Mật khẩu',
		dataIndex: 'password',
	},
	{
		title: 'Vị trí',
		dataIndex: 'position',
	},
	{
		title: 'Trạng thái',
		dataIndex: 'status',
	},
	{
		title: 'Action',
		render: () => (
			<div>
				<Button type="primary" className="Apply-Button">Approve</Button>
			    <Button type="primary" className="Cancle-Button" danger>Xóa</Button>
			</div>
		)
	}
];

const data = [
	{
		id: 1,
		name: 'Tuấn',
		usename: 'chef',
		password: 'chef123',
		position: 'chef',
		status: 'Đang làm',
	},
	{
		id: 2,
		name: 'Tuấn',
		usename: 'chef',
		password: 'chef123',
		position: 'chef',
		status: 'Đã nghỉ',
	},
	{
		id: 3,
		name: 'Tuấn',
		usename: 'chef',
		password: 'chef123',
		position: 'chef',
		status: 'Đang làm',
	},
]

class EmployeesTable extends Component {
	render() {
		return (
			<Table className="table-with" columns={columns} dataSource={data} rowKey="id"/>
		)
	}
}