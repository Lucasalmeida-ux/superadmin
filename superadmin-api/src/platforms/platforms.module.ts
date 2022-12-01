import { Module } from '@nestjs/common';
import { PlatformsService } from './platforms.service';
import { PlatformsController } from './platforms.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [PlatformsController],
  providers: [PlatformsService, PrismaService],
})
export class PlatformsModule {}
