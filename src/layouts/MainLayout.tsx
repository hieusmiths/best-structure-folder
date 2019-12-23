import React, { Component, Fragment } from 'react'
import { Route, RouteProps } from 'react-router-dom'
import { PrimarySearchAppBar } from '../components/nav-bar'
import { mainRouting } from '../routes'
interface IProps {
  numberOfTeam: number
}

export default class MainLayout extends Component {

    renderRouting = () => {
      return mainRouting.map((item: RouteProps , index: number) => {
        return <Route component={item.component} extract={item.exact} path={item.path} key={index}/>
      })
    }

    render() {
        return (
            <Fragment>
                <div className='container'>
                  <PrimarySearchAppBar />
                  {
                    this.renderRouting()
                  }
                </div>
            </Fragment>
        )
    }
}
