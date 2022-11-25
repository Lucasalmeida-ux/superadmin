
import { JwtGuard } from './jwt.guard';
import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('login')
    login(@Body() body) {
        return this.authService.login(body.username, body.password);
    }

    @UseGuards(JwtGuard)
    @Post('auth')
    async auth(@Req() req) {
        const session = {
            providerAccountId: req.body.providerAccountId,
            access_token: req.body.access_token,
            expires_at: req.body.expires_at,
            refresh_expires_in: req.body.refresh_expires_in,
            refresh_token: req.body.refresh_token,
            token_type: req.body.token_type,
            id_token: req.body.id_token,
            session_state: req.body.session_state,
            scope: req.body.scope,
        }
        console.log(session, req)
        return {
            body: req.body, user: req.user,
        };
    }
}
