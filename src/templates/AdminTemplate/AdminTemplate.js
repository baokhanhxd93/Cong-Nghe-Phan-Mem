import React, { useState, useEffect, Fragment } from "react";
import { Route, NavLink, Redirect } from "react-router-dom";
import './AdminTemplate.scss'
import ShowLogin from '../UserTemplate/ShowLogin'

import { Layout } from 'antd';
const { Header, Content } = Layout;


const AdminLayout = (props) => {

    const taiKhoan = JSON.parse(localStorage.getItem('userLogin'))
    let [navActive, setNavActive] = useState({
        dashboard: true,
        feedback: false,
        menuitem: false

    })

    const dangXuat = () => {
        localStorage.removeItem('userLogin')
    }

    const updateNavActive = (name) => {
        if (name === "dashboard") {
            let temp = { ...navActive };
            temp.dashboard = true;
            temp.feedback = false;
            temp.menuitem = false;
            temp.employees = false;
            setNavActive(temp);
        }
        else if (name === "feedback") {
            let temp = { ...navActive };
            temp.dashboard = false;
            temp.feedback = true;
            temp.menuitem = false;
            temp.employees = false;
            setNavActive(temp);
        }
        else if (name === "menuitem") {
            let temp = { ...navActive };
            temp.dashboard = false;
            temp.feedback = false;
            temp.menuitem = true;
            temp.employees = false;
            setNavActive(temp);
        }
        else if (name === "employees") {
            let temp = { ...navActive };
            temp.dashboard = false;
            temp.feedback = false;
            temp.menuitem = false;
            temp.employees = true;
            setNavActive(temp);
        }
    }

    return (
        <Fragment>
            <Layout className="homePage">
                <Header>
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="header__left col-4">
                            <NavLink className="navbar-brand" to='/'><img src={"/images/1004px-Logo-hcmut.svg.png"} style={{ width: 45, height: 45 }} /> Admin</NavLink>
                        </div>
                        <div className="header__center col-4 d-none d-md-flex" id="mainMenu">
                            <ul className="navbar-nav">
                                <li className={`nav-item ${navActive.dashboard ? 'isActive' : ''}`}>
                                    <NavLink className="nav-link" to="/admin/dashboard" onClick={() => { updateNavActive("dashboard") }}>Xem báo cáo</NavLink>
                                </li>
                                <li className={`nav-item ${navActive.feedback ? 'isActive' : ''}`}>
                                    <NavLink className="nav-link " to="/admin/feedback" onClick={() => { updateNavActive("feedback") }}>Xem phản hồi</NavLink>
                                </li>
                                <li className={`nav-item ${navActive.menuitem ? 'isActive' : ''}`}>
                                    <NavLink className="nav-link " to="/admin/menuitem" onClick={() => { updateNavActive("menuitem") }}>Xem Menu</NavLink>
                                </li>
                                <li className={`nav-item ${navActive.employees ? 'isActive' : ''}`}>
                                    <NavLink className="nav-link " to="/admin/employees" onClick={() => { updateNavActive("employees") }}>Quản lý nhân viên</NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="header__right col-4 d-none d-md-flex">
                            <ShowLogin></ShowLogin>
                        </div>
                        <button className="navbar-toggler responsiveMenuButton" type="button" data-bs-toggle="collapse" data-bs-target="#myMenu"
                            aria-controls="myMenu" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                    </nav>
                </Header>
                <Content>
                    {props.children}
                </Content>
            </Layout>
        </Fragment>
    );
};

export const AdminTemplate = (props) => (
    <Route
        path={props.path}
        {...props.exact}
        render={(propsComponent) => {
            const userLogin = localStorage.getItem('userLogin')
            const userLoginData = JSON.parse(userLogin)
            if (userLoginData) {
                return <AdminLayout>
                    <props.component {...propsComponent} />
                </AdminLayout>
            }
            return <Redirect to="/login" />
        }}
    />
);