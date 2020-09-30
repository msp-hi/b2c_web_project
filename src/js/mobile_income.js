import React from 'react'


import { Button, Layout, Row, Col } from 'antd';
const { Header, Footer, Sider, Content } = Layout;



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
                            <Col span={11}><span className="span_2">账户余额</span><div></div><span className="span_1"><b>￥123.02</b></span></Col>
                            <Col span={11} className="col_size_1"><span className="span_1"><Button type="round" size="large" ghost="true">提现</Button></span></Col>
                            <Col span={1}></Col>
                        </Row>
                    </div>
                    <div className="div_top_5">
                        <Row>
                            <Col span={1}></Col>
                            <Col span={11} className="col_order_1"><Button type="dashed" className="button_1"><span><b>线上收益</b></span></Button></Col>
                            <Col span={11}><Button type="dashed" className="button_2"><span><b>线下收益</b></span></Button></Col>
                            <Col span={1}></Col>
                        </Row>
                    </div>
                    <div>
                        
                    </div>
                </div>
                <div>

                </div>
            </div>
        )
    }
}
