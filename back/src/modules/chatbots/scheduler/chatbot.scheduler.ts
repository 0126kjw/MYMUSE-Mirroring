import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cron } from '@nestjs/schedule';
import { Chatbot } from '../schemas/chatbot.schema';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class ChatbotScheduler {
  constructor(
    @InjectModel(Chatbot.name)
    private readonly chatbotModel: Model<Chatbot>,
    private readonly httpService: HttpService,
  ) {}

  @Cron('22 * * * * *')
  async chatbotCron(): Promise<void> {
    const chatbots = await this.chatbotModel.find({ sentiment: -1 });

    chatbots.map(async (chatbot) => {
      console.log(chatbot.feedback);
      const getSentiment = await this.httpService.axiosRef.get(
        `http://127.0.0.1:5000/api/predict?feedback=${chatbot.feedback}`,
      );

      console.log(chatbot.id);
      console.log(getSentiment.data);

      await this.chatbotModel.updateOne(
        { _id: chatbot.id },
        { sentiment: getSentiment.data },
      );
    });
  }
}
