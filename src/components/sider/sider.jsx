import React from 'react'

import {
    HomeOutlined,
    EditOutlined
  } from '@ant-design/icons';

import {
    Link
  } from "react-router-dom";

import { Layout, Menu } from 'antd';

const { Sider } = Layout;

export default class Mysider extends React.Component {
    handleClick = e => {
        console.log('click', e)
    }
    render() {
        return (
            <Sider trigger={null} collapsible collapsed={this.props.collapsed}>
                <div className="logo" />
                <Menu onClick={this.handleClick} theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="home" icon={<HomeOutlined />}>
                        <Link to="/app/index"/>
                        首页
                    </Menu.Item>
                    <Menu.SubMenu key="blog" icon={<EditOutlined />} title="博客">
                        <Menu.Item key="write">
                            <Link to="/app/blog/post"/>
                            发布博客
                        </Menu.Item>
                    </Menu.SubMenu>
                </Menu>
            </Sider>
        )
    }
}