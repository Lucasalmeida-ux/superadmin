import { DeleteOutlined, EditOutlined, EllipsisOutlined, EyeOutlined, SettingOutlined } from "@ant-design/icons";
import { Card, message } from "antd";
import Meta from "antd/lib/card/Meta";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";

type Props = {
    platform: {
        id: number;
        name: string;
        ip: string;
        port: number;
    };
};
export default function CardPlatform ({ platform }: Props) {
    const [state, setState ] = useState({
        visible: true,
    });
    const session = useSession();
    const router = useRouter();
    const [messageApi, contextHolder] = message.useMessage();
    const removePlatform = (id: Number) => {
        const url = `/api/platforms/${id}`;
        axios.delete(url, {
            headers: {
                "Authorization": `Bearer ${session?.data?.token.accessToken}`
            }
        }).then((response: any) => {
            messageApi.success('Plataforma removida!');
            setState({ ...state, visible: false });
        }).catch((error: any) => {
            messageApi.error('Erro ao remover!');
            console.log(error);
        });
    };
    
    return (
        <Card
            style={{ width: 300 }}
            actions={[
                <EyeOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <DeleteOutlined key="ellipsis" onClick={() => removePlatform(platform.id)} />,
            ]}
        >
            {contextHolder}
            <Meta
                // avatar={<Avatar />}
                title={platform.name}
                description={`${platform.ip}:${platform.port}`}
            />
        </Card>
    );
}