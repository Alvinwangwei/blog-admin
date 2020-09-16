import React from 'react';
import './layout.css'

import { Layout } from 'antd';
import { 
  Route
 } from 'react-router-dom'

import Mysider from '../../components/sider/sider'
import Myheader from '../../components/header/header'

import { routes } from '../../consts/routes'

const { Content, Footer } = Layout;

export default class SiderDemo extends React.Component {
  state = {
    collapsed: false
  }
  toggle = () => {
    this.setState({
        collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout className='layout-box'>
        <Mysider collapsed={this.state.collapsed} />
        <Layout className="site-layout">
          <Myheader collapsed={this.state.collapsed} onClick={() => this.toggle()}/>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px 0',
              padding: 24,
              minHeight: 280,
            }}>
            {
              routes.map((el) => {
                return <Route 
                          key={el.key} 
                          path={el.path} 
                          component={el.component}>
                      </Route>
              })
            }
          </Content>
          <Footer
            style={{textAlign: 'center'}}
          >
            Copyright © Water 2020
          </Footer>
        </Layout>
        
      </Layout>
    );
  }
}