/*
 * @Author: your name
 * @Date: 2020-10-01 10:57:02
 * @LastEditTime: 2020-10-07 19:30:19
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

https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png
let foodConfig = [
    {
        "name": "婴童服设",
        "types": 1,
        "url": "/home/baby/clothes",
        "image": "http://127.0.0.1:8000/goods/goodsclass/list/type/news.png",
        "component": B_Clothes
    },
    {
        "name": "玩具书籍",
        "types": 1,
        "url": "/home/baby/book",
        "image": "http://127.0.0.1:8000/goods/goodsclass/list/type/time-h.png",
        "component": B_Book
    },
    {
        "name": "婴童寝居",
        "types": 1,
        "url": "/home/baby/home",
        "image": "http://127.0.0.1:8000/goods/goodsclass/list/type/user-h.png",
        "component": B_Home
    },
    {
        "name": "婴童洗护",
        "types": 1,
        "url": "/home/baby/clean",
        "image": "http://127.0.0.1:8000/goods/goodsclass/list/type/user-h_ZaNnlfW.png",
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
                            foodConfig.map((item,home)=>{
                                return (<li key={home}> <Link to={item.url}><Avatar size="large" src={item.image} /> <br/>{item.name}</Link> </li>)
                            })
                        }
                        
                    </ul>
                </div>
                <div className="">
                    {
                        foodConfig.map((item,home)=>{
                            return (<Route key={home} exact={item.exact} path={item.url}  component={item.component} />)
                        })
                    } 
                </div>
                BodyItem母婴页
            </div>
        )
    }
    
}
 

export default BodyItem