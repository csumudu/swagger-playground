import React, { Component } from 'react'
import { Layout, Menu, Row, Col, Avatar } from 'antd';
import "./Header.scss";
import { withRouter } from "react-router-dom";
import { useAppMenu } from '../../shared/hooks/useAppMenu';
import UserAvatar from './UserAvatar';

const { Header: HeaderWidget } = Layout;

const Header = ({ history }) => {
    const { topMenu, selectedMainMenu } = useAppMenu(history);

    const onClickHandler = (menu) => {
        const [path] = menu.routes
        if (path) {
            history.push(path)
        }
    }
    return (
        <div className="layout-header">
            <HeaderWidget>
                <Row style={{ flexFlow: "row" }}>
                    <Col flex="auto">
                        <div className="logo"><img src="logo_csgi_150.png"></img> <span>| swagger playground</span></div>
                        <Menu theme="dark" mode="horizontal" selectedKeys={[selectedMainMenu.id]} >
                            {topMenu.map(m =>
                                <Menu.Item key={m.id} onClick={onClickHandler.bind(this, m)}>{m.name}</Menu.Item>)}
                        </Menu>
                    </Col>
                    <Col flex="200px" className="icon-container">
                        <UserAvatar />
                    </Col>
                </Row>
            </HeaderWidget>
        </div>
    )
}

export default withRouter(Header)