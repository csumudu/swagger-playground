import React, { useState, useEffect } from 'react';
import { Layout, Menu } from 'antd';
import { PlusSquareOutlined } from '@ant-design/icons';
import ctx from '../../shared/services/ContextService';
import './LeftNav.scss';

const { Sider } = Layout;

const LeftNav = ({ isCollapsed, onCollapse }) => {
  const [selectedKeys, setSelectedKeys] = useState([]);
  const [allFile, setAllFiles] = useState([]);

  useEffect(() => {
    const sub = ctx.allFiles$.subscribe((v) => setAllFiles(v));
    const sub2 = ctx.selectedFile$.subscribe((v) => {
      if (v) {
        console.log(v);
        setSelectedKeys([String(v.id)]);
      }
    });

    return () => {
      sub.unsubscribe();
      sub2.unsubscribe();
    };
  }, []);

  const menuClickHandler = (m, e) => {
    ctx.setSelectedFile(m);
  };

  return (
    <Sider
      onCollapse={onCollapse}
      collapsible
      collapsed={isCollapsed}
      width={250}
      style={{
        paddingLeft: 0,
        paddingRight: 0,
      }}
      className="letf-nav site-layout-background"
    >
      <Menu
        mode="inline"
        selectedKeys={selectedKeys}
        style={{ height: '100%', borderRight: 0 }}
      >
        {allFile.map((m) => {
          return (
            <Menu.Item
              icon={m.icon || <PlusSquareOutlined />}
              key={m.id}
              onClick={menuClickHandler.bind(this, m)}
            >
              {m.displayName || m.name}
            </Menu.Item>
          );
        })}
      </Menu>
    </Sider>
  );
};

export default LeftNav;
