/*
 * @Author: your name
 * @Date: 2020-10-01 10:57:02
 * @LastEditTime: 2020-10-08 09:42:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \b2c_web_project\src\components\menubar\home_menu\baby_list.js
 */
import React from 'react'
import {
    Route,
    Link
} from "react-router-dom";

import { Avatar } from 'antd';

import B_Clothes from '../species/baby_menu/baby_clothes'
import B_Book from '../species/baby_menu/baby_book'
import B_Home from '../species/baby_menu/baby_home'
import B_Clean from '../species/baby_menu/baby_clean'


let bodyConfig = [
    {
        "name": "婴童服设",
        "types": 1,
        "url": "/clothes/",
        "image": "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
        "component": B_Clothes
    },
    {
        "name": "玩具书籍",
        "types": 1,
        "url": "/book/",
        "image": "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
        "component": B_Book
    },
    {
        "name": "婴童寝居",
        "types": 1,
        "url": "/home/",
        "image": "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
        "component": B_Home
    },
    {
        "name": "婴童洗护",
        "types": 1,
        "url": "/clean/",
        "image": "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
        "component": B_Clean
    }
]

class BodyItem extends React.Component{
    render(){
        return (
            <div>
                {/* 三级级菜单 */}
                <div className="menu_list">
                    <ul>
                        {
                            bodyConfig.map((item,home)=>{
                                return (<li key={home}> <Link to={'/home/body'+item.url}><Avatar size="large" src={item.image} /> <br/>{item.name}</Link> </li>)
                            })
                        }
                        
                    </ul>
                </div>
                <div className="">
                    {
                        bodyConfig.map((item,home)=>{
                            return (<Route key={home} path={'/home/body'+item.url}  component={item.component} />)
                        })
                    } 
                </div>
                BodyItem母婴页
            </div>
        )
    }
    
}
 

export default BodyItem