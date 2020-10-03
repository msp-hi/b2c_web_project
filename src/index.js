import React from 'react'
import ReactDOM from 'react-dom'
import 'antd/dist/antd.css';

// import PCIndex from './components/pc_index'
// import Mobile_order from  "./js/mobile_order"
import Mobile_fans from "./js/mobile_fans"
import "./css/mobile_order.css"
class Index extends React.Component{
    render(){
        return (
            <div>
                {/* <Mobile_order></Mobile_order> */}
                <Mobile_fans></Mobile_fans>
            </div>
        )
    }
}


ReactDOM.render(
    <Index></Index>,
    document.getElementById("root")
)
