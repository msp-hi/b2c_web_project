import React from 'react'
import ReactDOM from 'react-dom'


import 'antd/dist/antd.css';
import MediaQuery from 'react-responsive'

import MobileIndex from './components/mobile_index'
import PCIndex from './components/pc_index'

class Index extends React.Component{
    render(){
        return (
            
                <div>
                <MediaQuery query="(min-device-width:1224px)">
                    <PCIndex></PCIndex>
                </MediaQuery>
                <MediaQuery query="(max-device-width:1224px)">
                    <MobileIndex></MobileIndex>
                </MediaQuery>
            </div>
  
        )
    }
}

ReactDOM.render(
    <Index></Index>,
    document.getElementById("root")
)