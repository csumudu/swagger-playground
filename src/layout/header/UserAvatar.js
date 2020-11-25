import React, { useContext } from 'react';
import { Menu, Dropdown, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Link, useHistory } from 'react-router-dom';
import './UserAvatar.scss';

const UserAvatar = () => {
  const history = useHistory();

  const menu = (
    <Menu>
      <Menu.Item>
        <Link to="/profile">My Profile</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/admin/settings">Settings</Link>
      </Menu.Item>
      <Menu.Item primary="true">Logout</Menu.Item>
    </Menu>
  );

  return (
    <div className="header-user-avatar">
      <Dropdown overlay={menu}>
        <Avatar icon={<UserOutlined />} />
      </Dropdown>
    </div>
  );
};

export default UserAvatar;
