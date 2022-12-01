import { AppstoreAddOutlined, OrderedListOutlined } from "@ant-design/icons";

export const items = [
    {
        key: '1',
        icon: <OrderedListOutlined />,
        label: 'Plataformas',
        url: '/panel/platforms',
    },
    {
        key: '2',
        icon: <AppstoreAddOutlined />,
        label: 'Nova Plataforma',
        url: '/panel/platforms/create',
    }
];