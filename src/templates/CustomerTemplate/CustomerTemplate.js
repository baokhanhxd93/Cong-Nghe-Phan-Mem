import React, { useState, useEffect, Fragment } from "react";
import { Route, NavLink, Redirect } from "react-router-dom";
import './CustomerTemplate.scss'
import ShowLogin from '../UserTemplate/ShowLogin'
import { Layout } from 'antd';
const { Header, Content } = Layout;


const CustomerLayout = (props) => {

    let [navActive, setNavActive] = useState({
        home: true,
        xemcaigido: false
    })

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
                                    <NavLink className="nav-link" to="/customer" onClick={() => { updateNavActive("home") }}>Trang chủ</NavLink>
                                </li>
                                <li className={`nav-item ${navActive.xemcaigido ? 'isActive' : ''}`}>
                                    <NavLink className="nav-link" to="/customer/xemcaigido" onClick={() => { updateNavActive("xemcaigido") }}>Tự thêm các trang nha</NavLink>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </Header>
                <Content>
                    {props.children}
                </Content>
            </Layout>
        </Fragment>
    );
};

export const CustomerTemplate = (props) => (
    <Route
        path={props.path}
        {...props.exact}
        render={() => {
            return <CustomerLayout>
                <props.component />
            </CustomerLayout>
            }
        }
    />
);