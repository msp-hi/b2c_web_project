import React from 'react'
import ReactDOM from 'react-dom'


import { Button, Row, Col, Divider, Tabs, Image } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import { StickyContainer, Sticky } from 'react-sticky';

import 'antd/dist/antd.css';
const { TabPane } = Tabs;



const renderTabBar = (props, DefaultTabBar) => (
    <Sticky bottomOffset={80}>
        {({ style }) => (
            <DefaultTabBar {...props} className="site-custom-tab-bar" style={{ ...style }} />
        )}
    </Sticky>
);
export default class Order extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <Row className="row_1">
                        <Col span={1}>
                            <Button type="text" icon={<LeftOutlined />} size="middle" />
                        </Col>
                        <Col span={23} className="col_1">
                            <Button type="text" className="button_left">我的订单</Button>
                            <Button type="text" className="button_right">下级订单</Button>
                        </Col>

                    </Row><Divider />

                </div>



                <StickyContainer>
                    <Tabs defaultActiveKey="1" renderTabBar={renderTabBar} centered>
                        <TabPane tab="全部" key="1" style={{ height: 200 }}>
                            <Row>
                                <Col span={1}></Col>
                                <Col span={5}>
                                    <Image width={80} src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
                                </Col>
                                <Col span={1}></Col>
                                <Col span={16}>
                                    <ul className="ul_1">
                                        <li><b><b>121</b></b></li>
                                        <li><span>创建日  </span><span>2020-1-1</span>:  <span>01</span></li>
                                        <li><span>订单号  :  </span><span>141243114</span><b ><a className="b_1 right_1">复制</a></b></li>
                                        <li><b>消费金额：￥3213.0</b><span className="span_1 right_1">估计收益：￥66.88</span></li>
                                    </ul>
                                </Col>
                                <Col span={1}></Col>
                            </Row>
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