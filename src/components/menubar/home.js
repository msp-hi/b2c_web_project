/*
 * @Author: your name
 * @Date: 2020-09-29 16:16:32
 * @LastEditTime: 2020-10-08 09:26:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \b2c_web_project\src\components\menubar\home.js
 */
import React from 'react';
import ReactDOM from 'react-dom'
import {
    Route,
    Link
} from "react-router-dom";

import FeatItem from './home_menu/feat'
import LikeItem from './home_menu/like'
import BabyItem from './home_menu/baby'
import FoodItem from './home_menu/food'
import ClothItem from './home_menu/cloth'


let homeConfig =[
    {
        "name": "母婴",
        "types": 1,
        "url": "/baby/",
        "component": BabyItem
    },
    {
        "name": "食品",
        "types": 1,
        "url": "/food/",
        "component": FoodItem
    },
    {
        "name": "女装",
        "types": 1,
        "url": "/cloth/",
        "component": ClothItem
    }
]

export default class Home extends React.Component{
    render(){
        return (
            <div>
                {/* 二级菜单 */}
                <div className="topNav">
                    <ul>
                        <li><Link to="/home/feat">精选</Link></li>
                        <li><Link to="/home/like">猜你喜欢</Link></li>
                        {
                            homeConfig.map((item,home)=>{
                                return (<li key={home}> <Link to={'/home'+item.url}>{item.name}</Link> </li>)
                            })
                        }
                    </ul>
                </div>
                <div className="videoContent">
                    <Route path="/home/feat" component={FeatItem} />
                    <Route path="/home/like" component={LikeItem} />
                        {
                            homeConfig.map((item,home)=>{
                                return (<Route key={home} exact={item.exact} path={'/home'+item.url}  component={item.component} />)
                            })
                        } 
                </div>
                测试首页
            </div>
        )
    }
}