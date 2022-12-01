import {
    HomeOutlined,
    LoginOutlined,
    LogoutOutlined,
    TrophyOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
import { FC } from 'react';
// importar a função de logout
import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { Items } from '../../types/item';

type LayoutProps = {
    children?: React.ReactNode;
    menuItems: Items[];
}
export const LayoutAdmin: FC<LayoutProps> = ({ menuItems = null, children }) => {
    const { Header, Sider, Content } = Layout;
    const [collapsed, setCollapsed] = useState(false);
    const router = useRouter()
    const session = useSession();
    const topBarMenuItens = session.data ? [
        {
            key: 'home',
            icon: <HomeOutlined />,
            label: 'Home',
            onClick: () => router.push('/panel'),
        },
        {
            key: 'plataforms',
            icon: <TrophyOutlined />,
            label: 'Plataformas',
            onClick: () => router.push('/panel/platforms'),
        },
        {
            key: 'logout',
            icon: <LogoutOutlined />,
            label: 'Sair',
            onClick: () => signOut(),
        },
    ] : [
        {
            key: 'login',
            icon: <LoginOutlined />,
            label: 'Entrar',
            onClick: () => signIn("keycloak"),
        },
    ]

    return <>
        <Layout className="layout">
            {menuItems && <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="logo"> SUPER ADMIN</div>
                <Menu
                    theme="dark"
                    mode="inline"
                // defaultSelectedKeys={defaultSelectedKey ? [defaultSelectedKey] : []}
                >
                    {menuItems && menuItems.map((item:Items) => {
                        return (
                            <Menu.Item key={item.key} icon={item.icon} onClick={() => router.push(item.url || "/")}>
                                {item.label}
                            </Menu.Item>
                        );
                    }
                    )}
                </Menu>
            </Sider>}
            <Layout className="site-layout">
                <Header
                    className="site-layout-background"
                    style={{
                        padding: 0,
                    }}
                >
                    {/* {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: () => setCollapsed(!collapsed),
                        })} */}
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        // defaultSelectedKeys={['1']}
                        items={topBarMenuItens}
                    />
                </Header>
                <Content
                    className="site-layout-background"
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                    }}
                >
                    {children}
                </Content>
            </Layout>
        </Layout>
    </>
}