import React from 'react'
import ReactDOM from 'react-dom'
import 'antd/dist/antd.css';


import MOBILE_incomme from "./js/mobile_income"
import PC_incomme from "./js/PC_income"
import "./css/mobile_index.css"
// import PCIndex from './components/pc_index'

class Index extends React.Component{
    render(){
        return (
            <div>
                <MOBILE_incomme></MOBILE_incomme>
                {/* <PC_incomme></PC_incomme> */}
            </div>
        )
    }
}


ReactDOM.render(
    <Index></Index>,
    document.getElementById("root")
)
