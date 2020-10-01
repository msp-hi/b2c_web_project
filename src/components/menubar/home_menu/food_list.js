import React from 'react'
import {
    Route,
    Link
} from "react-router-dom";

import F_Delicate from '../species/food_menu/delicatessen'
import F_Sweets from '../species/food_menu/sweets'
import F_Snacks from '../species/food_menu/snacks'


class FoodItem extends React.Component{
    render(){
        return (
            <div>
                {/* 三级级菜单 */}
                <div className="menu_list">
                    <ul>
                        <li><Link to="/home/food/delicatessen">熟食</Link></li>                        
                        <li><Link to="/home/food/sweets">甜食</Link></li>                        
                        <li><Link to="/home/food/snacks">零食</Link></li>                        
                        
                    </ul>
                </div>
                <div className="">
                    <Route path="/home/food/delicatessen" component={F_Delicate} />
                    <Route path="/home/food/sweets" component={F_Sweets} />
                    <Route path="/home/food/snacks" component={F_Snacks} />
                   
                    
                </div>
                FoodItem食品页
            </div>
        )
    }
    
}


export default FoodItem