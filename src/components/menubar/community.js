/*
 * @Author: your name
 * @Date: 2020-09-29 16:17:21
 * @LastEditTime: 2020-10-08 09:36:51
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \b2c_web_project\src\components\menubar\community.js
 */
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


let commConfig = [
    {
        "name": "每日爆款",
        "types": 3,
        "url": "/fire/",
        "component": Fire
    },
    {
        "name": "趣分享",
        "types": 3,
        "url": "/shart/",
        "component": Shart
    },
    {
        "name": "宣传素材",
        "types": 3,
        "url": "/material/",
        "component": Material
    },
    {
        "name": "花粉学堂",
        "types": 3,
        "url": "/school/",
        "component": School
    }
]

export default class Community extends React.Component{
    render(){
        return (
            <div>
                {/* 二级菜单 */}
                <div className="topNav">
                    <ul>
                        {
                            commConfig.map((item,home)=>{
                                return (<li key={home}> <Link to={'/community'+item.url}>{item.name}</Link> </li>)
                            })
                        }
                        
                    </ul>
                </div>
                <div className="videoContent">
                    {
                        materConfig.map((item,home)=>{
                            return (<Route key={home} path={'/community'+item.url}  component={item.component} />)
                        })
                    }
                    
                </div>
                测试社区页
            </div>
        )
    }
} 