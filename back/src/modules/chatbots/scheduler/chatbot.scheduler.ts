import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { ChatbotService } from '../chatbots.service';

@Injectable()
export class ChatbotScheduler {
  constructor(private readonly chatbotService: ChatbotService) {}

  @Cron('33 * * * * *')
  async chatbotCron(): Promise<void> {
    const EMPTY_SENTIMENT = -1;
    const emptySentiment = await this.chatbotService.findBySantiment(
      EMPTY_SENTIMENT,
    );

    if (!emptySentiment) {
    } else {
      await this.chatbotService.updateChatbotSentiment(emptySentiment);
    }
  }
}
