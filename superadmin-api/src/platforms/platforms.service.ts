import { HttpException, HttpStatus, Injectable, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/auth/auth/jwt.guard';
import { PrismaService } from 'src/prisma.service';
import { CreatePlatformDto } from './dto/create-platform.dto';
import { UpdatePlatformDto } from './dto/update-platform.dto';

@Injectable()
export class PlatformsService {

  constructor(private prisma: PrismaService) {

  }

  @UseGuards(JwtGuard)
  async create(data: CreatePlatformDto) {
    const platformExists = await this.prisma.platforms.findFirst({
      where: {
        name: data.name
      }
    })
    if (platformExists !== null && platformExists !== undefined && platformExists.name === data.name) {
      throw new HttpException('Platform already exists', HttpStatus.CONFLICT)
    }

    const platform = await this.prisma.platforms.create({
      data
    })
      
  }

  findAll() {
    return this.prisma.platforms.findMany()
  }

  findOne(id: number) {
    return this.prisma.platforms.findUnique({
      where: {
        id
      }
    })
  }

  update(id: number, updatePlatformDto: UpdatePlatformDto) {
    return this.prisma.platforms.update({
      where: {
        id
      },
      data: updatePlatformDto
    })
  }

  remove(id: number) {
    return this.prisma.platforms.delete({
      where: {
        id
      }
    })
  }
}
