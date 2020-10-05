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
    {url:'/home/',name:'首页',exact:false,component:Home},
    {url:'/menuitem/',name:'分类',exact:false,component:Menu},
    {url:'/community/',name:'社区',exact:false,component:Community},
    {url:'/income/',name:'收益',exact:false,component:Income},
    {url:'/mine/',name:'我的',exact:false,component:Mine},
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
