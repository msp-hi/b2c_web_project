/*
 * @Author: your name
 * @Date: 2020-10-01 11:08:03
 * @LastEditTime: 2020-10-08 09:46:08
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
        "types": 3,
        "url": "/delicatessen/",
        "image": "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
        "component": F_Delicate
    },
    {
        "name": "甜食",
        "types": 3,
        "url": "/sweets/",
        "image": "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
        "component": F_Sweets
    },
    {
        "name": "零食",
        "types": 3,
        "url": "/snacks/",
        "image": "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
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
                            foodConfig.map((item,home)=>{
                                return (<li key={home}> <Link to={'/home/food'+item.url}><Avatar size="large" src={item.image} /> <br/>{item.name}</Link> </li>)
                            })
                        }                       
                        
                    </ul>
                </div>
                <div className="">
                    {
                        foodConfig.map((item,home)=>{
                            return (<Route key={home} exact={item.exact} path={'/home/food'+item.url}  component={item.component} />)
                        })
                    } 
                   
                    
                </div>
                FoodItem食品页
            </div>
        )
    }
    
}


export default FoodItem