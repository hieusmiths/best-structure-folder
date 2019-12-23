import React, { Component, Fragment } from 'react'
import { Route, Switch, RouteComponentProps, RouteProps } from 'react-router-dom'
import { authRouting } from '../routes'

interface IProps {
  numberOfTeam: number
}

export default class AuthLayout extends Component<RouteComponentProps> {

  renderRouting = () => {
    const { match } = this.props;
    return authRouting.map((item: RouteProps , index: number) => {
      return <Route component={item.component} extract={item.exact} path={match.url + item.path} key={index}/>
    })
  }

  render() {
    console.log(this.props)
      return (
          <Fragment>
              <div className='container'>
                <Switch>
                  {
                    this.renderRouting()
                  }
                </Switch>
              </div>
          </Fragment>
      )
  }
}
