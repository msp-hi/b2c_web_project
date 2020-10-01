import React from 'react';
import ReactDOM from 'react-dom'
import { Menu, Button } from 'antd';

import {
    Route,
    Link
} from "react-router-dom";

import { Row, Col } from 'antd';

import BabyItem from './home_menu/baby_list'
import FoodItem from './home_menu/food_list'
import ClothItem from './home_menu/cloth'

const { SubMenu } = Menu;

export default class MenuItem extends React.Component {

    render() {
        return (
            <div>
                <Row>
                    <Col span={6}>
                        <Menu
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            mode="inline"
                            theme="light"
                        >
                            <Menu.Item key="1">
                                <Link to="/menuitem/baby/baby_menu">母婴</Link>
                            </Menu.Item>
                            <Menu.Item key="2" >
                                <Link to="/menuitem/food/food_menu">食品</Link>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Link to="/home/cloth/cloth_menu">女装</Link>
                            </Menu.Item>

                        </Menu>

                    </Col>
                    <Col span={18}>
                        <div className="ItemContent">
                            <Route path="/menuitem/baby/baby_menu" component={BabyItem} />
                            <Route path="/menuitem/food/food_menu" component={FoodItem} />
                            <Route path="/home/cloth/cloth_menu" component={ClothItem} />
                        </div>
                    </Col>
                </Row>




            </div>
        )
    }
}