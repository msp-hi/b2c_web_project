import React from 'react';
import ReactDOM from 'react-dom'
import {
    Route,
    Link
} from "react-router-dom";

import Fire from './comm_two_menu/fire'
import Shart from './comm_two_menu/shart'
import Material from './comm_two_menu/material'
import School from './comm_two_menu/school'

export default class Community extends React.Component{
    render(){
        return (
            <div>
                {/* 二级菜单 */}
                <div className="topNav">
                    <ul>
                        <li><Link to="/community/fire">每日爆款</Link></li>
                        <li><Link to="/community/shart">趣分享</Link></li>
                        <li><Link to="/community/material/">宣传素材</Link></li>
                        <li><Link to="/community/school">花粉学堂</Link></li>
                        
                    </ul>
                </div>
                <div className="videoContent">
                    <Route path="/community/fire" component={Fire} />
                    <Route path="/community/shart" component={Shart} />
                    <Route path="/community/material/" component={Material} />
                    <Route path="/community/school" component={School} />
                    
                </div>
                测试社区页
            </div>
        )
    }
} 