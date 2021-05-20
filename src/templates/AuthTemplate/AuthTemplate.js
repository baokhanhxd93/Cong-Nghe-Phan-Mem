import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import './AuthTemplate.scss'

const AuthLayout = (props) => {
    return (
        <Fragment>
            <div className="auth">
                <svg width={466} height={603} viewBox="0 0 100 90" preserveAspectRatio="none" className="wave">
                    <path d="M0,0 
     L100,0
     C25,50 50,75 0,100z" fill="#6c63ff" />
                </svg>

                <img src="/images/undraw_environment_iaus.png" className="theme" alt="theme" />
                {props.children}
            </div>
        </Fragment>
    );
};

export const AuthTemplate = (props) => (
    <Route
        path={props.path}
        {...props.exact}
        render={(propsComponent) => (
            <AuthLayout>
                <props.component {...propsComponent} />
            </AuthLayout>
        )}
    />
);