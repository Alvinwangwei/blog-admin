import React from 'react'

import {
    HomeOutlined,
    EditOutlined
  } from '@ant-design/icons';

import { Layout, Menu } from 'antd';

const { Sider } = Layout;

export default class Mysider extends React.Component {
    render() {
        return (
            <Sider trigger={null} collapsible collapsed={this.props.collapsed}>
                <div className="logo" />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="home" icon={<HomeOutlined />}>
                    首页
                    </Menu.Item>
                    <Menu.SubMenu key="blog" icon={<EditOutlined />} title="博客">
                    <Menu.Item key="write">发布博客</Menu.Item>
                    </Menu.SubMenu>
                </Menu>
            </Sider>
        )
    }
}