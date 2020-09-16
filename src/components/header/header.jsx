import React from 'react'

import {
    MenuUnfoldOutlined,
    MenuFoldOutlined
  } from '@ant-design/icons';

import { Layout } from 'antd';

const { Header } = Layout;

export default class Myhead extends React.Component {
    render() {
        return (
            <Header className="site-layout-background" style={{ padding: 0 }}>
                {React.createElement(this.props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                    className: 'trigger',
                    onClick: this.props.onClick,
                })}
            </Header>
        )
    }
}