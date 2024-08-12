import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  SearchOutlined,
  MinusOutlined
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu, theme, Button } from 'antd';

const { Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  {
    type: 'divider',
  },
  getItem('Investigate', 'sub1', <div className='p-2 border border-gray-300 border-solid rounded-md shadow-md'><SearchOutlined/></div>, [
    getItem('Investigate by tx hash', '2', <MinusOutlined className='opacity-50'/>),
    getItem('Investigate by address', '3', <MinusOutlined className='opacity-50'/>),
  ]),
  getItem('Chart', 'sub2', <div className='p-2 border border-gray-300 border-solid rounded-md shadow-md'><PieChartOutlined /></div>, [
    getItem('Chart 1', '2', <MinusOutlined className='opacity-50'/>),
    getItem('Chart 2', '3', <MinusOutlined className='opacity-50'/>),
  ]),
  getItem('Option 2', '2', <DesktopOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  {
    type: 'divider',
  },
  getItem('Team', 'sub2', <TeamOutlined />, [
    getItem('Team 1', '6'),
    getItem('Team 2', '8'),
  ]),
  getItem('Files', '9', <FileOutlined />),
];

const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  
  const onMenuClick = (path: string) => {
    onChangeSelectedKey(path);
    navigate(path);
  };

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  console.log(theme.useToken());

  return (
    <Sider width={250} className='shadow-sm' style={{ background: colorBgContainer }}>
      <div className='mt-4 mb-0 text-center'>
        <h3 className='text-lg font-bold'>Chain Tracking App</h3>
      </div>,
      <Menu
        className='py-2 text-xs '
        color={colorBgContainer}
        mode="inline"
        selectedKeys={[selectedKey]}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{ height: '100%', borderRight: 0 }}
        items={items}
      />
    </Sider>
  );
};

export default Sidebar;
