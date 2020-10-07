/*
 * @Author: your name
 * @Date: 2020-10-01 11:08:03
 * @LastEditTime: 2020-10-07 09:20:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \b2c_web_project\src\components\menubar\home_menu\food_list.js
 */
import React from 'react'
import {
    Route,
    Link
} from "react-router-dom";

import F_Delicate from '../species/food_menu/delicatessen'
import F_Sweets from '../species/food_menu/sweets'
import F_Snacks from '../species/food_menu/snacks'


let foodConfig = [
    {
        "name": "熟食",
        "types": 2,
        "url": "/home/food/delicatessen",
        "image": "http://127.0.0.1:8000/goods/goodsclass/list/type/time.png",
        "component": F_Delicate
    },
    {
        "name": "甜食",
        "types": 2,
        "url": "/home/food/sweets",
        "image": "http://127.0.0.1:8000/goods/goodsclass/list/type/time-h_WTkoyuR.png",
        "component": F_Sweets
    },
    {
        "name": "零食",
        "types": 2,
        "url": "/home/food/snacks",
        "image": "http://127.0.0.1:8000/goods/goodsclass/list/type/news-h.png",
        "component": F_Snacks
    }
]

class FoodItem extends React.Component{
    render(){
        return (
            <div>
                {/* 三级级菜单 */}
                <div className="menu_list">
                    <ul>
                        {
                            homeConfig.map((item,home)=>{
                                return (<li key={home}> <Link to={item.url}><Avatar size="large" src={item.image} /> <br/>{item.name}</Link> </li>)
                            })
                        }                       
                        
                    </ul>
                </div>
                <div className="">
                    {
                        homeConfig.map((item,home)=>{
                            return (<Route key={home} exact={item.exact} path={item.url}  component={item.component} />)
                        })
                    } 
                   
                    
                </div>
                FoodItem食品页
            </div>
        )
    }
    
}


export default FoodItem