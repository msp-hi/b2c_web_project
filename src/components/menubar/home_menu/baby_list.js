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


class BodyItem extends React.Component{
    render(){
        return (
            <div>
                {/* 三级级菜单 */}
                <div className="menu_list">
                    <ul>
                        <li>
                            <Avatar size="large" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /> <br/>
                            <Link to="/home/baby/clothes">婴童服设</Link>
                        </li>                        
                        <li>
                            <Avatar size="large" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /> <br/>
                            <Link to="/home/baby/book">玩具书籍</Link>
                        </li>                        
                        <li>
                            <Avatar size="large" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /> <br/>
                            <Link to="/home/baby/home">婴童寝居</Link>
                        </li>                        
                        <li>
                            <Avatar size="large" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /> <br/>
                            <Link to="/home/baby/clean">婴童洗护</Link>
                        </li>                        
                        
                    </ul>
                </div>
                <div className="">
                    <Route path="/home/baby/clothes" component={B_Clothes} />
                    <Route path="/home/baby/book" component={B_Book} />
                    <Route path="/home/baby/home" component={B_Home} />
                    <Route path="/home/baby/clean" component={B_Clean} />
                    
                </div>
                BodyItem母婴页
            </div>
        )
    }
    
}
 

export default BodyItem