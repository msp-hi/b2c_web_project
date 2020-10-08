/*
 * @Author: your name
 * @Date: 2020-09-29 10:53:18
 * @LastEditTime: 2020-10-08 09:23:54
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
    {
        "name": "首页",
        "icon": null,
        "url": "/home/",
        "component": Home
    },
    {
        "name": "分类",
        "icon": null,
        "url": "/menuitem/",
        "component": Menu
    },
    {
        "name": "社区",
        "icon": null,
        "url": "/community/",
        "component": Community
    },
    {
        "name": "收益",
        "icon": null,
        "url": "/income/",
        "component": Income
    },
    {
        "name": "我的",
        "icon": null,
        "url": "/mine/",
        "component": Mine
    }
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
                                return (<Route key={home} path={item.url}  component={item.component} />)
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
