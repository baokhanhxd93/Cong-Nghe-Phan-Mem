import React, { useState, useEffect, Fragment } from "react";
import { Route, NavLink, Redirect } from "react-router-dom";
import './UserTemplate.scss'
import ShowLogin from './ShowLogin'

import { Layout } from 'antd';
const { Header, Content } = Layout;


const UserLayout = (props) => {

    const taiKhoan = JSON.parse(localStorage.getItem('userLogin'))
    let [navActive, setNavActive] = useState({
        home: true,
        xemcaigido: false
    })

    const dangXuat = () => {
        // console.log(taiKhoan)
        localStorage.removeItem('userLogin')
        // dispatch(dangNhapAction(localStorage.getItem(userLogin)))
    }

    const updateNavActive = (name) => {
        if (name === "home") {
            let temp = { ...navActive };
            temp.home = true;
            temp.xemcaigido = false;
            setNavActive(temp);
        }
        else if (name === "xemcaigido") {
            let temp = { ...navActive };
            temp.home = false;
            temp.xemcaigido = true;
            setNavActive(temp);
        }
    }

    return (
        <Fragment>
            <Layout className="homePage">
                <Header>
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="header__left col-4">
                            <NavLink className="navbar-brand" to='/'><img src={"images/1004px-Logo-hcmut.svg.png"} style={{ width: 45, height: 45 }} /></NavLink>
                        </div>
                        <div className="header__center col-4 d-none d-md-flex" id="mainMenu">
                            <ul className="navbar-nav">
                                <li className={`nav-item ${navActive.home ? 'isActive' : ''}`}>
                                    <NavLink className="nav-link" to="/" onClick={() => { updateNavActive("home") }}>Trang chủ</NavLink>
                                </li>
                                <li className={`nav-item ${navActive.xemcaigido ? 'isActive' : ''}`}>
                                    <NavLink className="nav-link" to="/xemcaigido" onClick={() => { updateNavActive("xemcaigido") }}>Tự thêm các trang nha</NavLink>
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

export const UserTemplate = (props) => (
    <Route
        path={props.path}
        {...props.exact}
        render={(propsComponent) => {
            const userLogin = localStorage.getItem('userLogin')
            const userLoginData = JSON.parse(userLogin)
            if (userLoginData) {
                return <UserLayout>
                    <props.component {...propsComponent} />
                </UserLayout>
            }
            return <Redirect to="/login" />
        }}
    />
);