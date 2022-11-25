import { Controller, Get, Param, Post, Body, Put } from '@nestjs/common';
import { Museum } from './museum.schema';
import { MuseumService } from './museums.service';

@Controller('museums')
export class MuseumController {
  constructor(private readonly museumService: MuseumService) {}

  @Get()
  async getMuseums(): Promise<Museum[]> {
    const museums = await this.museumService.findAll();
    return museums;
  }

  @Get('/:id')
  async getMuseum(@Param('id') id: string): Promise<Museum> {
    const museum = await this.museumService.findById(id);
    return museum;
  }
}
