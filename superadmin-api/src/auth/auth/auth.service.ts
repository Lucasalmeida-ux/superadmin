import { HttpService } from '@nestjs/axios';
import { HttpException, Injectable } from '@nestjs/common';
import { catchError, firstValueFrom } from 'rxjs';

//Reactive X
@Injectable()
export class AuthService {
    constructor(private http: HttpService) {}

    async login(username: string, password: string) {
        const promise = this.http.post(
            'http://host.docker.internal:8080/auth/realms/superadmin/protocol/openid-connect/token',
            new URLSearchParams({
                client_id: process.env.CLIENT_ID,
                client_secret: process.env.KEYCLOAK_CLIENT_SECRET,
                grant_type: 'password',
                username,
                password,
            }),
        ).pipe(
            catchError(e => {
                console.log("error", e.response.data)
              throw new HttpException(e.response.data, e.response.status);
            }),
          );
        const { data } = await firstValueFrom(promise);

        return data;
    }
}
