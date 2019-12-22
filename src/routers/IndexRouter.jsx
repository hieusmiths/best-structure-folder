import React, { Component } from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import indexRoute from './routes/indexRoute'
export default class IndexRouter extends Component {
    renderRoutes = (listRoute ) => listRoute.map((item, index ) => <Route key={index} path={item.path} component={item.component} exact={item.exact} />)
    render() {
        return (
          <Router>
            <Switch>
                {this.renderRoutes(indexRoute)}
            </Switch>
          </Router>
        )
    }
}
