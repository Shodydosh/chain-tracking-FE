import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import { Breadcrumb, Layout, Menu, Space, theme } from 'antd';
const { Content, Sider } = Layout;

type Props = {
  auth?: boolean;
  children?: JSX.Element | JSX.Element[];
};

const LayoutWrap = ({ auth, children }: Props) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Sidebar />
      <Layout
        style={{
          padding: '0 24px 24px',
        }}
      >
        <Header />
        <Breadcrumb
          style={{
            margin: '16px 0',
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {auth ? <h1>AUTH!</h1> : <h1>NO AUTH!</h1>}
          {children}
        </Content>
        <Footer />
      </Layout>
    </Layout>
  );
};
export default LayoutWrap;
