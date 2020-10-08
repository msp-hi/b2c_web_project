import React from 'react'
import ReactDOM from 'react-dom'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { HomeOutlined, AppstoreAddOutlined, CommentOutlined, LineChartOutlined, UserOutlined, DownOutlined } from '@ant-design/icons';
import { Dropdown } from 'antd';
import 'antd/dist/antd.css';
import '../css/index.css'

import Home from './menubar/home'
import Menu from './menubar/menuitem'
import Community from './menubar/community'
import Income from './menubar/income'
import Mine from './menubar/mine'


export default class Index extends React.Component{
    render(){
        return (
            <Router>

            <div className="mainDiv">

                    <div className="tab-bar">
                        <ul>
                            <li>
                                <Link to="/home/"><HomeOutlined style={{ fontSize: '25px' }} /><br /><span className="b">首页</span></Link>
                            </li>
                            <li>
                                <Link to="/menuitem"><AppstoreAddOutlined style={{ fontSize: '25px' }} /><br /><span className="b">分类</span></Link>
                            </li>
                            <li>
                                <Link to="/community/"><CommentOutlined style={{ fontSize: '25px' }} /><br /><span className="b">社区</span></Link>
                            </li>
                            <li>
                                <Link to="/income"><LineChartOutlined style={{ fontSize: '25px' }} /><br /><span className="b">收益</span></Link>
                            </li>
                            <li>
                                <Link to="/mine"><UserOutlined style={{ fontSize: '25px' }} /><br /><span className="b">我的</span></Link>
                            </li>

                        </ul>

                    </div>
                    
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/home/" component={Home} />

                        <Route path="/menuitem">
                            <Menu />
                        </Route>
                        <Route path="/community/">
                            <Community />
                        </Route>
                        <Route path="/income">
                            <Income />
                        </Route>
                        <Route path="/mine">
                            <Mine />
                        </Route>
                        
                    </Switch>
                </div>
            </Router>
            
            
        )
    }
}

