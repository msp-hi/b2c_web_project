import React from 'react';
import ReactDOM from 'react-dom'
import { Link } from "react-router-dom";
import { Row, Col, Image, Input, Divider, Card  } from 'antd'
import { Menu, Dropdown } from 'antd';
import { CaretUpOutlined, SearchOutlined, MacCommandOutlined, CaretDownOutlined } from '@ant-design/icons';

import '../../css/index.css'
import sys from '../../../assets/app_bar_scan_gray.png'
import yy from '../../../assets/app_bar_service_gray.png'
import hh1 from '../../../assets/02.png'
import tb from '../../../assets/platform_taobao_identifier.png'
const { Meta } = Card;

export default class Home extends React.Component {
    render() {
        return (
            <div>
                {/* 二级菜单 */}
                <div>
                    <Row className="header">
                        <Col span={3}>
                            &nbsp;&nbsp;&nbsp;&nbsp;<Image src={sys} />
                        </Col>
                        <Col span={18}>
                            <Input className="input" prefix={<SearchOutlined />} bordered={false} placeholder="粘贴宝贝标题，先领券在购物" />
                        </Col>

                        <Col span={3}>
                            &nbsp;&nbsp;&nbsp;&nbsp;<Image src={yy} />
                        </Col>
                    </Row>
                    <Row className="topNav1">

                        <Col span={24}>
                            <Menu mode="horizontal" className="topNav1">
                                <Menu.Item key="mail">
                                    <Link to=""><span className="a">精选</span></Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to=""><span className="a">猜你喜欢</span></Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to=""><span className="a">母婴</span></Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to=""><span className="a">食品</span></Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to=""><span className="a">女装</span></Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to=""><span className="a">护肤</span></Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to=""><span className="a">男装</span></Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to=""><span className="a">萌宠</span></Link>
                                </Menu.Item>
                            </Menu>

                        </Col>

                    </Row>
                    <Row>
                        <Col span={6}>
                            <p className='c'>综合<CaretUpOutlined style={{ fontSize: "10px" }} /></p>
                        </Col>
                        <Col span={6}>
                            <p className='c'>销量<span><CaretUpOutlined style={{ fontSize: "10px" }} /><CaretDownOutlined style={{ fontSize: "10px" }} /></span></p>
                        </Col>
                        <Col span={6}>
                            <p className='c'>券后价<span><CaretUpOutlined style={{ fontSize: "10px" }} /><CaretDownOutlined style={{ fontSize: "10px" }} /></span></p>
                        </Col>
                        <Col span={6}>
                            <p className='c'><MacCommandOutlined /></p>
                        </Col>
                    </Row>
                    <Divider className='ider' />
                    <Card
                        hoverable
                        style={{ width: '100%', height: '21%' }}
                        cover={<img alt="example" src={hh1} style={{ width: 95  }} />}
                        bordered={false}
                    >
                        <Image src={tb} style={{ position: 'absolute', left: 100, top: -2 }}/>
                        <Meta title="哈哈哈网红同款xs max苹果x手机壳7p简约Iphone6S文字8plus情侣XR" style={{ position: 'absolute', left: 120, top: 0, fontSize: 120 }} />
                        <Meta description="￥16.0 " style={{ position: 'absolute', left: 100, top: 35 }} />
                        <Meta description="淘宝价￥21" style={{ position: 'absolute', left: 150, top: 35 }} />
                        <Meta description="已售 0" style={{ position: 'absolute', left: 100, top: 50, color: 'black' }} />

                        <div style={{ position: 'absolute', left: 100, top: 70, borderRadius: 10, background: 'pink', fontSize: 10, width: "15%", textAlign: "center" }}>
                            5元券
                                </div>
                        <div style={{ position: 'absolute',left:0, top: 70, background: 'red', borderRadius: 5, fontSize: 10, width: '22%' }}>
                            预估收益：￥0.1
                                </div>
                    </Card>
                    <Card
                        hoverable
                        style={{ width: '100%', height: '21%' }}
                        cover={<img alt="example" src={hh1} style={{ width: 95  }} />}
                        bordered={false}
                    >
                        <Image src={tb} style={{ position: 'absolute', left: 100, top: -2 }}/>
                        <Meta title="哈哈哈网红同款xs max苹果x手机壳7p简约Iphone6S文字8plus情侣XR" style={{ position: 'absolute', left: 120, top: 0, fontSize: 120 }} />
                        <Meta description="￥16.0 " style={{ position: 'absolute', left: 100, top: 35 }} />
                        <Meta description="淘宝价￥21" style={{ position: 'absolute', left: 150, top: 35 }} />
                        <Meta description="已售 0" style={{ position: 'absolute', left: 100, top: 50, color: 'black' }} />

                        <div style={{ position: 'absolute', left: 100, top: 70, borderRadius: 10, background: 'pink', fontSize: 10, width: "15%", textAlign: "center" }}>
                            5元券
                                </div>
                        <div style={{ position: 'absolute',left:0, top: 70, background: 'red', borderRadius: 5, fontSize: 10, width: '22%' }}>
                            预估收益：￥0.1
                                </div>
                    </Card>
                    <Card
                        hoverable
                        style={{ width: '100%', height: '21%' }}
                        cover={<img alt="example" src={hh1} style={{ width: 95  }} />}
                        bordered={false}
                    >
                        <Image src={tb} style={{ position: 'absolute', left: 100, top: -2 }}/>
                        <Meta title="哈哈哈网红同款xs max苹果x手机壳7p简约Iphone6S文字8plus情侣XR" style={{ position: 'absolute', left: 120, top: 0, fontSize: 120 }} />
                        <Meta description="￥16.0 " style={{ position: 'absolute', left: 100, top: 35 }} />
                        <Meta description="淘宝价￥21" style={{ position: 'absolute', left: 150, top: 35 }} />
                        <Meta description="已售 0" style={{ position: 'absolute', left: 100, top: 50, color: 'black' }} />

                        <div style={{ position: 'absolute', left: 100, top: 70, borderRadius: 10, background: 'pink', fontSize: 10, width: "15%", textAlign: "center" }}>
                            5元券
                                </div>
                        <div style={{ position: 'absolute',left:0, top: 70, background: 'red', borderRadius: 5, fontSize: 10, width: '22%' }}>
                            预估收益：￥0.1
                                </div>
                    </Card>
                    <Card
                        hoverable
                        style={{ width: '100%', height: '21%' }}
                        cover={<img alt="example" src={hh1} style={{ width: 95  }} />}
                        bordered={false}
                    >
                        <Image src={tb} style={{ position: 'absolute', left: 100, top: -2 }}/>
                        <Meta title="哈哈哈网红同款xs max苹果x手机壳7p简约Iphone6S文字8plus情侣XR" style={{ position: 'absolute', left: 120, top: 0, fontSize: 120 }} />
                        <Meta description="￥16.0 " style={{ position: 'absolute', left: 100, top: 35 }} />
                        <Meta description="淘宝价￥21" style={{ position: 'absolute', left: 150, top: 35 }} />
                        <Meta description="已售 0" style={{ position: 'absolute', left: 100, top: 50, color: 'black' }} />

                        <div style={{ position: 'absolute', left: 100, top: 70, borderRadius: 10, background: 'pink', fontSize: 10, width: "15%", textAlign: "center" }}>
                            5元券
                                </div>
                        <div style={{ position: 'absolute',left:0, top: 70, background: 'red', borderRadius: 5, fontSize: 10, width: '22%' }}>
                            预估收益：￥0.1
                                </div>
                    </Card>
                </div>
            </div>
        )
    }
}

