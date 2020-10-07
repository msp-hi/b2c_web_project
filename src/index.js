/*
 * @Author: your name
 * @Date: 2020-09-29 10:53:18
 * @LastEditTime: 2020-10-07 19:15:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \b2c_web_project\src\index.js
 */
import React from 'react'
import ReactDOM from 'react-dom'
import 'antd/dist/antd.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


import './css/style.css'

import Home from './components/menubar/home'
import Menu from './components/menubar/menuitem'
import Community from './components/menubar/community'
import Income from './components/menubar/income'
import Mine from './components/menubar/mine'



let routeConfig =[
    {url:'/home/',name:'首页',component:Home},
    {url:'/menuitem/',name:'分类',component:Menu},
    {url:'/community/',name:'社区',component:Community},
    {url:'/income/',name:'收益',component:Income},
    {url:'/mine/',name:'我的',component:Mine},
]

class Index extends React.Component {
    render() {
        return (
            <Router>
                <div className="mainDiv">
                    <div className="tab-bar">
                        <ul>
                            {
                                routeConfig.map((item,home)=>{
                                    return (<li key={home}> <Link to={item.url}>{item.name}</Link> </li>)
                                })
                            }
                        </ul>

                    </div>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        {
                            routeConfig.map((item,home)=>{
                                return (<Route key={home} exact={item.exact} path={item.url}  component={item.component} />)
                            })
                        }                     
                    </Switch>
                </div>
            </Router>
        )
    }
}


ReactDOM.render(
    <Index></Index>,
    document.getElementById("root")
)
