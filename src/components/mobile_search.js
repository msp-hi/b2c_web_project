import React from 'react'
import ReactDOM from 'react-dom'
import { Row, Col } from 'antd'
import { Menu } from 'antd';
import { Button } from 'antd';



const { SubMenu } = Menu;
export default class Header extends React.Component {
    render() {

        return (
            <div>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20}>
                        首页
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </div>
        )
    }
}