import React from 'react'

import { Button, Layout, Row, Col, Tabs, Divider } from 'antd';

const { TabPane } = Tabs;
function callback(key) {
    console.log(key);
}

export default class MOBILE_Incomme extends React.Component {



    render() {
        return (
            <div>
                <div className="mobile_header">
                    <div>
                        <Row>
                            <Col span={1}></Col>
                            <Col span={22} className="col_1"><span className="span_1"><b>收益</b></span></Col>
                            <Col span={1}></Col>
                        </Row>
                    </div>
                    <div>
                        <Row>
                            <Col span={1}></Col>
                            <Col span={11}><span className="span_2">累计收益（源）</span></Col>
                            <Col span={11} className="col_size_1"><span >昨日收益</span></Col>
                            <Col span={1}></Col>
                        </Row>
                    </div>
                    <div>
                        <Row>
                            <Col span={1}></Col>
                            <Col span={11}><span className="span_1"><b>￥123.02</b></span></Col>
                            <Col span={11} className="col_size_1"><span className="span_1"><b>+2.02</b></span></Col>
                            <Col span={1}></Col>
                        </Row>
                    </div>
                    <div className="div_top_4">
                        <Row>
                            <Col span={1}></Col>
                            <Col span={11}><span className="span_2">账户余额</span><div></div><span className="span_1">￥123.02</span></Col>
                            <Col span={11} className="col_size_1"><span className="span_1"><Button type="round" size="large" ghost="true">提现</Button></span></Col>
                            <Col span={1}></Col>
                        </Row>
                    </div>


                </div>
                <div>


                    <div className="div_top_5">
                        <Row>
                            <Col span={1}></Col>
                            <Col span={11} className="col_order_1"><Button type="dashed" className="button_1"><span className="span_size"><b>线上收益</b></span></Button></Col>
                            <Col span={11}><Button type="dashed" className="button_2"><span className="span_size"><b>线下收益</b></span></Button></Col>
                            <Col span={1}></Col>
                        </Row>
                    </div>
                    <div>
                        <Row>
                            <Col span={24} className="col_2 c_conter">
                                <span className="span_size_1">上个月结算收益：</span>
                                <span className="span_size">￥146</span>
                            </Col>
                        </Row>
                    </div>
                    <div>
                        <Row>
                            <Col span={1}></Col>
                            <Col span={11} className="col_3 c_conter">
                                <span className="span_3">上月预估收益：</span>
                                <div></div>
                                <span className="span_size">￥146</span>
                            </Col>
                            <Col span={11} className="col_4 c_conter">
                                <span className="span_3">收益：</span>
                                <div></div>
                                <span className="span_size">￥146</span>
                            </Col>
                            <Col span={1}></Col>
                        </Row>
                    </div>
                        <br />
                        <br />
                        <br />
                    <div>
                        {/* 近一个月的收益表 */}
                        <Row className="">
                            <Col span={1}></Col>
                            <Col span={22}>
                                <Tabs defaultActiveKey="1" onChange={callback} centered>
                                    <TabPane tab="今日" key="1">
                                        <Row className="row_1">
                                            <Col span={8} className="c_conter">
                                                <span className="span_3">付款笔数</span>
                                                <div></div>
                                                <span className="span_size">￥146</span>
                                            </Col>
                                            <Col span={8} className="col_5 c_conter">
                                                <span className="span_3">预估收益</span>
                                                <div></div>
                                                <span className="span_size">￥146</span>
                                            </Col>
                                            <Col span={8} className="c_conter">
                                                <span className="span_3">其他收益</span>
                                                <div></div>
                                                <span className="span_size">￥146</span>
                                            </Col>

                                        </Row>
                                    </TabPane>
                                    <TabPane tab="昨日" key="2">
                                        昨日
                        </TabPane>
                                    <TabPane tab="近7日" key="3">
                                        近七日
                        </TabPane>
                                    <TabPane tab="近30日" key="4">
                                        近七日
                        </TabPane>
                                </Tabs>
                            </Col>
                            <Col span={1}></Col>
                        </Row>

                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <div>
                            <Row>
                                <Col span={1}></Col>
                                <Col span={22} className="">
                                    <span className="span_3">收益结算明细</span>
                                </Col>
                                <Col span={1}></Col>
                            </Row>
                        </div>
                        <Divider />
                        <div>
                            <Row>
                                <Col span={1}></Col>
                                <Col span={22} className="">
                                    <span className="span_3">提现记录</span>
                                </Col>
                                <Col span={1}></Col>
                            </Row>
                        </div>

                    </div>
                </div>
                <br />
                <br />
                <br />
                <br />

                <div>
                </div>







            </div>
        )
    }
}
