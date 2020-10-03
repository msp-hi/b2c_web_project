import React from 'react'
import ReactDOM from 'react-dom'


import { Button, Row, Col, Divider, Tabs, Image } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import { StickyContainer, Sticky } from 'react-sticky';

import 'antd/dist/antd.css';
import image_data from '../assets/super_member_logo.png'
const { TabPane } = Tabs;



const renderTabBar = (props, DefaultTabBar) => (
    <Sticky bottomOffset={80}>
        {({ style }) => (
            <DefaultTabBar {...props} className="site-custom-tab-bar" style={{ ...style }} />
        )}
    </Sticky>
);
export default class Fans extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <Row className="row_1">
                        <Col span={1}>
                            <Button type="text" icon={<LeftOutlined />} size="middle" />
                        </Col>
                        <Col span={23} className="col_1">
                            <b style={{ fontSize:"20px" }} >粉丝</b>
                        </Col>

                    </Row><Divider />

                </div>



                <StickyContainer>
                    <Tabs defaultActiveKey="1" renderTabBar={renderTabBar} centered>
                        <TabPane tab="全部" key="1">
                            <Row>
                                <Col span={1}></Col>
                                <Col span={2}>
                                    <Image width={80} src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" className="image_1"/>
                                </Col>
                                <Col span={21} style={{ padding: '10px' }}>
                                    <ul className="ul_1">
                                        <li><b><b style={{ fontSize:"20px" }} >用户名称</b></b><span><img src={ image_data }/></span></li>
                                        <li><span>1234567789     20年09月01日</span></li>
                                    </ul>
                                </Col>
                            </Row>
                            <br/>
                            <Divider/>
                        </TabPane>
                        <TabPane tab="已付款" key="2">
                            Content of Tab Pane 2
      </TabPane>
                        <TabPane tab="已结算" key="3">

                        </TabPane>
                        <TabPane tab="已失效" key="4">

                        </TabPane>
                    </Tabs>
                </StickyContainer>,

            </div>
        )
    }
}