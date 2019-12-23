import React, { Component } from 'react'
import { Route, BrowserRouter as Router , Switch, RouteProps } from 'react-router-dom'
import { indexRouting } from './routes'

export default class App extends Component {

  renderRouting = () => {
    return indexRouting.map((item: RouteProps , index: number) => {
      return <Route component={item.component} extract={item.exact} path={item.path} key={index}/>
    })
  }

  render() {
    return (
      <Router>
        <div>
          <Switch>
            {
              this.renderRouting()
            }
          </Switch>
        </div>
      </Router>
    )
  }
}
