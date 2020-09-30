import React from 'react'


import { Button, Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;


export default class PC_incomme extends React.Component {
    render() {
        return (
            <Layout>
                <Header>PC_Header</Header>
                <Content>PC_Content</Content>
                <Footer>PC_Footer</Footer>
            </Layout>
        )
    }
}
