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





class Index extends React.Component {
    render() {
        return (
            <Router>
                <div className="mainDiv">
                    <div className="tab-bar">
                        <ul>
                            <li>
                                <Link to="/home/">首页</Link>
                            </li>
                            <li>
                                <Link to="/menuitem">分类</Link>
                            </li>
                            <li>
                                <Link to="/community/">社区</Link>
                            </li>
                            <li>
                                <Link to="/income">收益</Link>
                            </li>
                            <li>
                                <Link to="/mine">我的</Link>
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


ReactDOM.render(
    <Index></Index>,
    document.getElementById("root")
)
