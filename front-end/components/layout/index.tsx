import {
    LogoutOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    TrophyOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
import { FC } from 'react';
// importar a função de logout
import { signOut } from 'next-auth/react';

interface LayoutProps {
    children?: React.ReactNode;
}
export const LayoutAdmin: FC<LayoutProps> = (props) =>{
    const { Header, Sider, Content } = Layout;
    const [collapsed, setCollapsed] = useState(false);
return <>
    <Layout className="layout">
                <Sider trigger={null} collapsible collapsed={collapsed}>
                    <div className="logo"> SUPER ADMIN</div>
                    <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        items={[
                            {
                                key: '1',
                                icon: <TrophyOutlined />,
                                label: 'Plataforma de sorteio',
                            },
                            {
                                key: '2',
                                icon: <LogoutOutlined />,
                                label: 'Logout',
                                onClick: () => signOut(),
                            },
                        ]}
                    />
                </Sider>
                <Layout className="site-layout">
                    <Header
                        className="site-layout-background"
                        style={{
                        padding: 0,
                        }}
                    >
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: () => setCollapsed(!collapsed),
                    })}
                    </Header>
                    <Content
                        className="site-layout-background"
                        style={{
                        margin: '24px 16px',
                        padding: 24,
                        }}
                    >
                    {props.children}
                    </Content>
            </Layout>
            </Layout>
        </>
}