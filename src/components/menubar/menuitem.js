/*
 * @Author: your name
 * @Date: 2020-09-29 16:16:49
 * @LastEditTime: 2020-10-07 10:29:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \b2c_web_project\src\components\menubar\menuitem.js
 */
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


let homeConfig =[
    {
        "name": "母婴",
        "url": "/baby/",
        "component": BabyItem,
    },
    {
        "name": "食品",
        "url": "/food/",
        "component": FoodItem
    },
    {
        "name": "女装",
        "url": "/cloth/",
        "component": ClothItem
    }
]

export default class MenuItem extends React.Component {

    render() {
        return (
            <div>
                <Row>
                    <Col span={6}>
                        <Menu
                            defaultSelectedKeys={['0']}
                            defaultOpenKeys={['sub1']}
                            mode="inline"
                            theme="light"
                        >
                            {
                                homeConfig.map((item,home)=>{
                                    return (<Menu.Item key={home}> <Link to={'/menuitem'+item.url}>{item.name}</Link> </Menu.Item>)
                                })
                            }

                        </Menu>
                        

                    </Col>
                    <Col span={18}>
                        <div className="ItemContent">
                            {
                                homeConfig.map((item,home)=>{
                                    return (<Route key={home} exact={item.exact} path={'/menuitem'+item.url}  component={item.component} />)
                                })
                            }
                        </div>
                    </Col>
                </Row>




            </div>
        )
    }
}