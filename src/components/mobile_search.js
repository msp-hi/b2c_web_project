import React from 'react'
import ReactDOM from 'react-dom'
import { Row, Col, Menu, Space } from 'antd';

import { Form, Input, Button, Divider, Tag } from 'antd';
import { SearchOutlined, FireFilled, HistoryOutlined } from '@ant-design/icons';
import '../css/style.css'



const { SubMenu } = Menu;
export default class Header extends React.Component {
    render() {
 
        return (
            <div>
                <Row className="header">
                    <Col span={1}></Col>
                    <Col span={17}>
                    <Input className="input" prefix={<SearchOutlined />} bordered={false} />
                    </Col>
                    <Col span={5}><Button type='text' className="span"><span><b>取消</b></span></Button></Col>
                    
                    <Col span={1}></Col>
                </Row>
                <Divider className='ider'/>
                <Row className='content'>
                    <Col span={1}></Col>
                    <Col span={22}>
                        <span className='b' ><Space><FireFilled /><b>大家都在搜</b></Space></span>
                        <br/>
                        <br/>
                        <div>
                            <Tag className='tag'>&nbsp;&nbsp;父亲节 礼物&nbsp;&nbsp;</Tag>
                            <Tag className='tag'>&nbsp;&nbsp;施华超低底价&nbsp;&nbsp;</Tag>
                            <Tag className='tag'>&nbsp;&nbsp;冰糖黄桃4罐&nbsp;&nbsp;</Tag>
                            <Tag className='tag'>&nbsp;&nbsp;零食大礼包&nbsp;&nbsp;</Tag>
                            <Tag className='tag'>&nbsp;&nbsp;天然洗衣服5斤&nbsp;&nbsp;</Tag>
                            <Tag className='tag'>&nbsp;&nbsp;立白洗衣液6KG&nbsp;&nbsp;</Tag>
                            <Tag className='tag'>&nbsp;&nbsp;红豆玉米祛湿茶&nbsp;&nbsp;</Tag>
                        </div>
                        
                    </Col>
                    <Col span={1}></Col>
                </Row>
                <br/>
                <Row className='footer'>
                    <Col span={1}></Col>
                    <Col span={22}>
                        <span className='formerly' ><Space><HistoryOutlined /><b>搜索历史</b></Space></span>
                        <Button type='text' className='but'>清除</Button>
                        <br/>
                        <br/>
                        <div>
                            <Tag className='tag'>&nbsp;&nbsp;父亲节 礼物&nbsp;&nbsp;</Tag>
                            <Tag className='tag'>&nbsp;&nbsp;施华超低底价&nbsp;&nbsp;</Tag>
                        </div>
                        
                    </Col>
                    <Col span={1}></Col>
                </Row>
            </div>
        )
    }
}

