import React, { Component } from 'react'
import { Switch, Route } from "react-router-dom";
import MainLayout from '../layouts/MainLayout'
import footerItemRouter from './routes/FooterRouterItem'

export default class FooterRouter extends Component {
    render() {
        return (
            <MainLayout>
                <Switch>
                    {footerItemRouter.map((route, index) =>{
                        return <Route {...this.props}
                        path={route.path}
                        component={route.component}
                        key={index}
                        exact={route.exact}
                        />
                    })}
                </Switch>
            </MainLayout>
        )
    }
}
