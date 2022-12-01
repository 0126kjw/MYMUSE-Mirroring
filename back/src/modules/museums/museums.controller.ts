import { Controller, Get, Param, Post, Body, Put, Query } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';
import { Museum } from './schemas/museum.schema';
import { MuseumService } from './museums.service';
import { GetMuseumDto } from './dto/getMuseum.dto';
import { GetMuseumPagenationDto } from './dto/getMuseumPagenation.dto';

@ApiTags('Museum')
@Controller('museums')
export class MuseumController {
  constructor(private readonly museumService: MuseumService) {}

  // @ApiOperation({ summary: '박물관/전시관 전체 목록' })
  // @Get()
  // async getMuseums(): Promise<Museum[]> {
  //   const museums = await this.museumService.findAll();
  //   return museums;
  // }

  @ApiOperation({ summary: '박물관/전시관 상세' })
  @Get('/:id')
  async getMuseum(@Param() getMuseumDto: GetMuseumDto): Promise<Museum> {
    const museum = await this.museumService.findById(getMuseumDto.id);
    return museum;
  }

  @ApiOperation({ summary: '박물관/전시관 목록 9개씩' })
  @Get()
  async listMuseum(@Query() getMuseumPagenationDto: GetMuseumPagenationDto) {
    const listMuseum = await this.museumService.pagination(
      getMuseumPagenationDto.page,
    );
    return listMuseum;
  }
}
