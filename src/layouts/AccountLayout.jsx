import React, { Component } from 'react'
import { Row, Col } from 'antd'

export default class AccountLayout extends Component {
    render() {
        return (
            <div className='container'>
                <Row>
                    <Col span={3}></Col>
                    <Col span={9}>
                        {
                            this.props.children
                        }
                    </Col>
                </Row>
            </div>
        )
    }
}
