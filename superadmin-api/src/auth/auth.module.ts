import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma.service';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { JwtStrategyService } from './jwt-strategy/jwt-strategy.service';

@Module({
    imports: [
        HttpModule,
        JwtModule.register({
            secret: 'abcd123456',
            signOptions: {
                expiresIn: '60s',
            },
        }),
    ],
    controllers: [AuthController],
    providers: [AuthService, JwtStrategyService, PrismaService],
})
export class AuthModule {}
