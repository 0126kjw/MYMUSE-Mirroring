import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { crawlExhibitions } from '../crawling/exhibition.crawling';
import { ExhibitionService } from '../exhibitions.service';

@Injectable()
export class ExhibitionScheduler {
  constructor(private readonly exhibitionService: ExhibitionService) {}

  @Cron('0 0 0 * * *')
  async handleCron(): Promise<void> {
    const exhibitionList = await crawlExhibitions();

    await this.exhibitionService.create(exhibitionList);
  }
}
