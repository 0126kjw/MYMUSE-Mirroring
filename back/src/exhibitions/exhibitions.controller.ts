import { Controller, Get, Param } from '@nestjs/common';
import { Exhibition } from './exhibition.schema';
import { ExhibitionService } from './exhibitions.service';

@Controller('exhibitions')
export class ExhibitionController {
  constructor(private readonly exhibitionService: ExhibitionService) {}

  @Get()
  async getExhibitions(): Promise<Exhibition[]> {
    const exhibitions = await this.exhibitionService.findAll();
    return exhibitions;
  }

  @Get('/:id')
  async getExhibition(@Param('id') id: string): Promise<Exhibition> {
    const exhibition = await this.exhibitionService.findById(id);
    return exhibition;
  }
}
