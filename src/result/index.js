import React from 'react'
import ReactDOM from 'react-dom'


import 'antd/dist/antd.css';
import MediaQuery from 'react-responsive'

import ResultIndex from './components/result_index'


class Index extends React.Component{
    render(){
        return (
            
            <div>
                <ResultIndex></ResultIndex>
            </div>
            
            
            
        )
    }
}

ReactDOM.render(
    <Index></Index>,
    document.getElementById("root")
)