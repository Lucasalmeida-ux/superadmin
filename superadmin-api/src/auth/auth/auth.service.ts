import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
//Reactive X
@Injectable()
export class AuthService {
    constructor(private http: HttpService) {}

    async login(username: string, password: string) {
        console.log(
            '🚀 ~ file: auth.service.ts ~ line 10 ~ AuthService ~ login ~ username: string, password: string',
            username,
            password,
            process.env.KEYCLOAK_CLIENT_SECRET,
        );
        const { data } = await firstValueFrom(
            this.http.post(
                'http://host.docker.internal:8080/auth/realms/superadmin/protocol/openid-connect/token',
                new URLSearchParams({
                    client_id: 'nestjs',
                    client_secret: process.env.KEYCLOAK_CLIENT_SECRET,
                    grant_type: 'password',
                    username,
                    password,
                }),
            ),
        );
        return data;
    }
}
