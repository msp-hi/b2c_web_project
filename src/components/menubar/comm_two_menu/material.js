import React from 'react'
import {
    Route,
    Link
} from "react-router-dom";

import Sign from '../comm_three_menu/sign'
import Say from '../comm_three_menu/say'
import Selected from '../comm_three_menu/selected'
import GoodShop from '../comm_three_menu/good_shop'


class Material extends React.Component{
    render(){
        return (
            <div>
                {/* 二级菜单 */}
                <div className="topNav">
                    <ul>
                        <li><Link to="/community/material/sign">早安签到</Link></li>                        
                        <li><Link to="/community/material/say">遇见说</Link></li>                        
                        <li><Link to="/community/material/selected">花生严选</Link></li>                        
                        <li><Link to="/community/material/gootshop">星选好店</Link></li>                        
                    </ul>
                </div>
                <div className="videoContent">
                    <Route path="/community/material/sign" component={Sign} />
                    <Route path="/community/material/say" component={Say} />
                    <Route path="/community/material/selected" component={Selected} />
                    <Route path="/community/material/goodshop" component={GoodShop} />
                </div>
                Material 宣传素材页
            </div>
        )
    }
    
}
 

export default Material;