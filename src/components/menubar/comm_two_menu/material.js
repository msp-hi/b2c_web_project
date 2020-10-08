import React from 'react'
import {
    Route,
    Link
} from "react-router-dom";

import Sign from '../comm_three_menu/sign'
import Say from '../comm_three_menu/say'
import Selected from '../comm_three_menu/selected'
import GoodShop from '../comm_three_menu/good_shop'


let materConfig = [
    {
        "name": "早安签到",
        "types": 7,
        "url": "/sign/",
        "image": "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
        "component": Sign
    },
    {
        "name": "遇见说",
        "types": 7,
        "url": "/say/",
        "image": "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
        "component": Say
    },
    {
        "name": "花生严选",
        "types": 7,
        "url": "/selected/",
        "image": "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
        "component": Selected
    },
    {
        "name": "星选好店",
        "types": 7,
        "url": "/gootshop/",
        "image": "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
        "component": GoodShop
    }
]
class Material extends React.Component{
    render(){
        return (
            <div>
                {/* 三级菜单 */}
                <div className="topNav">
                    <ul>
                        {
                            materConfig.map((item,home)=>{
                                return (<li key={home}> <Link to={'/community/material'+item.url}>{item.name}</Link> </li>)
                            })
                        }                        
                    </ul>
                </div>
                <div className="videoContent">
                    {
                        materConfig.map((item,home)=>{
                            return (<Route key={home} exact={item.exact} path={'/community/material'+item.url}  component={item.component} />)
                        })
                    }
                </div>
                Material 宣传素材页
            </div>
        )
    }
    
}
 

export default Material;