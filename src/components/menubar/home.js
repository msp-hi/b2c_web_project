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


export default class Home extends React.Component{
    render(){
        return (
            <div>
                {/* 二级菜单 */}
                <div className="topNav">
                    <ul>
                        <li><Link to="/home/feat">精选</Link></li>
                        <li><Link to="/home/like">猜你喜欢</Link></li>
                        <li><Link to="/home/baby">母婴</Link></li>
                        <li><Link to="/home/food">食品</Link></li>
                        <li><Link to="/home/cloth">女装</Link></li>
                    </ul>
                </div>
                <div className="videoContent">
                    <div><h3>精选</h3></div>
                    <Route path="/home/feat" component={FeatItem} />
                    <Route path="/home/like" component={LikeItem} />
                    <Route path="/home/baby" component={BabyItem} />
                    <Route path="/home/food" component={FoodItem} />
                    <Route path="/home/cloth" component={ClothItem} />
                </div>
                测试首页
            </div>
        )
    }
}