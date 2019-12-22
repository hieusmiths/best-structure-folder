import React, { Component, Fragment } from 'react'
import HomeNav from '../components/HomeNav'
import CategoryNav from '../components/HomeNav/CategoryNav'
import HomeFooter from '../components/Footer/HomeFooter'
// import EditDetail from 'modal/EditDetail'
export default class MainLayout extends Component {
    render() {
        return (
            <Fragment>
                {/* <EditDetail /> */}
                <div className='container'>
                    <HomeNav />
                </div>
                <div className="divider-thin-shop"></div>
                <div className="container">
                    <CategoryNav />
                    <div className="divider-thin-shop"></div>
                </div>
                <div className="divider-thin-shop"></div>
                <div>
                    {this.props.children}
                </div>
                <div>
                    <HomeFooter />
                </div>
            </Fragment>
        )
    }
}
