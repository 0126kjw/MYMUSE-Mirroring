import { HttpModule } from '@nestjs/axios/dist';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ExhibitionModule } from '../exhibitions/exhibitions.module';
import { MuseumModule } from '../museums/museums.module';
import { ChatbotController } from './chatbots.controller';
import { ChatbotService } from './chatbots.service';
import { ChatbotScheduler } from './scheduler/chatbot.scheduler';
import { Chatbot, ChatbotSchema } from './schemas/chatbot.schema';

@Module({
  imports: [
    HttpModule,
    MuseumModule,
    ExhibitionModule,
    MongooseModule.forFeature([{ name: Chatbot.name, schema: ChatbotSchema }]),
  ],
  controllers: [ChatbotController],
  providers: [ChatbotService, ChatbotScheduler],
})
export class ChatbotModule {}
