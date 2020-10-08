import React from 'react'
import ReactDOM from 'react-dom'


import 'antd/dist/antd.css';
import MediaQuery from 'react-responsive'

import ScreenIndex from './components/screen_index'


class Index extends React.Component{
    render(){
        return (
            
            <div>
                <ScreenIndex></ScreenIndex>
            </div>
            
            
            
        )
    }
}

ReactDOM.render(
    <Index></Index>,
    document.getElementById("root")
)