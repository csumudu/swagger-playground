import React from 'react';
import {
  UserOutlined,
  CalendarOutlined,
  CarOutlined,
  EnvironmentOutlined,
  IdcardOutlined,
} from '@ant-design/icons';

const AppMenu = [
  {
    id: '100',
    name: 'Dashboard',
    icon: '',
    routes: ['/dashboard'],
    subMenu: [],
  },
  {
    id: '200',
    name: 'Manage',
    icon: '',
    routes: ['/manage'],
  },
];

export default AppMenu;
